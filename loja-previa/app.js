// Animação das gotas controlada pelo CSS.

(function(){
function setupSerumDrip(){
 var stage=document.querySelector('.hero .portrait-stage'),img=stage&&stage.querySelector('img');
 if(!img)return;
 function align(){
  if(!img.naturalWidth)return;
  var w=stage.clientWidth,h=stage.clientHeight,scale=Math.max(w/img.naturalWidth,h/img.naturalHeight);
  var rw=img.naturalWidth*scale,rh=img.naturalHeight*scale,ox=(w-rw)/2,oy=(h-rh)/2;
  stage.style.setProperty('--drip-x',(ox+rw*.418)+'px');
  stage.style.setProperty('--drip-start',(oy+rh*.515)+'px');
  stage.style.setProperty('--drip-end',(oy+rh*.58)+'px');
 }
 img.addEventListener('load',align);new ResizeObserver(align).observe(stage);align();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupSerumDrip);else setupSerumDrip();
})();