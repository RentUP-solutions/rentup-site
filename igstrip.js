/* ─── RentUP: banda cu ultimele carusele de pe Instagram ───────────────
   Postările le punem manual (fără API). Una nouă = o linie în POSTS, la început.
   Copertele: images/instagram/carusel-NN.webp, 640×800 (4:5).
   Pe pagină: <div class="igs" data-igs></div> */
(function(){
  var POSTS=[
    ['carusel-12','https://www.instagram.com/p/Db_HZiZCHWB/','Cea mai ieftină de rezolvat, dar și cea mai mare problemă la chirii, este depozitarea.'],
    ['carusel-11','https://www.instagram.com/p/DblOty8CF8S/','8 secunde. Atât durează să pierzi un chiriaș bun.'],
    ['carusel-10','https://www.instagram.com/p/DbLcJWuCKaO/','Carusel RentUP despre designul pentru chirii'],
    ['carusel-09','https://www.instagram.com/p/DasnAPMCJcP/','O lună fără chiriaș: bani pe care nu îi mai recuperezi niciodată'],
    ['carusel-08','https://www.instagram.com/p/DaSoMDMCL5E/','Carusel RentUP despre designul de interior pentru chirii'],
    ['carusel-07','https://www.instagram.com/p/DaIzShOiHsL/','De ce chiriașii au grijă de unele apartamente și distrug altele?'],
    ['carusel-06','https://www.instagram.com/p/DZ4ZPoNCDp6/','Cu cât ceri mai mult, cu atât ai mai puțin din ce alege.'],
    ['carusel-02','https://www.instagram.com/p/DZuhN03iPKW/','Cum ajungi la chiriașul potrivit, indiferent de unde începi'],
    ['carusel-03','https://www.instagram.com/p/DZktaBpiGMD/','Apartamentul tău nu stă gol din cauza pieței'],
    ['carusel-05','https://www.instagram.com/p/DZcgxn9iEs1/','Rental Kit. Sistemul din spatele chiriei stabile.'],
    ['carusel-04','https://www.instagram.com/p/DZVFcxfCJUP/','După intervenția noastră, chiriaș în doar 5 zile']
  ];
  var strips=[].slice.call(document.querySelectorAll('[data-igs]'));
  if(!strips.length) return;

  var st=document.createElement('style');
  st.textContent=
    '.igs{position:relative;width:100vw;margin-left:calc(50% - 50vw);overflow:hidden;padding:28px 0 44px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}'+
    '.igs-track{display:flex;width:max-content;will-change:transform}'+
    '.igs-group{display:flex;gap:12px;margin-right:12px}'+
    '.igs-card{flex:none;display:block;height:clamp(300px,30vw,420px);aspect-ratio:4/5;border-radius:16px;overflow:hidden;background:#F5EFE6;border:.5px solid #EDE5D8;box-shadow:0 10px 36px rgba(45,40,32,.12)}'+
    '.igs-card img{display:block;width:100%;height:100%;object-fit:cover;transition:transform 700ms cubic-bezier(0.23,1,0.32,1)}'+
    '@media(hover:hover) and (pointer:fine){.igs-card:hover img{transform:scale(1.04)}}'+
    '.igs-card:focus-visible{outline:2px solid #C77936;outline-offset:3px}'+
    '.igs.igs-static{overflow-x:auto;scrollbar-width:none;-webkit-mask-image:none;mask-image:none;padding:4px 16px}'+
    '.igs.igs-static::-webkit-scrollbar{display:none}'+
    '@media(max-width:600px){.igs-card{height:320px;border-radius:14px}}';
  document.head.appendChild(st);

  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  strips.forEach(function(strip){
    strip.setAttribute('role','region');
    if(!strip.getAttribute('aria-label')) strip.setAttribute('aria-label','Ultimele carusele RentUP de pe Instagram');
    var track=document.createElement('div');track.className='igs-track';
    var g=document.createElement('div');g.className='igs-group';
    POSTS.forEach(function(p){
      var a=document.createElement('a');a.className='igs-card';a.href=p[1];a.target='_blank';a.rel='noopener';
      a.addEventListener('click',function(){if(window.gtag)gtag('event','click_instagram_post')});
      var img=document.createElement('img');img.src='images/instagram/'+p[0]+'.webp';img.alt=p[2];img.width=640;img.height=800;img.loading='lazy';img.decoding='async';
      a.appendChild(img);g.appendChild(a);
    });
    track.appendChild(g);strip.appendChild(track);

    /* copertele ies din ecran pe orizontală: le încărcăm pe toate când banda se apropie */
    var pre=new IntersectionObserver(function(es){
      if(!es[0].isIntersecting) return;
      strip.querySelectorAll('img').forEach(function(i){i.loading='eager'});
      pre.disconnect();
    },{rootMargin:'800px 0px'});
    pre.observe(strip);
    if(reduce){strip.classList.add('igs-static');return}

    /* același mers ca banda de portofoliu: încet, de la dreapta la stânga, se oprește lin la hover */
    var c=g.cloneNode(true);c.setAttribute('aria-hidden','true');
    c.querySelectorAll('a').forEach(function(a){a.tabIndex=-1});
    track.appendChild(c);
    var SPEED=34,x=0,v=SPEED,target=SPEED,half=0,last=0,raf=0,vis=false;
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
    strip.addEventListener('focusin',function(e){try{if(e.target.matches(':focus-visible'))target=0}catch(_){}});
    strip.addEventListener('focusout',function(){target=SPEED});
    new IntersectionObserver(function(es){vis=es[0].isIntersecting;run(vis&&!document.hidden)}).observe(strip);
    document.addEventListener('visibilitychange',function(){run(vis&&!document.hidden)});
    measure();
    window.addEventListener('resize',measure);
    window.addEventListener('load',measure);
    track.querySelectorAll('img').forEach(function(i){i.addEventListener('load',measure)});
  });
})();
