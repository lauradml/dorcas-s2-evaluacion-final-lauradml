'use strict';


var button = document.querySelector('.button');
var input = document.querySelector('.input');
var filmUl = document.querySelector('.films-ul');
var parrafo= document.querySelector('.anadir-likes');


// var fotoFilms= document.querySelector('.foto');
// var titel=document.querySelector('.titel');


function listFilms(){

  filmUl.innerHTML='' ;
  var film= 'https://api.tvmaze.com/search/shows?q=' +  input.value;
  fetch(film)
    .then(function(response){
      return response.json();

    })
    .then(function(series){

      for (var i = 0; i < series.length; i++){
      // lista es todos los li que se crean
        var lista = document.createElement('li');
        // voy añadir clse a los li
        lista.classList.add('caja-li');
        // creo un evento para todos los li y la funcion  la tengo abajo
        lista.addEventListener("click", cambiarColor);
        lista.addEventListener("click", anadir);

        // para la imagen
        var imageSerie= document.createElement('img');
        if(series[i].show.image === null){
          imageSerie.src= 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV'

        }else{
          imageSerie.src= series[i].show.image.medium;
        }
        // para el titulo
        var tituloSerie= document.createElement('h2');
        var content = document.createTextNode(series[i].show.name);

        tituloSerie.appendChild(content);
        lista.appendChild(imageSerie);
        lista.appendChild(tituloSerie);

        // para meter el li en el lu
        filmUl.appendChild(lista);

      }
    });
// funcion que añade o quita la clase para favorito
  function cambiarColor(event) {
    event.currentTarget.classList.toggle('favoritos');
  }
function anadir(event){
parrafo.innerHTML='me gusta '+ event.currentTarget.querySelector('h2').innerHTML;
}
}


button.addEventListener('click', listFilms);
