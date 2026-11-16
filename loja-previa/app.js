// Animação das gotas controlada pelo CSS.

(function(){
function setupSerumDrip(){
 var stage=document.querySelector('.hero .portrait-stage'),img=stage&&stage.querySelector('img');
 if(!img)return;
 function align(){
  if(!img.naturalWidth)return;
  var w=stage.clientWidth,h=stage.clientHeight,scale=(getComputedStyle(img).objectFit==='contain'?Math.min:Math.max)(w/img.naturalWidth,h/img.naturalHeight);
  var rw=img.naturalWidth*scale,rh=img.naturalHeight*scale,ox=(w-rw)*(parseFloat(getComputedStyle(img).objectPosition.split(' ')[0])/100),oy=(h-rh)*(parseFloat(getComputedStyle(img).objectPosition.split(' ')[1]||'50%')/100);
  stage.style.setProperty('--drip-width',(rw*.019)+'px');
  stage.style.setProperty('--drip-height',(rw*.032)+'px');
  stage.style.setProperty('--drip-x',(ox+rw*.418)+'px');
  stage.style.setProperty('--drip-start',(oy+rh*.515)+'px');
  stage.style.setProperty('--drip-end',(oy+rh*.58)+'px');
 }
 img.addEventListener('load',align);new ResizeObserver(align).observe(stage);align();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setupSerumDrip);else setupSerumDrip();
})();