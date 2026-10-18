/* PROYECTOS
   Cada proyecto tiene una carpeta "f" dentro de assets/proyectos/.
   Pon ahi sus capturas numeradas: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg (o mas, ajusta "n").
   Si usas otro formato (png, webp), cambia EXT. Si falta una imagen se ve un recuadro de color.
   "s" = stack por grupo (Frontend, Backend, Base de datos...). */
var EXT="jpg",NUM=5;
var P=[
{t:"Punto de venta e inventario",k:"POS",c:"",g:"Sistema web",b:"Ventas y control de existencias para un negocio.",d:"Sistema web para registrar ventas y controlar el inventario de un negocio, hecho a la medida.",s:{Frontend:["Vue 3"],Backend:["Laravel 11","PHP"]},f:"pos",m:[]},
{t:"Tienda en línea",k:"</>",c:"b",g:"Sistema web",b:"Catálogo, carrito y pedidos, con enfoque en seguridad.",d:"Tienda en línea completa con catálogo, carrito y pedidos, construida con la seguridad como prioridad.",s:{Frontend:["React"],Backend:["Node.js"],"Base de datos":["PostgreSQL"]},f:"tienda",m:[]},
{t:"Gestión de liga de fútbol bandera",k:"FB",c:"c",g:"Sistema web",b:"Administración de equipos, jugadores y partidos.",d:"Sistema para administrar una liga de fútbol americano bandera: equipos, jugadores y partidos.",s:{},f:"liga",m:[]},
{t:"Gestión de clínica pediátrica",k:"Rx",c:"",g:"Sistema web",b:"Sistema para administrar pacientes y consultas.",d:"Sistema para administrar la información de una clínica pediátrica, desde pacientes hasta consultas.",s:{},f:"clinica",m:[]},
{t:"Gestión hospitalaria",k:"H+",c:"b",g:"Sistema web",b:"Administración de las operaciones de un hospital.",d:"Sistema de gestión hospitalaria construido sobre el ecosistema Java.",s:{Backend:["Spring Boot","Spring MVC","Hibernate"]},f:"hospital",m:[]},
{t:"MiTiendita",k:"MT",c:"c",g:"App Android",b:"Inventario de tu tienda desde el celular.",d:"App Android para llevar el inventario de una tienda desde el celular.",s:{},f:"mitiendita",m:[]},
{t:"EcoRuta del Chile en Nogada",k:"EC",c:"",g:"App Android",b:"App turística con rutas para recorrer Puebla.",d:"App Android de turismo enfocada en la ruta del chile en nogada en Puebla.",s:{},f:"ecoruta",m:[]}
];

var S=[
{n:"01",t:"Páginas web y landing pages",g:["Web","Landing","Responsive"],d:"Presencia clara, rápida y que se ve bien en celular para que tus clientes te encuentren.",x:["Diseño adaptable a celular y computadora","Botón de contacto y WhatsApp","Hecha para cargar rápido"]},
{n:"02",t:"Sistemas a la medida",g:["Inventarios","POS","Gestión"],d:"Sistemas web hechos a tu forma de trabajar: inventarios, punto de venta y gestión.",x:["Control de existencias y ventas","Pensado para la operación diaria","Crece contigo conforme lo necesites"]},
{n:"03",t:"Tiendas en línea",g:["Catálogo","Carrito","Pedidos"],d:"Catálogo, carrito y pedidos listos para que empieces a vender por internet.",x:["Catálogo de productos con imágenes y precios","Carrito y flujo de pedido","Administración de tus productos"]},
{n:"04",t:"Mantenimiento a equipo de cómputo",g:["Limpieza","Revisión","Rendimiento"],d:"Dejamos tu equipo limpio, revisado y funcionando mejor.",x:["Limpieza y revisión general","Mejoras de rendimiento","Diagnóstico de fallas"]},
{n:"05",t:"Instalación de sistema operativo",g:["Windows","Instalación","Configuración"],d:"Instalamos y configuramos el sistema operativo desde cero, listo para trabajar.",x:["Instalación limpia","Controladores y programas básicos","Configuración inicial"]},
{n:"06",t:"Soporte técnico",g:["Fallas","Programas","Ayuda"],d:"Te ayudamos con fallas, programas y configuración cuando algo no funciona.",x:["Atención a fallas del equipo","Instalación de programas","Ayuda con configuraciones"]}
];
var W=[
["Hablamos tu idioma","Te explicamos todo sin tecnicismos, para que sepas qué recibes."],
["Hecho a la medida","Construimos según tu negocio, no al revés."],
["Tecnología moderna","Proyectos rápidos, seguros y fáciles de usar."],
["Desarrollo y soporte juntos","Programación, equipo de cómputo y soporte técnico en un mismo lugar."],
["Trato directo","Hablas con quienes hacen el trabajo."],
["Sin compromiso","Platicamos tu idea primero y después decides."]
];
var T=["Laravel","PHP","MySQL","JavaScript","Vue 3","React","Node.js","PostgreSQL","Python","HTML","CSS","Spring Boot"];

P.forEach(function(p){if(!p.m.length&&p.f){for(var i=1;i<=(p.n||NUM);i++)p.m.push("assets/proyectos/"+p.f+"/"+i+"."+EXT)}});

(function(){
var $=function(i){return document.getElementById(i)},tr=$('track'),dlg=$('dlg'),cur=null,sl=0;
function chips(a){return a.map(function(x){return '<span>'+x+'</span>'}).join('')}
function total(){return cur.m.length||NUM}

/* tema claro/oscuro */
var root=document.documentElement,tb=$('theme');
function setTheme(t){root.setAttribute('data-theme',t);tb.textContent=t==='dark'?'☀':'☾';tb.setAttribute('aria-label',t==='dark'?'Cambiar a modo claro':'Cambiar a modo oscuro')}
var saved;try{saved=localStorage.getItem('cf-theme')}catch(e){}
setTheme(saved||(window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
tb.onclick=function(){var t=root.getAttribute('data-theme')==='dark'?'light':'dark';setTheme(t);try{localStorage.setItem('cf-theme',t)}catch(e){}};

/* tecnologías, servicios, por qué */
$('mq').innerHTML=T.concat(T).map(function(x){return '<span>'+x+'</span>'}).join('');
$('cnt').textContent=P.length;
$('svc').innerHTML=S.map(function(s,i){return '<article class="sc rv"><div class="n">'+s.n+'</div><h3>'+s.t+'</h3><div class="tags">'+chips(s.g)+'</div><p>'+s.d+'</p><button type="button" class="more" data-s="'+i+'" aria-expanded="false">Detalles +</button><ul hidden>'+s.x.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></article>'}).join('');
$('svc').addEventListener('click',function(e){var b=e.target.closest('.more');if(!b)return;var ul=b.nextElementSibling,o=ul.hidden;ul.hidden=!o;b.setAttribute('aria-expanded',o);b.textContent=o?'Ocultar −':'Detalles +'});
$('why').innerHTML=W.map(function(w,i){return '<article class="wc rv"><i>'+(i+1)+'</i><h3>'+w[0]+'</h3><p>'+w[1]+'</p></article>'}).join('');

/* animación de entrada */
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});els.forEach(function(el){io.observe(el)})}else{els.forEach(function(el){el.classList.add('in')})}

/* proyectos */
tr.innerHTML=P.map(function(p,i){
  var tg=[].concat.apply([],Object.keys(p.s).map(function(k){return p.s[k]}));if(!tg.length)tg=[p.g];
  return '<button type="button" class="card" data-i="'+i+'"><div class="thumb '+p.c+'">'+p.k+'</div><div class="body"><h3>'+p.t+'</h3><p>'+p.b+'</p><div class="tags">'+chips(tg.slice(0,3))+'</div></div></button>';
}).join('');

function ph(){return '<div class="ph thumb '+cur.c+'">'+cur.k+'<small>Imagen '+(sl+1)+' de '+total()+'</small></div>'}
function show(i){
  var n=total();sl=(i+n)%n;var p=cur,st=$('stage'),src=p.m[sl];
  st.innerHTML=ph();
  if(src){var im=new Image();im.alt=p.t+' captura '+(sl+1);im.onload=function(){if(cur===p&&p.m[sl]===src){st.innerHTML='';st.appendChild(im)}};im.src=src}
  $('gc').textContent=(sl+1)+' / '+n;
  $('ths').innerHTML=Array.apply(null,Array(n)).map(function(_,j){return '<button type="button" data-j="'+j+'" class="'+(j==sl?'on':'')+'" aria-label="Ver imagen '+(j+1)+'">'+(p.m[j]?'<img src="'+p.m[j]+'" alt="" onerror="this.remove()">':'')+'</button>'}).join('');
}
function openProject(i){
  cur=P[i];$('dt').textContent=cur.t;$('dd').textContent=cur.d;$('dtag').innerHTML=chips([cur.g]);
  $('ds').innerHTML=Object.keys(cur.s).map(function(k){return '<div class="sg"><h4>'+k+'</h4><div class="tags">'+chips(cur.s[k])+'</div></div>'}).join('');
  show(0);dlg.showModal();document.body.style.overflow='hidden';
}
tr.addEventListener('click',function(e){var c=e.target.closest('.card');if(c)openProject(+c.dataset.i)});
document.querySelectorAll('[data-dir]').forEach(function(b){b.addEventListener('click',function(){tr.scrollBy({left:b.dataset.dir*364,behavior:'smooth'})})});
$('gp').onclick=function(){show(sl-1)};$('gn').onclick=function(){show(sl+1)};
$('ths').addEventListener('click',function(e){var b=e.target.closest('button');if(b)show(+b.dataset.j)});
$('dx').onclick=$('dc').onclick=function(){dlg.close()};
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
dlg.addEventListener('close',function(){document.body.style.overflow=''});
document.addEventListener('keydown',function(e){if(!dlg.open)return;if(e.key==='ArrowLeft')show(sl-1);if(e.key==='ArrowRight')show(sl+1)});
})();
