/* Proyectos. Para agregar capturas: pon los archivos en assets/proyectos/
   y lístalos en "m", ej. m:["assets/proyectos/pos-1.png"].
   "s" = stack por grupo (Frontend, Backend, Base de datos...). */
var P=[
{t:"Punto de venta e inventario",k:"POS",c:"",g:"Sistema web",b:"Ventas y control de existencias para un negocio.",d:"Sistema web para registrar ventas y controlar el inventario de un negocio, hecho a la medida.",s:{Frontend:["Vue 3"],Backend:["Laravel 11","PHP"]},m:[]},
{t:"Tienda en línea",k:"</>",c:"b",g:"Sistema web",b:"Catálogo, carrito y pedidos, con enfoque en seguridad.",d:"Tienda en línea completa con catálogo, carrito y pedidos, construida con la seguridad como prioridad.",s:{Frontend:["React"],Backend:["Node.js"],"Base de datos":["PostgreSQL"]},m:[]},
{t:"Gestión de liga de fútbol bandera",k:"FB",c:"c",g:"Sistema web",b:"Administración de equipos, jugadores y partidos.",d:"Sistema para administrar una liga de fútbol americano bandera: equipos, jugadores y partidos.",s:{},m:[]},
{t:"Gestión de clínica pediátrica",k:"Rx",c:"",g:"Sistema web",b:"Sistema para administrar pacientes y consultas.",d:"Sistema para administrar la información de una clínica pediátrica, desde pacientes hasta consultas.",s:{},m:[]},
{t:"Gestión hospitalaria",k:"H+",c:"b",g:"Sistema web",b:"Administración de las operaciones de un hospital.",d:"Sistema de gestión hospitalaria construido sobre el ecosistema Java.",s:{Backend:["Spring Boot","Spring MVC","Hibernate"]},m:[]},
{t:"MiTiendita",k:"MT",c:"c",g:"App Android",b:"Inventario de tu tienda desde el celular.",d:"App Android para llevar el inventario de una tienda desde el celular.",s:{},m:[]},
{t:"EcoRuta del Chile en Nogada",k:"EC",c:"",g:"App Android",b:"App turística con rutas para recorrer Puebla.",d:"App Android de turismo enfocada en la ruta del chile en nogada en Puebla.",s:{},m:[]}
];

(function(){
var $=function(i){return document.getElementById(i)},tr=$('track'),dlg=$('dlg'),cur=null,sl=0;
function chips(a){return a.map(function(x){return '<span>'+x+'</span>'}).join('')}
function total(){return cur.m.length||3}

tr.innerHTML=P.map(function(p,i){
  var tg=[].concat.apply([],Object.keys(p.s).map(function(k){return p.s[k]}));if(!tg.length)tg=[p.g];
  return '<button type="button" class="card" data-i="'+i+'"><div class="thumb '+p.c+'">'+p.k+'</div><div class="body"><h3>'+p.t+'</h3><p>'+p.b+'</p><div class="tags">'+chips(tg.slice(0,3))+'</div></div></button>';
}).join('');

function show(i){
  var n=total();sl=(i+n)%n;var p=cur;
  $('stage').innerHTML=p.m.length?'<img src="'+p.m[sl]+'" alt="'+p.t+' captura '+(sl+1)+'">':'<div class="ph thumb '+p.c+'">'+p.k+'<small>Imagen '+(sl+1)+' de '+n+'</small></div>';
  $('gc').textContent=(sl+1)+' / '+n;
  $('ths').innerHTML=Array.apply(null,Array(n)).map(function(_,j){return '<button type="button" data-j="'+j+'" class="'+(j==sl?'on':'')+'" aria-label="Ver imagen '+(j+1)+'">'+(p.m.length?'<img src="'+p.m[j]+'" alt="">':'')+'</button>'}).join('');
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
