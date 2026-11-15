/* ─── RentUP: meniul devine pill plutitor după scroll (toate paginile în afară de homepage, care are varianta ei inline) ───
   Sus de tot bara stă lipită, pe toată lățimea; după ~80px se strânge într-un pill de sticlă care plutește.
   Pe desktop pill-ul păstrează toate linkurile (inclusiv Rental Kit, FAQ și EN): lățimea lui se calculează din conținut.
   Cu meniul hamburger deschis (telefon), bara revine pe toată lățimea (panoul e făcut să stea lipit de ea). */
(function(){
  var nav=document.querySelector('nav');if(!nav)return;
  var E='var(--ease-out,cubic-bezier(0.23,1,0.32,1))',D='480ms';   /* sistemul de mișcare: --ease-out, durată de deplasare */
  var st=document.createElement('style');
  st.textContent='.np-sp{display:block}'+
    'nav{position:fixed!important;top:0;left:0;right:0;margin:0 auto;max-width:100%;'+
      'transition:max-width '+D+' '+E+',top '+D+' '+E+',border-radius '+D+' '+E+',height 380ms '+E+',padding '+D+' '+E+',background 300ms ease,box-shadow 380ms ease,border-color 300ms ease}'+
    'nav .nav-links a,nav .nav-links .lang-toggle-btn{white-space:nowrap}'+
    'nav .nav-links{transition:gap '+D+' '+E+'}'+
    /* alb (nu crem) + contur fin: se desprinde clar de fundalul crem al paginii */
    'nav.pill{border-radius:999px!important;background:rgba(255,255,255,.86)!important;-webkit-backdrop-filter:blur(16px) saturate(1.2);backdrop-filter:blur(16px) saturate(1.2);border:1px solid rgba(45,40,32,.09)!important;'+
      'box-shadow:0 1px 2px rgba(45,40,32,.06),0 12px 30px -10px rgba(45,40,32,.28)!important}'+
    'nav.pill .nav-cta{background:#C77936;color:#FDFAF6;border-color:#C77936;padding:9px 18px}'+
    '@media(min-width:901px){nav.pill{top:14px!important;max-width:var(--np-w,1080px)!important;height:54px!important;padding:0 7px 0 26px!important}nav.pill .nav-links{gap:22px}}'+
    '@media(max-width:900px){nav.pill{top:10px!important;max-width:calc(100% - 20px)!important;height:50px!important;padding:0 8px 0 20px!important}}'+
    '@media(max-width:600px){nav.pill{height:48px!important;padding:0 6px 0 18px!important}}'+
    '@media(prefers-reduced-motion:reduce){nav,nav .nav-links{transition:none!important}}';
  document.head.appendChild(st);
  /* fără contur în starea normală, browserul îi dă culoarea textului (maro închis); la trecerea în pill conturul
     pornea de la maro închis și se estompa = „contur negru” vizibil. Pornim de la aceeași nuanță, dar transparentă. */
  ['Top','Right','Bottom','Left'].forEach(function(s){if(getComputedStyle(nav)['border'+s+'Style']==='none')nav.style['border'+s+'Color']='rgba(45,40,32,0)'});
  /* spațiul pe care îl ocupa bara înainte să devină fixă (altfel conținutul ar urca sub ea) */
  var sp=document.createElement('div');sp.className='np-sp';sp.setAttribute('aria-hidden','true');
  var mob=document.getElementById('nav-mobile')||document.querySelector('.nav-mobile');
  var after=(mob&&nav.nextElementSibling===mob)?mob:nav;   /* păstrăm valide selectoarele de tip nav+.nav-mobile */
  after.parentNode.insertBefore(sp,after.nextSibling);
  var on=false;
  function size(){if(!nav.classList.contains('pill'))sp.style.height=nav.offsetHeight+'px'}
  /* lățimea pill-ului pe desktop = logo + linkuri (cu spațiu de 22px) + buton + margini */
  function width(){
    if(window.innerWidth<=900)return;
    var w=26+7+72,links=nav.querySelector('.nav-links');
    [].forEach.call(nav.children,function(c){
      if(c===links){var n=0;[].forEach.call(links.children,function(a){if(a.offsetWidth){w+=a.offsetWidth;n++}});w+=22*Math.max(0,n-1)}
      else if(c.offsetWidth&&getComputedStyle(c).position!=='absolute')w+=c.offsetWidth;
    });
    nav.style.setProperty('--np-w',Math.min(Math.ceil(w),window.innerWidth-40)+'px');
  }
  function upd(){
    var y=window.scrollY,open=mob&&mob.classList.contains('open');
    if(!on&&y>80){on=true;width()}else if(on&&y<24)on=false;
    nav.classList.toggle('pill',on&&!open);
  }
  size();width();upd();
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',function(){size();width()});
  /* la schimbarea limbii textele linkurilor se schimbă → recalculăm lățimea */
  if('MutationObserver'in window){
    if(mob)new MutationObserver(upd).observe(mob,{attributes:true,attributeFilter:['class']});
    var l=nav.querySelector('.nav-links');if(l)new MutationObserver(function(){requestAnimationFrame(width)}).observe(l,{childList:true,subtree:true,characterData:true});
  }
})();
