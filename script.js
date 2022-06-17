

function correcto (){

  var respuesta = document.getElementById('correcta');
  if (respuesta){
      alert("ACERTASTE. FELICITACIONES!!");
    }
  
}


function incorrecto (){

  var respuesta = document.getElementById('correcta');
  if (respuesta){
      alert("INCORRECTO, INTENTALO DE NUEVO!");
    }
  
}



const jsonData= require('base_tweets.json'); 
console.log(jsonData);