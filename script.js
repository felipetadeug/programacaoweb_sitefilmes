var itens = document.getElementsByClassName('item');

function ligar(categoria){
  var b = document.querySelector("body");
  b.classList.toggle(categoria);
}

itens[0].addEventListener("click",function(){ligar("acao")});
itens[1].addEventListener("click",function(){ligar("animacao")});
itens[2].addEventListener("click",function(){ligar("animal")});
itens[3].addEventListener("click",function(){ligar("aventura")});
itens[4].addEventListener("click",function(){ligar("comedia")});
itens[5].addEventListener("click",function(){ligar("drama")});
itens[6].addEventListener("click",function(){ligar("familia")});
itens[7].addEventListener("click",function(){ligar("policial")});
itens[8].addEventListener("click",function(){ligar("suspense")});
itens[9].addEventListener("click",function(){ligar("terror")});
itens[10].addEventListener("click",function(){ligar("thriller")});
itens[11].addEventListener("click",function(){ligar("veridico")});



