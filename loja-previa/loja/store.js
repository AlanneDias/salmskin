/* SALM Skin — loja (prévia). Carrinho guardado no navegador. */
(function(){
  var NUVEM='https://salmskin.lojavirtualnuvem.com.br';
  var P={
    'starter-glow':{id:'starter-glow',nome:'Starter Glow',meses:1,dias:30,de:259,por:189,off:'27% OFF',img:'../assets/produto-caixa-rosa-v2.webp',
      nuvem:NUVEM+'/produtos/serum-facial-salm-skin-pdrn/',
      texto:'Ideal para quem deseja iniciar sua jornada de cuidados com a SALM Skin. Este frasco é o ponto de partida para adaptar sua pele à tecnologia nanoencapsulada e sentir os primeiros sinais de renovação e viço.'},
    'advanced-care':{id:'advanced-care',nome:'Advanced Care',meses:2,dias:60,de:529,por:359,off:'32% OFF',img:'../assets/serum-modelo-rosa-v2.webp',
      nuvem:NUVEM+'/produtos/serum-facial-salm-skin-pdrn-copia/',
      texto:'Quando o cuidado vira rotina. Este kit com 2 séruns é focado em quem já busca resultados mais consistentes na uniformização do tom e na firmeza da pele. A constância potencializa a ação regeneradora do Nano PDRN.'},
    'pro-skin':{id:'pro-skin',nome:'Pro Skin Treatment',meses:3,dias:90,de:779,por:509,off:'35% OFF',img:'../assets/produto-sacola-rosa-v2.webp',
      nuvem:NUVEM+'/produtos/serum-facial-salm-skin-pdrn-copia1/',
      bonus:'BÔNUS EXCLUSIVO: Frete Grátis + Mini Guia Digital "Rotina de Pele SALM Skin".',
      texto:'O protocolo recomendado para a transformação real da sua pele. Três meses é o ciclo ideal para que os ativos nanoencapsulados atuem profundamente em todas as camadas, entregando o máximo de regeneração, clareamento e rejuvenescimento.'}
  };
  var KEY='salmskin-carrinho';
  function ler(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function gravar(c){try{localStorage.setItem(KEY,JSON.stringify(c))}catch(e){}atualizarIcone()}
  function brl(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
  function itens(){var c=ler();return Object.keys(c).filter(function(k){return P[k]&&c[k]>0}).map(function(k){return {p:P[k],q:c[k]}})}
  function total(){return itens().reduce(function(s,i){return s+i.p.por*i.q},0)}
  function qtd(){return itens().reduce(function(s,i){return s+i.q},0)}
  function add(id,q){var c=ler();c[id]=(c[id]||0)+(q||1);gravar(c)}
  function set(id,q){var c=ler();if(q<=0)delete c[id];else c[id]=q;gravar(c)}
  function limpar(){gravar({})}
  function atualizarIcone(){var n=qtd();document.querySelectorAll('[data-cart-count]').forEach(function(e){e.textContent=n;e.hidden=!n})}
  function toast(msg){var t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.classList.add('on')},10);setTimeout(function(){t.classList.remove('on');setTimeout(function(){t.remove()},300)},2200)}
  window.SALM={P:P,ler:ler,itens:itens,total:total,qtd:qtd,add:add,set:set,limpar:limpar,brl:brl,toast:toast,NUVEM:NUVEM};
  document.addEventListener('DOMContentLoaded',function(){
    atualizarIcone();
    document.querySelectorAll('[data-add]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();add(b.getAttribute('data-add'),1);toast('Adicionado ao carrinho');})});
  });
})();

(function(){if(!document.querySelector('.hero'))return;var ss=[].slice.call(document.querySelectorAll('main>section'));var head=document.querySelector('header');function fit(){var hh=head?head.getBoundingClientRect().height:0;ss.forEach(function(s,i){s.classList.add('stack-card');s.style.zIndex=i+1;var t=Math.min(hh,window.innerHeight-s.offsetHeight);s.style.top=t+'px'})}window.addEventListener('load',fit);window.addEventListener('resize',fit);document.addEventListener('DOMContentLoaded',fit)})();
