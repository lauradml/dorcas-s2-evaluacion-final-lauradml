'use strict';

console.log('>> Ready :)');

var button = document.querySelector('.button');
var input = document.querySelector('.input');
var filmUl = document.querySelector('.films-ul');


// var fotoFilms= document.querySelector('.foto');
// var titel=document.querySelector('.titel');


function listFilms(){
  filmUl.innerHTML=' ' ;
  var film= 'http://api.tvmaze.com/search/shows?q=' +  input.value;
  fetch(film)
    .then(function(response){
      return response.json();

    })
    .then(function(json){
    // console.log(json[1].show);
    // console.log(json[1].show.image);
    // con esta variable mi json se llama series
      var series = json
      for (var i = 0; i < series.length; i++){
      // lista es todos los li que se crean
        var lista = document.createElement('li');
        // voy añadir clse a los li
        lista.classList.add('caja-li');
        // creo un evento para todos los li y la funcion  la tengo abajo
        lista.addEventListener("click", cambiarColor);


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
}


button.addEventListener('click', listFilms);
