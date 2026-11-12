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
    /* Telefon: aceeași mărime ca butoanele rotunde din bara Safari de pe iPhone și aliniate deasupra lor
       (WhatsApp deasupra „înapoi”, „sus” deasupra „…”). Se ascund lateral: WhatsApp spre stânga, „sus” spre dreapta. */
    '@media(max-width:860px){'+
      '.wa-float,#btt{width:48px!important;height:48px!important;transition:transform 460ms cubic-bezier(0.23,1,0.32,1),box-shadow 400ms ease,background 400ms ease!important}'+
      '.wa-float{left:34px!important}'+
      '#btt{right:34px!important;display:flex!important}'+
      'body:is(.fl-hide,.fl-foot,.cx-peek-on) .wa-float{transform:translateX(calc(-100% - 40px))!important;pointer-events:none}'+
      'body:is(.fl-hide,.fl-foot,.cx-peek-on,.fl-top) #btt{transform:translateX(calc(100% + 40px))!important;pointer-events:none}'+
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
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',watchFoot); else watchFoot();
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
