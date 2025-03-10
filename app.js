// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    
    let nombreAmigo = (document.getElementById ('amigo').value);
    console.log(nombreAmigo);
    if (nombreAmigo != ''){   
        amigos.push (nombreAmigo);
        console.log(amigos); 
        limpiarCampo();
        mostrarAmigos();
        
    } else {
        alert('Por favor, ingresa un nombre');
      }
}

function limpiarCampo() {
    document.getElementById ('amigo').value ='';
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i=0; i < amigos.length; i++){
        let elemento = amigos [i];
        let li = document.createElement('li');
        li.textContent = elemento;
        console.log (elemento);
        lista.appendChild(li);
    }    
}

let boton = document.querySelector('.button-add');
boton.addEventListener('click', agregarAmigo);

console.log(amigos);

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    let numeroSorteado = Math.floor(Math.random()*amigos.length);
    let nombreSorteado = amigos [numeroSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    let li = document.createElement('li');
    li.textContent = nombreSorteado;
    resultado.appendChild(li);  
}

let botonDos = document.querySelector('.button-draw');
botonDos.addEventListener('click', sortearAmigo);