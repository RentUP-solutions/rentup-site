/* ─── RentUP: butoanele plutitoare (WhatsApp, înapoi sus) pe mobil ───
   Se ascund când derulezi în jos (citești) și revin când derulezi în sus sau te oprești. */
(function(){
  var mq=window.matchMedia('(max-width:860px)');
  var st=document.createElement('style');
  st.textContent=
    /* la capătul paginii (rândul legal din footer: Setări cookie, ANPC) butoanele ies din ecran,
       ca să nu acopere linkurile. Pe toate lățimile. */
    '.wa-float,#btt{transition:transform 420ms cubic-bezier(0.23,1,0.32,1),box-shadow 400ms ease,background 400ms ease}'+
    'body.fl-foot .wa-float,body.fl-foot #btt{transform:translateY(calc(100% + 40px))!important;pointer-events:none}'+
    /* Telefon: aceeași mărime ca butoanele rotunde din bara Safari de pe iPhone (~46px) și pe aceeași axă cu ele:
       centrul la 58px de margine (WhatsApp deasupra „înapoi”, „sus” deasupra „…”).
       Se ascund lateral: WhatsApp spre stânga, „sus” spre dreapta. Pe secțiunea maro de contact dispar amândouă
       (are deja butonul de WhatsApp) și revin când urci înapoi deasupra ei. */
    '@media(max-width:860px){'+
      '.wa-float,#btt{width:46px!important;height:46px!important;transition:transform 460ms cubic-bezier(0.23,1,0.32,1),box-shadow 400ms ease,background 400ms ease!important}'+
      '.wa-float{left:35px!important}'+
      '#btt{right:35px!important;display:flex!important}'+
      'body:is(.fl-hide,.fl-foot,.fl-dark,.cx-peek-on) .wa-float{transform:translateX(calc(-100% - 40px))!important;pointer-events:none}'+
      'body:is(.fl-hide,.fl-foot,.fl-dark,.cx-peek-on,.fl-top) #btt{transform:translateX(calc(100% + 40px))!important;pointer-events:none}'+
    '}'+
    '@media(prefers-reduced-motion:reduce){.wa-float,#btt{transition:none!important}}';
  document.head.appendChild(st);
  function watchFoot(){
    if(!('IntersectionObserver' in window)) return;
    var ts=[].slice.call(document.querySelectorAll('footer a[onclick*="ruCookieSettings"], .ru-legal'));
    if(!ts.length) return;
    var vis=new Set();
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting) vis.add(e.target); else vis.delete(e.target); });
      document.body.classList.toggle('fl-foot', vis.size>0);
    },{rootMargin:'0px 0px 40px 0px'});
    ts.forEach(function(t){ io.observe(t); });
  }
  /* secțiunea maro de contact: butoanele dispar cât timp ea e în zona lor (ultimii ~170px de ecran) */
  function watchDark(){
    if(!('IntersectionObserver' in window)) return;
    var ts=[].slice.call(document.querySelectorAll('#contact,.audit-cta,.cta-section'));
    if(!ts.length) return;
    var vis=new Set(),io;
    function make(){
      if(io) io.disconnect();
      io=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting) vis.add(e.target); else vis.delete(e.target); });
        document.body.classList.toggle('fl-dark', vis.size>0);
      },{rootMargin:'-'+Math.max(0,window.innerHeight-170)+'px 0px 0px 0px'});
      vis.clear(); ts.forEach(function(t){ io.observe(t); });
    }
    make();
    var rt; window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(make,200)});
  }
  function watchAll(){watchFoot();watchDark()}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',watchAll); else watchAll();
  /* poziția de start o citim la primul scroll, nu la încărcare (evită un layout forțat) */
  var lastY=null,idle;
  /* „sus” apare doar după ce ai coborât puțin (pe telefon intră din dreapta, nu apare brusc) */
  function top(){document.body.classList.toggle('fl-top',window.scrollY<=400)}
  if(document.body) top(); else document.addEventListener('DOMContentLoaded',top);
  window.addEventListener('scroll',function(){
    top();
    if(!mq.matches) return;
    var y=window.scrollY;
    if(lastY===null) lastY=y;
    var dy=y-lastY;
    clearTimeout(idle);
    idle=setTimeout(function(){document.body.classList.remove('fl-hide')},1200);
    if(Math.abs(dy)<10) return; /* ignorăm tremurul degetului */
    document.body.classList.toggle('fl-hide',dy>0&&y>120);
    lastY=y;
  },{passive:true});
})();
