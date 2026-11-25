(function(){
var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
function openM(){d.classList.add('open');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
function closeM(){d.classList.remove('open');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
if(t&&d&&o){t.addEventListener('click',function(){if(t.getAttribute('aria-expanded')==='true'){closeM();}else{openM();}});
if(c){c.addEventListener('click',closeM);}
o.addEventListener('click',closeM);
var as=d.querySelectorAll('a');for(var i=0;i<as.length;i++){as[i].addEventListener('click',closeM);}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();}});
window.addEventListener('resize',function(){if(window.innerWidth>768){closeM();}});}
var qs=document.querySelectorAll('.faq-q');
for(var j=0;j<qs.length;j++){qs[j].addEventListener('click',function(){var it=this.parentNode;var op=it.classList.toggle('open');this.setAttribute('aria-expanded',op?'true':'false');});}
})();
