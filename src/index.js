import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'
/*

let szinek = [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'black',
    'blue',
    'pruple',
    'black'
]
*/
let szinek = [
    'white',
    'white',
    'black',
    'white',
    'white',
    'white',
    'black',
    'white',
    'white',
    'white',
]

let currentColor = 0;

var intervalId = window.setInterval(function(){
    szinvalto()
  }, 10);

function szinvalto() {


    if( (currentColor+ 1) == szinek.length){
        currentColor = 0;
    } else {
        currentColor++
    }
    document.body.style.backgroundColor = szinek[currentColor];

}



function init() {
    document.getElementById('szinvalto').addEventListener('click', szinvalto)
}


document.addEventListener('DOMContentLoaded', init)

console.log("Loaded")