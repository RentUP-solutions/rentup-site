/* ─── RentUP: meniul de pe telefon devine pill plutitor după scroll (pagini în afară de homepage) ───
   Sus de tot bara stă lipită, pe toată lățimea; după ~80px se strânge într-un pill de sticlă care plutește.
   Cu meniul hamburger deschis, bara revine pe toată lățimea (panoul e făcut să stea lipit de ea). */
(function(){
  var nav=document.querySelector('nav');if(!nav)return;
  var E='cubic-bezier(.22,1,.36,1)';
  var st=document.createElement('style');
  st.textContent='.np-sp{display:none}'+
    '@media(max-width:900px){'+
      '.np-sp{display:block}'+
      'nav{position:fixed!important;top:0;left:0;right:0;margin:0 auto;max-width:100%;'+
        'transition:max-width .7s '+E+',top .7s '+E+',border-radius .7s '+E+',height .5s '+E+',padding .7s '+E+',background .4s ease,box-shadow .5s ease}'+
      'nav.pill{top:10px!important;max-width:calc(100% - 20px)!important;height:50px!important;padding:0 8px 0 20px!important;border-radius:999px!important;'+
        'background:rgba(253,250,246,.72)!important;-webkit-backdrop-filter:blur(16px) saturate(1.2);backdrop-filter:blur(16px) saturate(1.2);border:1px solid rgba(255,255,255,.7);'+
        'box-shadow:inset 0 1px 0 rgba(255,255,255,.85),0 2px 6px rgba(45,40,32,.06),0 18px 40px -12px rgba(45,40,32,.22)!important}'+
    '}'+
    '@media(max-width:600px){nav.pill{height:48px!important;padding:0 6px 0 18px!important}}'+
    '@media(prefers-reduced-motion:reduce){nav{transition:none!important}}';
  document.head.appendChild(st);
  /* spațiul pe care îl ocupa bara înainte să devină fixă (altfel conținutul ar urca sub ea) */
  var sp=document.createElement('div');sp.className='np-sp';sp.setAttribute('aria-hidden','true');
  var mob=document.getElementById('nav-mobile')||document.querySelector('.nav-mobile');
  var after=(mob&&nav.nextElementSibling===mob)?mob:nav;   /* păstrăm valide selectoarele de tip nav+.nav-mobile */
  after.parentNode.insertBefore(sp,after.nextSibling);
  var on=false;
  function size(){if(!nav.classList.contains('pill'))sp.style.height=nav.offsetHeight+'px'}
  function upd(){
    var y=window.scrollY,open=mob&&mob.classList.contains('open');
    if(!on&&y>80)on=true;else if(on&&y<24)on=false;
    nav.classList.toggle('pill',on&&!open);
  }
  size();upd();
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',size);
  if(mob&&'MutationObserver'in window)new MutationObserver(upd).observe(mob,{attributes:true,attributeFilter:['class']});
})();
