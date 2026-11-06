/* Scripturile homepage-ului (mutate din index.html, încărcate cu defer) */
let changes=2,city='buc',ptype='g',years=5,tab='loss';
/* chirii medii cerute în anunțuri, pe tot orașul (Storia, mai 2026) */
const MKT={buc:{g:395,c2:583,c3:846},cj:{g:400,c2:550,c3:700},bv:{g:350,c2:500,c3:650}};
/* ținta RentUP pe tip de apartament, separată de media din MKT */
const TARGET={buc:{g:450,c2:650,c3:900}};
const TARGET_NAMES={g:'o garsonieră amenajată',c2:'un apartament amenajat cu 2 camere',c3:'un apartament amenajat cu 3 camere'};
const TARGET_NAMES_EN={g:'an upgraded studio',c2:'an upgraded 2-room apartment',c3:'an upgraded 3-room apartment'};
const CITY_NAMES={buc:'București',cj:'Cluj',bv:'Brașov'};
const CITY_NAMES_EN={buc:'Bucharest',cj:'Cluj',bv:'Brasov'};
function isEn(){return document.documentElement.lang==='en';}
function fmt(n){return Math.round(n).toLocaleString('ro-RO')+'€';}

/* cifra mare se animă de la valoarea afișată la cea nouă */
function counter(id,sign){
  let shown=0,raf=0;
  return function(to){
    cancelAnimationFrame(raf);
    const from=shown;let t0=0;
    function step(ts){
      if(!t0)t0=ts;
      const k=Math.min(1,(ts-t0)/550),e=1-Math.pow(1-k,3);
      shown=from+(to-from)*e;
      document.getElementById(id).textContent=(sign?'+':'')+fmt(shown);
      if(k<1)raf=requestAnimationFrame(step);
    }
    raf=requestAnimationFrame(step);
  };
}
const cxBig=counter('cx-big',false),cxGain=counter('cx-gain',true);
function rowsHtml(rows){return rows.map(function(x){return '<div><dt>'+x[0]+'</dt><dd>'+x[1]+'</dd></div>';}).join('');}

/* pierderea folosește doar cifrele omului: chirie × luni goale + reparații × schimbări */
function calc(){
  const en=isEn();
  const rs=document.getElementById('re-s'),vs=document.getElementById('vac-s'),ri=document.getElementById('rep-i');
  const rent=parseInt(rs.value),vac=parseInt(vs.value);
  const repRaw=ri.value.trim(),rep=repRaw===''?null:Math.max(0,parseInt(repRaw)||0);
  [rs,vs].forEach(function(r){r.style.setProperty('--p',((r.value-r.min)/(r.max-r.min)*100)+'%');});
  const mo=function(n){return en?(n===1?' month':' months'):(n===1?' lună':' luni');};
  const pm=en?'/month':'/lună';
  document.getElementById('re-d').textContent=rent+'€'+pm;
  document.getElementById('vac-d').textContent=vac+mo(vac);
  ri.placeholder=en?'not sure':'nu știu';
  const chL=changes>=4?'4+':String(changes);
  const lostRent=vac*rent,lostRep=rep===null?0:rep*changes,total=lostRent+lostRep;
  cxBig(total);
  const repL=en?'Repairs between tenants':'Reparații între chiriași';
  document.getElementById('cx-src').innerHTML=rowsHtml([
    [(en?'Empty months':'Luni goale')+' <span>('+vac+' × '+fmt(rent)+')</span>',fmt(lostRent)],
    rep===null?[repL,en?'not filled in':'necompletat']:[repL+' <span>('+chL+' × '+fmt(rep)+')</span>',fmt(lostRep)]
  ]);
  let note;
  if(total===0) note=en
    ?'No empty months and no repair costs. You already have the ideal situation and you don’t need us.'
    :'Nicio lună goală și nicio reparație. Ai deja situația ideală și nu ai nevoie de noi.';
  else note=(en?'That is ~'+fmt(total/5)+' lost every year':'Înseamnă ~'+fmt(total/5)+' pierduți în fiecare an')
    +(rep===null?(en?', without repairs. Add them to see the full cost.':', fără reparații. Completează-le ca să vezi costul complet.'):'.');
  document.getElementById('cx-note').textContent=note;

  /* câștigul: ritmul lui din ultimii 5 ani dus pe orizontul ales, comparat cu un chiriaș care rămâne
     și o chirie cel puțin la media cerută în oraș (sau la ținta RentUP, unde există una) */
  const months=years*12,f=years/5,avg=MKT[city][ptype],tgt=(TARGET[city]&&TARGET[city][ptype])||avg,opt=Math.max(rent,tgt),hasTgt=tgt>avg;
  const vacN=vac*f,repN=(rep===null?0:rep*changes)*f;
  const netBad=(months-vacN)*rent-repN,netGood=months*opt;
  const fromVac=vacN*rent,fromRep=repN,fromRent=(opt-rent)*months,gain=netGood-netBad;
  const yl=years+(en?' years':' ani'),cityN=(en?CITY_NAMES_EN:CITY_NAMES)[city];
  document.getElementById('cx-gain-l').textContent=en?'Extra gain over '+yl:'Câștig în plus în '+yl;
  cxGain(gain);
  document.getElementById('g-cur').textContent=fmt(rent);
  document.getElementById('g-opt').textContent=fmt(opt);
  document.getElementById('g-unit').textContent=pm;
  document.getElementById('g-cur').parentNode.style.display=opt>rent?'':'none';
  document.getElementById('g-nb').textContent=fmt(netBad);
  document.getElementById('g-ng').textContent=fmt(netGood);
  const max=Math.max(netBad,netGood,1);
  document.getElementById('g-fb').style.width=Math.max(0,netBad/max*100)+'%';
  document.getElementById('g-fg').style.width=Math.max(0,netGood/max*100)+'%';
  const vacR=Math.round(vacN*10)/10;
  document.getElementById('g-src').innerHTML=rowsHtml([
    [(en?'Empty months avoided':'Luni goale evitate')+' <span>('+vacR+' × '+fmt(rent)+')</span>','+'+fmt(fromVac)],
    rep===null?[en?'Repairs avoided':'Reparații evitate',en?'not filled in':'necompletat']:[(en?'Repairs avoided':'Reparații evitate'),'+'+fmt(fromRep)],
    opt>rent
      ?[(hasTgt?(en?'Rent after the upgrade':'Chirie după amenajare'):(en?'Rent at the '+cityN+' average':'Chirie la media din '+cityN))+' <span>(+'+fmt(opt-rent)+pm+' × '+months+(en?' months':' luni')+')</span>','+'+fmt(fromRent)]
      :[(en?'Your rent is already at or above the '+cityN+' average':'Chiria ta e deja la media din '+cityN+' sau peste')+' <span>('+fmt(avg)+')</span>','0€']
  ]);
  const L=en?['Empty months','Repairs','Rent','Net income']:['Luni goale','Reparații','Chirie','Venit net'];
  document.getElementById('g-tb').innerHTML=
    '<tr><td>'+(en?'As until now':'Ca până acum')+'</td><td data-l="'+L[0]+'">~'+vacR+'</td><td data-l="'+L[1]+'">'+fmt(repN)+'</td><td data-l="'+L[2]+'">'+fmt(rent)+'</td><td data-l="'+L[3]+'">'+fmt(netBad)+'</td></tr>'
   +'<tr class="g"><td>'+(en?'With a tenant who stays':'Cu chiriaș care rămâne')+'</td><td data-l="'+L[0]+'">0</td><td data-l="'+L[1]+'">0€</td><td data-l="'+L[2]+'">'+fmt(opt)+'</td><td data-l="'+L[3]+'">'+fmt(netGood)+'</td></tr>';
  document.getElementById('g-how').textContent=en
    ?'“As until now” repeats your last 5 years over '+yl+': '+vac+' empty months and '+chL+' tenant changes every 5 years. “With a tenant who stays” assumes no empty months, no repairs between tenants and '+(hasTgt?'rent of at least '+fmt(tgt)+' (our target for '+TARGET_NAMES_EN[ptype]+' in '+cityN+'; the average asking rent is '+fmt(avg)+', Storia, May 2026)':'rent at least at the average asking rent in '+cityN+' ('+fmt(avg)+', Storia, May 2026)')+'. The average covers the whole city and varies a lot by area. Before the cost of furnishing.'
    :'„Ca până acum” repetă ultimii tăi 5 ani pe '+yl+': '+vac+' luni goale și '+chL+' schimbări de chiriaș la fiecare 5 ani. „Cu chiriaș care rămâne” înseamnă fără luni goale, fără reparații între chiriași și '+(hasTgt?'chiria de cel puțin '+fmt(tgt)+' (ținta noastră pentru '+TARGET_NAMES[ptype]+' în '+cityN+'; media cerută e '+fmt(avg)+', Storia, mai 2026)':'chiria cel puțin la media cerută în '+cityN+' ('+fmt(avg)+', Storia, mai 2026)')+'. Media e pe tot orașul și diferă mult de la o zonă la alta. Înainte de costul amenajării.';

  document.getElementById('cx-peek-l').textContent=tab==='loss'?(en?'It cost you in 5 years':'Te-a costat în 5 ani'):(en?'Extra gain over '+yl:'Câștig în plus în '+yl);
  document.getElementById('cx-peek-v').textContent=tab==='loss'?fmt(total):'+'+fmt(gain);
}

(function(){
  function moveInd(seg){
    const on=seg.querySelector('[aria-pressed="true"]'),ind=seg.querySelector('.cx-ind');
    ind.style.width=on.offsetWidth+'px';ind.style.transform='translateX('+on.offsetLeft+'px)';
  }
  function relayout(){document.querySelectorAll('#calc .cx-seg').forEach(moveInd);}
  document.querySelectorAll('#calc .cx-seg').forEach(function(seg){
    seg.addEventListener('click',function(e){
      const b=e.target.closest('button');if(!b)return;
      seg.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
      if(seg.hasAttribute('data-tabs')){
        tab=b.dataset.tab;
        document.querySelectorAll('#calc [data-pane]').forEach(function(p){p.classList.toggle('off',p.dataset.pane!==tab);});
        /* chiria e comună: o mutăm în tabul activ, ca fiecare tab să-și păstreze ordinea întrebărilor */
        document.querySelector('#cx-inputs [data-pane="'+tab+'"] [data-slot=rent]').appendChild(document.getElementById('cx-rentf'));
        relayout();
      }else{
        moveInd(seg);
        const k=seg.dataset.seg,v=b.dataset.v;
        if(k==='ch')changes=+v;else if(k==='years')years=+v;else if(k==='city')city=v;else ptype=v;
      }
      window.calc();
    });
  });
  ['re-s','vac-s','rep-i'].forEach(function(id){document.getElementById(id).addEventListener('input',function(){window.calc();});});
  document.querySelector('#calc .cx-more-btn').addEventListener('click',function(){
    const open=this.getAttribute('aria-expanded')!=='true';
    this.setAttribute('aria-expanded',open?'true':'false');
    this.nextElementSibling.classList.toggle('open',open);
  });
  /* pe mobil: bara de jos apare cât timp vezi datele, dar nu și rezultatul */
  let inV=false,resV=false;
  const peek=document.getElementById('cx-peek');
  function upd(){const on=inV&&!resV;peek.classList.toggle('show',on);document.body.classList.toggle('cx-peek-on',on);}
  new IntersectionObserver(function(es){inV=es[0].isIntersecting;upd();},{threshold:.15}).observe(document.getElementById('cx-inputs'));
  new IntersectionObserver(function(es){resV=es[0].isIntersecting;upd();},{threshold:.2}).observe(document.getElementById('cx-res'));
  /* măsurăm după ce browserul a calculat layout-ul (ResizeObserver), nu sincron la pornire:
     altfel forțăm un layout al întregii pagini în timpul încărcării */
  if(window.ResizeObserver){var ro=new ResizeObserver(function(){relayout();});document.querySelectorAll('#calc .cx-seg').forEach(function(s){ro.observe(s);});}
  else{window.addEventListener('resize',relayout);relayout();}
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(relayout);
  /* schimbarea limbii: refacem textele generate */
  new MutationObserver(function(){window.calc();relayout();}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
calc();
function ctCalc(){
  if(!document.getElementById('ct-rent'))return;
  const rent=parseInt(document.getElementById('ct-rent').value);
  const freq=parseInt(document.getElementById('ct-freq').value);
  const freqLabel=freq>=6?'5+':String(freq);
  document.getElementById('ct-rent-d').textContent=' '+rent+'€';
  document.getElementById('ct-freq-d').textContent=' '+freqLabel;
  const perRent=1.5*rent,perDamages=1500,perTime=800;
  const totalRent=perRent*freq,totalDamages=perDamages*freq,totalTime=perTime*freq;
  const total=totalRent+totalDamages+totalTime;
  document.getElementById('ct-tbl').innerHTML=`<tr><td style="white-space:nowrap">Chirie pierdută <span style="color:var(--light);font-size:.9em">(${freqLabel}× ~1,5 luni goale)</span></td><td style="text-align:right;font-weight:500;color:var(--text)">${fmt(totalRent)}</td></tr><tr><td style="white-space:nowrap">Daune și curățenie <span style="color:var(--light);font-size:.9em">(${freqLabel}× ~1.500€)</span></td><td style="text-align:right;font-weight:500;color:var(--text)">${fmt(totalDamages)}</td></tr><tr><td style="white-space:nowrap">Timpul tău <span style="color:var(--light);font-size:.9em">(${freqLabel}× ~20 ore)</span></td><td style="text-align:right;font-weight:500;color:var(--text)">${fmt(totalTime)}</td></tr>`;
  document.getElementById('ct-freq-label').textContent='la '+freqLabel+(freq===1?' schimbare':' schimbări')+' de chiriaș în 5 ani';
  document.getElementById('ct-total').textContent=fmt(total);
  if(window.lossGlow)window.lossGlow();
}
ctCalc();
;
document.addEventListener('DOMContentLoaded',function(){
  requestAnimationFrame(function(){ document.body.classList.add('loaded'); });
});
window.addEventListener('pageshow', function(e) {
  if (e.persisted) {
    document.body.style.opacity = '1';
    document.body.classList.add('loaded');
  }
});
document.addEventListener('click',function(e){
  var a = e.target.closest('a[href]');
  if(!a) return;
  var href = a.getAttribute('href');
  if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
  var url = new URL(a.href);
  if(url.pathname === window.location.pathname && url.hash) return;
  if(a.target==='_blank') return;
  e.preventDefault();
  document.body.style.transition='opacity .46s cubic-bezier(0.23,1,0.32,1)';
  document.body.style.opacity='0';
  setTimeout(function(){ window.location.href=href; }, 470);
});
;
document.addEventListener('contextmenu', function(e){
  if(e.target.tagName === 'IMG') e.preventDefault();
});
;
function toggleMenu(){
  const nav=document.getElementById('nav-mobile');
  nav.classList.toggle('open');
  const btn=document.getElementById('nav-hamburger');
  if(btn) btn.setAttribute('aria-label',nav.classList.contains('open')?'Închide meniul':'Deschide meniul');
}
/* matchMedia în loc de window.innerWidth: nu forțează un layout în timpul încărcării */
var navMq=window.matchMedia('(max-width:768px)');
function checkHamburger(){
  var btn=document.getElementById('nav-hamburger');
  if(navMq.matches){btn.style.display='flex';}
  else{btn.style.display='none';document.getElementById('nav-mobile').classList.remove('open');}
}
checkHamburger();
if(navMq.addEventListener) navMq.addEventListener('change',checkHamburger); else window.addEventListener('resize',checkHamburger);
document.addEventListener('click',function(e){
  if(!e.target.closest('nav')&&!e.target.closest('.nav-mobile')){
    document.getElementById('nav-mobile').classList.remove('open');
  }
});
;
(function(){
  var WA='https://wa.me/40741176865';
  function openModal(){document.getElementById('wa-modal').classList.add('open');}
  function closeModal(){document.getElementById('wa-modal').classList.remove('open');}
  window.openWaModal=openModal;
  function sendWa(msg){
    gtag('event', 'conversion', {'send_to': 'AW-18253477545/vaI4COjKgdYcEKnt9_9D'});
    window.open(WA+'?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');
    closeModal();
  }
  document.getElementById('wa-close').addEventListener('click',closeModal);
  document.getElementById('wa-overlay').addEventListener('click',closeModal);
  document.querySelectorAll('.wa-opt').forEach(function(b){b.addEventListener('click',function(){sendWa(this.getAttribute('data-msg'));});});
  document.getElementById('wa-send-btn').addEventListener('click',function(){var msg=document.getElementById('wa-custom-ta').value.trim();if(msg)sendWa(msg);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
  var waBtn=document.querySelector('.wa-float');
  if(waBtn)waBtn.addEventListener('click',function(e){e.preventDefault();gtag('event','click_whatsapp_floating');openModal();});
})();
;
window.addEventListener('scroll',function(){
  var btn=document.getElementById('btt');
  if(window.scrollY>400){btn.style.display='flex';}
  else{btn.style.display='none';}
},{passive:true});
;
if(!localStorage.getItem('cookieConsent')){
  document.getElementById('cookie-banner').style.display='flex';
}
;
(function(){
  var sel='h2.sh,.sec-sub,.sec-tag,.stat,.pc,.pkg,.reason,.ba,.cs,.tc,.tec,.fc,.fit-note,.cc,.fc ul li,.rk-item,.voc-item';
  document.querySelectorAll(sel).forEach(function(el){
    el.classList.add('sr');
    var siblings=Array.from(el.parentElement.children).filter(function(c){return c.classList.contains('sr')});
    var idx=siblings.indexOf(el);
    var isListItem=el.matches('li,.rk-item,.cc');
if(idx>0) el.style.transitionDelay=(idx*(isListItem?40:55))+'ms';
  });
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.sr').forEach(function(el){io.observe(el);});
})();
;
// Nav shadow la scroll
(function(){
  var nav=document.querySelector('nav');
  window.addEventListener('scroll',function(){
    nav.style.boxShadow='0 2px 6px rgba(45,40,32,.07),0 8px 24px rgba(45,40,32,.10)';
  },{passive:true});
})();

// 3D tilt pe cardurile de portofoliu — tilt-ul se aplică pe <a> wrapper, nu pe .ba,
// ca să nu interfereze niciodată cu animația de reveal care trăiește pe .ba (transform CSS)
(function(){
  if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  var MAX=3, LIFT=4, PROX=90;
  var items=Array.from(document.querySelectorAll('.port-g > a'));
  var pending=false;
  document.addEventListener('mousemove',function(e){
    if(pending) return;
    pending=true;
    requestAnimationFrame(function(){
      pending=false;
      var rects=[];
      items.forEach(function(item){ rects.push(item.getBoundingClientRect()); });
      items.forEach(function(item,i){
        var r=rects[i];
        var nx=Math.max(r.left,Math.min(e.clientX,r.right));
        var ny=Math.max(r.top,Math.min(e.clientY,r.bottom));
        var dx=e.clientX-nx, dy=e.clientY-ny;
        var dist=Math.sqrt(dx*dx+dy*dy);
        if(dist>=PROX){
          if(item.style.transform) item.style.transform='';
          return;
        }
        var k=1-dist/PROX;
        var px=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
        var py=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));
        var ry=((px-.5)*2*MAX*k).toFixed(2), rx=((.5-py)*2*MAX*k).toFixed(2);
        var ty=(-LIFT*k).toFixed(2);
        item.style.transform='perspective(900px) translateY('+ty+'px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
      });
    });
  },{passive:true});
})();

// Counter animat pe stats
(function(){
  var defs=[
    {sel:'.stats-g .stat:nth-child(1) .stat-v',from:0,to:200,pre:'până la +',suf:'€',dur:1200},
    {sel:'.stats-g .stat:nth-child(2) .stat-v',from:0,to:8,pre:'de la ',suf:' luni',dur:1000},
    {sel:'.stats-g .stat:nth-child(3) .stat-v',from:0,to:5,pre:'',suf:' zile',dur:800}
  ];
  var done=false;
  function ease(t){return 1-Math.pow(1-t,3)}
  function run(d){
    var el=document.querySelector(d.sel);
    if(!el)return;
    var t0=null;
    function step(ts){
      if(!t0)t0=ts;
      var p=Math.min((ts-t0)/d.dur,1);
      el.textContent=d.pre+Math.round(d.from+(d.to-d.from)*ease(p))+d.suf;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var io=new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting&&!done){done=true;defs.forEach(run);}
  },{threshold:0.5});
  var s=document.getElementById('stats');
  if(s)io.observe(s);
})();
;
// Sliding pill pe toate grupurile de butoane
(function(){
  var style=document.createElement('style');
  style.textContent='.tbn.on{background:transparent!important}.tbn:hover:not(.on){background:rgba(199,121,54,.06)}';
  document.head.appendChild(style);

  document.querySelectorAll('.tbns').forEach(function(grp){
    var pill=document.createElement('span');
    pill.className='tbn-pill';
    grp.appendChild(pill);

    function move(btn,instant){
      if(!btn)return;
      var gr=grp.getBoundingClientRect();
      var br=btn.getBoundingClientRect();
      if(instant){pill.style.transition='none';}
      else{pill.style.transition='';}
      pill.style.left=(br.left-gr.left)+'px';
      pill.style.top=(br.top-gr.top)+'px';
      pill.style.width=br.width+'px';
      pill.style.height=br.height+'px';
    }

    requestAnimationFrame(function(){
      move(grp.querySelector('.tbn.on'),true);
    });

    grp.addEventListener('click',function(e){
      var btn=e.target.closest('.tbn');
      if(btn) requestAnimationFrame(function(){move(btn,false);});
    });

    window.addEventListener('resize',function(){
      move(grp.querySelector('.tbn.on'),true);
    },{passive:true});
  });
})();
;
// Smooth diff — transition retargetează, nu mai face glitch
window.animateCalcDiff=(function(){
  var displayed=0,raf=null;
  function ease(t){return 1-Math.pow(1-t,3)}
  function fmtD(n){
    var r=Math.round(n);
    return(r>=0?'+':'')+r.toLocaleString('ro-RO')+'€';
  }
  function parseVal(text){
    if(!text||text==='—')return 0;
    var neg=text.trim().startsWith('-');
    var n=parseFloat(text.replace(/[^0-9]/g,''))||0;
    return neg?-n:n;
  }
  return function(){
    var el=document.getElementById('r-df');
    if(!el)return;
    var target=parseVal(el.textContent);
    var from=displayed;
    var to=target;
    var t0=null,dur=380;
    if(raf)cancelAnimationFrame(raf);
    function step(ts){
      if(!t0)t0=ts;
      var p=Math.min((ts-t0)/dur,1);
      displayed=from+(to-from)*ease(p);
      el.textContent=fmtD(displayed);
      if(p<1)raf=requestAnimationFrame(step);
      else raf=null;
    }
    raf=requestAnimationFrame(step);
  };
})();
;
(function(){
  var fired = new Set();
  function ease(t){ return 1 - Math.pow(1 - t, 3); }

  function runCount(el, delay){
    var val  = el.dataset.enc ? parseInt(atob(el.dataset.enc)) : parseInt(el.dataset.val);
    var pre  = el.dataset.pre || '';
    var suf  = el.dataset.suf || '';
    var dur  = val >= 100 ? 1000 : val >= 30 ? 700 : 500;
    setTimeout(function(){
      var start = null;
      function step(ts){
        if(!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        el.textContent = pre + Math.round(val * ease(p)) + suf;
        if(p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target;
      if(fired.has(el)) return;
      // detectează grupul: cs-res (testimoniale) sau pkg-subgrid (pachete)
      var parent = el.closest('.cs-res, .pkg-subgrid');
      var group  = parent
        ? Array.from(parent.querySelectorAll('.count-anim'))
        : [el];
      // marchează tot grupul și pornește cu stagger
      group.forEach(function(s){ fired.add(s); io.unobserve(s); });
      group.forEach(function(s, i){ runCount(s, i * 90); });
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.count-anim').forEach(function(el){
    io.observe(el);
  });
})();
;
// ── CALCULATOR ANIMATIONS ──
(function(){
  if(typeof window.calc!=='function') return;

  var RESULT_IDS = ['r-cur','r-opt','r-nb','r-ng'];
  var isSliderDragging = false;

  /* ── Range fill — colorează bara slider ── */
  function fillRange(r){
    var pct = Math.round(((+r.value - +r.min)/(+r.max - +r.min))*1000)/10;
    r.style.background = 'linear-gradient(to right,#C77936 '+pct+'%,#D8CFC4 '+pct+'%)';
  }

  /* ── Settle — oprește fade-ul de la drag, fără pop/scale ── */
  function settle(el){
    if(!el) return;
    el.classList.remove('calc-live');
  }

  /* ── Diff glow (double-rAF) ── */
  function diffGlow(){
    var db = document.querySelector('.diff-block');
    if(!db) return;
    db.classList.remove('diff-pulse');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ db.classList.add('diff-pulse'); });
    });
  }
  function lossGlow(){
    var lb = document.querySelector('.loss-block');
    if(!lb) return;
    lb.classList.remove('loss-pulse');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ lb.classList.add('loss-pulse'); });
    });
  }
  window.lossGlow = lossGlow;

  /* ── Inițializare range inputs ── */
  document.querySelectorAll('input[type=range]').forEach(function(r){
    fillRange(r);
    r.addEventListener('input', function(){ fillRange(r); }, {passive:true});

    r.addEventListener('pointerdown', function(){
      isSliderDragging = true;
      r.classList.add('dragging');
      /* Intră în starea "live": estompează valorile */
      RESULT_IDS.forEach(function(id){
        var el = document.getElementById(id);
        if(el){ el.classList.add('calc-live'); }
      });
    });
  });

  /* ── La ridicarea click-ului/degetului → settle ── */
  window.addEventListener('pointerup', function(){
    if(!isSliderDragging) return;
    isSliderDragging = false;
    document.querySelectorAll('input[type=range].dragging').forEach(function(r){
      r.classList.remove('dragging');
    });
    /* Lasă ultimul calc() să ruleze, apoi joacă animația o singură dată */
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        RESULT_IDS.forEach(function(id){ settle(document.getElementById(id)); });
        diffGlow();
      });
    });
  }, {passive:true});

  /* ── Label pop la drag (afișarea valorii curente) ── */
  function popLabel(el){
    if(!el) return;
    el.classList.remove('label-pop');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ el.classList.add('label-pop'); });
    });
  }
  var mpS = document.getElementById('mp-s');
  var reS = document.getElementById('re-s');
  if(mpS) mpS.addEventListener('input', function(){ popLabel(document.getElementById('mp-d')); }, {passive:true});
  if(reS) reS.addEventListener('input', function(){ popLabel(document.getElementById('re-d')); }, {passive:true});

  /* ── Patch calc() ── */
  var origCalc = window.calc;
  var lastTableFade = 0;

  window.calc = function(){
    origCalc.apply(this, arguments);

    /* Re-fill ranges mereu (type/city/years pot reseta valorile sliderelor) */
    document.querySelectorAll('input[type=range]').forEach(fillRange);

    /* Dacă user-ul NU trage sliderul (e.g. a schimbat tip/oraș/ani prin butoane)
       → joacă animația de settle imediat */
    if(!isSliderDragging){
      RESULT_IDS.forEach(function(id){ settle(document.getElementById(id)); });
      diffGlow();
    }

    /* Tabel fade — throttled, nu depinde de slider */
    var now = Date.now();
    if(now - lastTableFade > 200){
      lastTableFade = now;
      var tb = document.getElementById('r-tb');
      if(tb){
        tb.style.opacity = '0';
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){ tb.style.opacity = '1'; });
        });
      }
    }
  };

  /* ── First-view: settle o dată când secțiunea intră în viewport ── */
  var calcSec = document.getElementById('calc');
  if(calcSec){
    var firstFired = false;
    new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting && !firstFired){
        firstFired = true;
        setTimeout(function(){
          RESULT_IDS.forEach(function(id){ settle(document.getElementById(id)); });
          diffGlow();
        }, 450);
      }
    }, {threshold:0.18}).observe(calcSec);
  }
})();

// Hero parallax — imagine se mișcă ușor la scroll
(function(){
  var heroImg = document.querySelector('#hero .hero-visual img');
  if(!heroImg || window.matchMedia('(max-width:899px)').matches) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.addEventListener('scroll', function(){
    var y = window.scrollY;
    if(y > 700) return;
    heroImg.style.transform = 'translateY(' + (y * 0.10) + 'px) scale(1.04)';
  }, {passive:true});
  // reset la resize mic
  window.addEventListener('resize', function(){
    if(window.innerWidth < 900) heroImg.style.transform = '';
  }, {passive:true});
})();

// Stagger mai fin pe grupuri de elemente sr
(function(){
  var groups = ['.proc-g', '.pkg-groups', '.te-g', '.fit-g', '.team-g', '.port-g', '.stats-g'];
  groups.forEach(function(sel){
    var parent = document.querySelector(sel);
    if(!parent) return;
    var children = Array.from(parent.querySelectorAll('.sr'));
    children.forEach(function(el, i){
      el.style.transitionDelay = (i * 65) + 'ms';
    });
  });
})();

// Fade-in pe hero visual cu un mic delay de luxe — colțul semnătură se „formează" odată cu intrarea
(function(){
  var heroR = document.querySelector('.hero-r');
  var heroV = document.querySelector('.hero-visual');
  if(!heroR) return;
  heroR.style.opacity = '0';
  heroR.style.transform = 'translateY(12px) scale(0.97)';
  heroR.style.transition = 'opacity 700ms 300ms cubic-bezier(0.23,1,0.32,1), transform 700ms 300ms cubic-bezier(0.23,1,0.32,1)';
  if(heroV){
    heroV.style.borderRadius = '14px'; // formă neutră de pornire, comisă fără nicio tranziție activă încă
    getComputedStyle(heroV).borderRadius; // confirmă „14px” ca stare curentă înainte să activăm tranziția (doar stil, fără layout)
    heroV.style.transition = 'border-radius 1000ms 380ms cubic-bezier(0.23,1,0.32,1)';
  }
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      heroR.style.opacity = '1';
      heroR.style.transform = '';
      if(heroV) heroV.style.borderRadius = '2px 2px 80px 2px';
    });
  });
})();

// Reveal cu blur pentru pozele din Despre noi, la încărcare
(function(){
  document.querySelectorAll('.tc-photo img').forEach(function(img){
    if(img.complete) img.classList.add('ph-in');
    else img.addEventListener('load',function(){img.classList.add('ph-in');});
  });
})();
;
setTimeout(function(){
(function(){
  // Desktop only — excludem mobilul (sub 768px) pentru a evita penalizarea Google interstitials
  if(window.innerWidth < 768) return;

  var KEY = 'ru_exit_v1';
  var COOLDOWN_CVT = 14;
  var shown = false;
  var startTime = Date.now();

  function canShow(){
    // Dismissed → apare la orice sesiune nouă
    if(sessionStorage.getItem(KEY + '_dismissed')) return false;
    try {
      var raw = localStorage.getItem(KEY);
      if(!raw) return true;
      var d = JSON.parse(raw);
      // Completat → pauză 14 zile
      if(d.converted) return (Date.now() - d.ts) / 86400000 >= COOLDOWN_CVT;
    } catch(e){}
    return true;
  }

  function show(){
    if(shown || !canShow()) return;
    if(sessionStorage.getItem('ru_cvt')) return;
    shown = true;
    document.getElementById('ru-exit-ov').classList.add('ru-vis');
    document.getElementById('ru-exit').classList.add('ru-vis');
    document.body.style.overflow = 'hidden';
  }

  // Trigger 1: exit intent — activ doar după 10s pe pagină
  var exitReady = false;
  setTimeout(function(){ exitReady = true; }, 10000);
  document.addEventListener('mouseleave', function(e){ if(exitReady && e.clientY <= 15) show(); });

  // Trigger 2: timp — 15s indiferent de scroll
  setTimeout(function(){ show(); }, 15000);

  // Marchează conversia la click pe WhatsApp/email/social — exclude vizitatorii deja convertiți
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href]');
    if(!a) return;
    var h = a.getAttribute('href') || '';
    if(h.startsWith('https://wa.me') || h.startsWith('mailto:') || h.includes('instagram') || h.includes('linkedin') || h.includes('facebook')){
      sessionStorage.setItem('ru_cvt','1');
    }
  });

  window.RuExit = {
    dismiss: function(byUser){
      document.getElementById('ru-exit-ov').classList.remove('ru-vis');
      document.getElementById('ru-exit').classList.remove('ru-vis');
      document.body.style.overflow = '';
      if(byUser) try { sessionStorage.setItem(KEY + '_dismissed', '1'); } catch(e){}
    },
    submit: function(){
      var nameEl = document.getElementById('re-name');
      var emailEl = document.getElementById('re-email');
      var phoneEl = document.getElementById('re-phone');
      var name = nameEl.value.trim();
      var email = emailEl.value.trim();
      var tel = phoneEl ? phoneEl.value.trim() : '';
      var ok = true;
      if(!name){ nameEl.style.borderColor='#A32D2D'; nameEl.focus(); ok=false; } else { nameEl.style.borderColor=''; }
      if(!email || !email.includes('@')){ emailEl.style.borderColor='#A32D2D'; if(ok) emailEl.focus(); ok=false; } else { emailEl.style.borderColor=''; }
      if(!ok) return;

      if(typeof gtag === 'function'){
        gtag('set', 'user_data', { email: email });
        gtag('event', 'conversion', { send_to: 'AW-18253477545/VftDCJuk99ccEKnt9_9D' });
        gtag('event', 'form_lead_homepage');
      }

      var payload = { _subject:'Lead nou — Raport Rentabilitate (exit-intent homepage)', nume:name, email:email, sursa:'popup-exit-homepage' };
      if(tel) payload.telefon = tel;

      fetch('https://formsubmit.co/ajax/hello@rentup.solutions', {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify(payload)
      }).catch(function(){});

      try { localStorage.setItem(KEY, JSON.stringify({converted:true, ts:Date.now()})); sessionStorage.setItem(KEY + '_dismissed','1'); } catch(e){}
      sessionStorage.setItem('ru_cvt','1');

      document.getElementById('re-form').style.display = 'none';
      document.getElementById('re-ok').style.display = 'block';
      setTimeout(function(){ RuExit.dismiss(false); }, 3000);
    }
  };
})();
}, 5000);
;
/* :active pe iOS pentru butoanele din pachete */
document.addEventListener('touchstart',function(){},{passive:true});
;
/* Testimoniale: taburi cu tranziție, chiria animată, citat care apare cuvânt cu cuvânt */
(function(){
  var root=document.getElementById('testimonials');if(!root) return;
  var tabs=[].slice.call(root.querySelectorAll('.tt-tab'));
  var panels=[].slice.call(root.querySelectorAll('.tt-panel'));
  var stage=root.querySelector('.tt-stage'),ind=root.querySelector('.tt-ind');
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cur=0,busy=false,seen=false;
  function isEn(){return document.documentElement.lang==='en'}

  function moveInd(){
    var t=tabs[cur];
    ind.style.width=t.offsetWidth+'px';
    ind.style.transform='translateX('+t.offsetLeft+'px)';
  }

  /* citat: textul original rămâne în pagină (pentru lang.js și cititoare de ecran), animăm o copie */
  function build(q){
    var old=q.querySelector('.tt-anim');if(old) old.remove();
    q.classList.remove('has-anim');
    if(reduce||isEn()) return null;
    var words=q.querySelector('.tt-src').textContent.trim().split(/\s+/);
    var a=document.createElement('span');a.className='tt-anim';a.setAttribute('aria-hidden','true');
    words.forEach(function(w,i){
      var s=document.createElement('span');s.className='w off';s.textContent=w;
      a.appendChild(s);if(i<words.length-1) a.appendChild(document.createTextNode(' '));
    });
    q.appendChild(a);q.classList.add('has-anim');
    return a;
  }
  function reveal(panel){
    panel.querySelectorAll('.tt-q').forEach(function(q){
      var a=build(q);if(!a) return;
      var ws=a.querySelectorAll('.w');
      void a.offsetWidth;
      for(var i=0;i<ws.length;i++){ws[i].style.transitionDelay=(120+i*34)+'ms';ws[i].classList.remove('off')}
    });
    var to=panel.querySelector('.tt-to');
    if(to&&!reduce){
      var f=+to.dataset.from,t=+to.dataset.to,t0=0,D=1300;
      to.textContent=f+'€';
      requestAnimationFrame(function step(ts){
        if(!t0) t0=ts+200;
        var k=Math.max(0,Math.min(1,(ts-t0)/D)),e=1-Math.pow(1-k,3);
        to.textContent=Math.round(f+(t-f)*e)+'€';
        if(k<1) requestAnimationFrame(step);
      });
    }
  }

  function show(i,focus){
    if(i===cur||busy) return;
    var from=panels[cur],to=panels[i];
    tabs[cur].setAttribute('aria-selected','false');tabs[cur].tabIndex=-1;
    tabs[i].setAttribute('aria-selected','true');tabs[i].tabIndex=0;
    if(focus) tabs[i].focus();
    cur=i;moveInd();
    tabs[i].scrollIntoView({block:'nearest',inline:'nearest',behavior:reduce?'auto':'smooth'});
    if(reduce){from.classList.remove('on');to.classList.add('on');reveal(to);return}
    busy=true;
    stage.style.height=stage.offsetHeight+'px';
    from.classList.add('fade');
    setTimeout(function(){
      from.classList.remove('on','fade');
      to.classList.add('on','fade');
      var cs=getComputedStyle(stage);
      var h=to.offsetHeight+parseFloat(cs.paddingTop)+parseFloat(cs.paddingBottom);
      stage.style.height=h+'px';
      void to.offsetWidth;
      to.classList.remove('fade');
      reveal(to);
      setTimeout(function(){stage.style.height='';busy=false},500);
    },240);
  }

  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){show(i)});
    t.addEventListener('keydown',function(e){
      var k=e.key,n=null;
      if(k==='ArrowRight') n=(cur+1)%tabs.length;
      else if(k==='ArrowLeft') n=(cur-1+tabs.length)%tabs.length;
      else if(k==='Home') n=0; else if(k==='End') n=tabs.length-1;
      if(n!==null){e.preventDefault();show(n,true)}
    });
  });

  root.querySelectorAll('.tt-more-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')!=='true';
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.nextElementSibling.classList.toggle('open',open);
    });
  });

  /* prima animație pornește când secția apare pe ecran */
  panels.forEach(function(p){p.querySelectorAll('.tt-q').forEach(build)});
  new IntersectionObserver(function(es,o){
    if(!es[0].isIntersecting||seen) return;
    seen=true;o.disconnect();reveal(panels[cur]);
  },{threshold:.25}).observe(stage);

  /* schimbare de limbă: în EN arătăm textul tradus de lang.js, static */
  new MutationObserver(function(){
    panels.forEach(function(p){p.querySelectorAll('.tt-q').forEach(function(q){
      var a=build(q);
      if(a) a.querySelectorAll('.w').forEach(function(w){w.classList.remove('off')});
    })});
  }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  if(window.ResizeObserver){new ResizeObserver(function(){moveInd();}).observe(ind.parentElement);}
  else{window.addEventListener('resize',moveInd);moveInd();}
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(moveInd);
})();
;
/* Bandă portofoliu: derulare continuă, se oprește lin la hover */
(function(){
  var strip=document.querySelector('.pstrip');if(!strip) return;
  var track=strip.querySelector('.ps-track');
  /* pozele din bandă pornesc abia după ce s-a încărcat pagina (hero-ul are prioritate) */
  function showImgs(){
    strip.querySelectorAll('img[data-src]').forEach(function(i){
      if(i.dataset.srcset) i.srcset=i.dataset.srcset;
      i.src=i.dataset.src; i.removeAttribute('data-src'); i.removeAttribute('data-srcset');
    });
  }
  window.ruLater(showImgs);
  /* pozele ies din ecran pe orizontală, așa că le încărcăm pe toate când secția se apropie */
  var pre=new IntersectionObserver(function(es){
    if(!es[0].isIntersecting) return;
    strip.querySelectorAll('img').forEach(function(i){i.loading='eager'});
    pre.disconnect();
  },{rootMargin:'800px 0px'});
  pre.observe(strip);
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){strip.classList.add('ps-static');return}
  [].slice.call(track.children).forEach(function(g){
    var c=g.cloneNode(true);
    c.setAttribute('aria-hidden','true');
    c.querySelectorAll('a').forEach(function(a){a.tabIndex=-1});
    track.appendChild(c);
  });
  var SPEED=38,x=0,v=SPEED,target=SPEED,half=0,last=0,raf=0,vis=false;
  function measure(){half=track.scrollWidth/2}
  function frame(t){
    var dt=last?Math.min((t-last)/1000,.05):0;last=t;
    v+=(target-v)*(1-Math.exp(-dt*5));
    x-=v*dt;
    if(half&&x<=-half) x+=half;
    track.style.transform='translate3d('+x.toFixed(2)+'px,0,0)';
    raf=requestAnimationFrame(frame);
  }
  function run(on){
    if(on&&!raf){last=0;raf=requestAnimationFrame(frame)}
    else if(!on&&raf){cancelAnimationFrame(raf);raf=0}
  }
  if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
    strip.addEventListener('mouseenter',function(){target=0});
    strip.addEventListener('mouseleave',function(){target=SPEED});
  }
  /* doar focus de la tastatură oprește banda; o atingere pe mobil deschide direct proiectul */
  strip.addEventListener('focusin',function(e){try{if(e.target.matches(':focus-visible'))target=0}catch(_){}});
  strip.addEventListener('focusout',function(){target=SPEED});
  new IntersectionObserver(function(es){vis=es[0].isIntersecting;run(vis&&!document.hidden)}).observe(strip);
  document.addEventListener('visibilitychange',function(){run(vis&&!document.hidden)});
  if(window.ResizeObserver){new ResizeObserver(measure).observe(track);}
  else{measure();window.addEventListener('resize',measure);window.addEventListener('load',measure);}
})();
;
/* numărul de proiecte de pe butonul de portofoliu = câte proiecte are pagina de portofoliu */
(function(){
  var el=document.getElementById('port-count');if(!el||!window.fetch) return;
  function go(){
  fetch('portofoliu.html',{credentials:'same-origin'}).then(function(r){return r.ok?r.text():''}).then(function(t){
    var n=(t.match(/class="pf-row"/g)||[]).length;
    if(n) el.textContent=n;
  }).catch(function(){});
  }
  window.ruLater(go);
})();
;
(function(){
  var day = new Date().getDate();
  var slots = Math.max(1, 5 - Math.floor((day - 1) / 7));
  var el = document.getElementById('slots-count');
  if(el) el.textContent = slots + (slots === 1 ? ' slot' : ' sloturi');
  if(slots === 1){
    var pre = document.getElementById('slots-pre'), post = document.getElementById('slots-post');
    if(pre) pre.textContent = 'Mai este doar';
    if(post) post.textContent = 'liber luna aceasta.';
  }
})();
