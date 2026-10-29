/* ─── RentUP: titluri cu cuvânt care se schimbă (blur pe litere) ───────
   Markup: <span class="rot" data-words="a.|b.|c.">a.</span>
   Titlul poate avea data-en="..." cu varianta în engleză (poate conține și ea un .rot animat). */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var st=document.createElement('style');
  st.textContent='.rot{display:inline-block;white-space:nowrap;vertical-align:bottom;transition:width 700ms cubic-bezier(0.45,0,0.2,1)}.rot-m{position:absolute;left:0;top:0;visibility:hidden;pointer-events:none;white-space:nowrap}.rot-m .ch{display:inline-block}.rot .ch{display:inline-block;will-change:opacity,filter,transform;transition:opacity 520ms cubic-bezier(0.23,1,0.32,1),filter 520ms cubic-bezier(0.23,1,0.32,1),transform 520ms cubic-bezier(0.23,1,0.32,1)}.rot .ch.off{opacity:0;filter:blur(.2em);transform:translateY(.12em)}';
  document.head.appendChild(st);
  var STAG_IN=38,STAG_OUT=18,OUT_MS=340,HOLD=3200;
  var heads=[].slice.call(document.querySelectorAll('h1,h2')).filter(function(h){return h.querySelector('.rot')});
  if(!heads.length) return;
  function letters(el,word,off){
    el.textContent='';
    for(var i=0;i<word.length;i++){
      var s=document.createElement('span');
      s.className='ch'+(word[i]==='.'?' pt':'')+(off?' off':'');
      s.textContent=word[i]===' '?'\u00a0':word[i];
      el.appendChild(s);
    }
  }
  /* măsurăm într-o copie invizibilă: dacă am trece .rot prin width:auto, tranziția de lățime ar sări brusc */
  function natural(el,word){
    var m=el._m;
    if(!m||!m.isConnected){m=el._m=document.createElement('span');m.className='rot-m';m.setAttribute('aria-hidden','true');el.parentNode.insertBefore(m,el.nextSibling)}
    letters(m,word);
    return m.getBoundingClientRect().width;
  }
  function setup(g){
    g.rots=[].slice.call(g.h.querySelectorAll('.rot'));
    g.rots.forEach(function(el){el._words=el.dataset.words.split('|');el._i=0;letters(el,el._words[0])});
  }
  /* cuvântul a sărit pe rândul următor față de ultima literă din textul de dinainte? */
  function wraps(h,el){
    var tw=document.createTreeWalker(h,NodeFilter.SHOW_TEXT),n,last=null;
    while((n=tw.nextNode())){if(el.contains(n))break;if(/\S/.test(n.data))last=n}
    if(!last) return false;
    var i=last.data.search(/\S\s*$/),r=document.createRange();
    r.setStart(last,i);r.setEnd(last,i+1);
    /* comparăm centrele: caseta literei e mai înaltă decât rândul (line-height mic), așa că marginile se suprapun */
    var a=el.getBoundingClientRect(),b=r.getBoundingClientRect();
    return (a.top+a.bottom)/2-(b.top+b.bottom)/2>a.height/2;
  }
  function fit(g){
    if(!g.rots) return;
    g.h.style.minHeight='';
    /* dacă măcar o variantă nu mai încape pe rândul textului, le punem pe toate pe rând nou, ca titlul să nu sară între 2 și 3 rânduri */
    g.rots.forEach(function(el){
      if(el._pre){while(el._pre.firstChild)el._pre.parentNode.insertBefore(el._pre.firstChild,el._pre);el._pre.remove();el._pre=null}
      var cur=el._words[el._i],any=false;
      el.style.width='auto';
      el._words.forEach(function(w){letters(el,w);if(wraps(g.h,el))any=true});
      letters(el,cur);
      if(any){
        /* textul de dinainte devine bloc separat, ca să-și echilibreze singur rândurile (cu <br> rămânea un cuvânt orfan) */
        var top=el;while(top.parentNode!==g.h)top=top.parentNode;
        if(top.previousSibling){
          var pre=el._pre=document.createElement('span');pre.style.display='block';
          while(g.h.firstChild!==top)pre.appendChild(g.h.firstChild);
          g.h.insertBefore(pre,top);
        }
      }
    });
    var max=0;
    g.rots.forEach(function(el){
      var cur=el._words[el._i];
      el._words.forEach(function(w){el.style.width='auto';letters(el,w);max=Math.max(max,g.h.offsetHeight)});
      letters(el,cur);el.style.width=natural(el,cur)+'px';
    });
    g.h.style.minHeight=max+'px';
  }
  function swap(el){
    var chs=el.querySelectorAll('.ch');
    for(var i=0;i<chs.length;i++){chs[i].style.transitionDelay=(i*STAG_OUT)+'ms';chs[i].classList.add('off')}
    setTimeout(function(){
      if(!el.isConnected) return;
      el._i=(el._i+1)%el._words.length;
      var word=el._words[el._i];
      letters(el,word,true);
      el.style.width=natural(el,word)+'px';
      var nc=el.querySelectorAll('.ch');
      void el.offsetWidth;
      for(var j=0;j<nc.length;j++){nc[j].style.transitionDelay=(j*STAG_IN)+'ms';nc[j].classList.remove('off')}
    },OUT_MS+chs.length*STAG_OUT);
  }
  var groups=heads.map(function(h){return {h:h,ro:h.innerHTML,en:h.getAttribute('data-en'),vis:false,next:0}});
  /* lang.js traduce noduri de text întregi; în EN afișăm titlul tradus, static */
  function applyLang(){
    var en=document.documentElement.lang==='en';
    groups.forEach(function(g){
      if(!g.en) return;
      if(en===!!g.isEn) return;
      g.isEn=en;g.h.innerHTML=en?g.en:g.ro;setup(g);fit(g);
    });
  }
  groups.forEach(setup);
  var io=new IntersectionObserver(function(es){es.forEach(function(e){groups.forEach(function(g){if(g.h===e.target)g.vis=e.isIntersecting})})});
  groups.forEach(function(g){io.observe(g.h)});
  /* nu așteptăm fontul la nesfârșit pe net lent: pornim după max 1.5s și remăsurăm când ajunge */
  var fontsReady=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();
  var started=false;
  fontsReady.then(function(){if(started)groups.forEach(fit)});
  /* un font poate ajunge și după fonts.ready (încărcare leneșă): remăsurăm, altfel decizia de rând nou rămâne luată pe fontul de rezervă */
  if(document.fonts&&document.fonts.addEventListener) document.fonts.addEventListener('loadingdone',function(){if(started)groups.forEach(fit)});
  Promise.race([fontsReady,new Promise(function(r){setTimeout(r,1500)})]).then(function(){
    started=true;
    groups.forEach(fit);
    applyLang();
    new MutationObserver(applyLang).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    var t0=Date.now()+2600;
    groups.forEach(function(g){g.next=t0});
    setInterval(function(){
      if(document.hidden) return;
      var now=Date.now();
      groups.forEach(function(g){
        if(!g.rots||now<g.next) return;
        if(!g.vis){g.next=now+600;return}
        g.next=now+HOLD;
        g.rots.forEach(swap);
      });
    },200);
  });
  var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){groups.forEach(fit)},200)});
})();
