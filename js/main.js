'use strict';

console.log('>> Ready :)');

var button = document.querySelector('.button');
var input = document.querySelector('.input');
var filmUl = document.querySelector('.films-ul');


// var fotoFilms= document.querySelector('.foto');
// var titel=document.querySelector('.titel');


function listFilms(){
filmUl.innerHTML= " ";
  var film= 'http://api.tvmaze.com/search/shows?q=' +  input.value;
  fetch(film)
  .then(function(response){
    return response.json();

  })
  .then(function(json){
    // console.log(json[1].show);
    // console.log(json[1].show.image);
    var series = json
    for (var i = 0; i < series.length; i++){
      var li = document.createElement('li');
      // para el titulo
      var tituloSerie= document.createElement('h2');
      var content = document.createTextNode(series[i].show.name);
      tituloSerie.appendChild(content);
      li.appendChild(tituloSerie);
      // para la imagen
      var imageSerie= document.createElement('img');
      if(series[i].show.image === null){
        imageSerie.src= 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV'

      }else{
        imageSerie.src= series[i].show.image.medium;
      }

      li.appendChild(imageSerie);
      // para meter el li en el lu
      filmUl.appendChild(li);

    }

  });
}


button.addEventListener('click', listFilms);
