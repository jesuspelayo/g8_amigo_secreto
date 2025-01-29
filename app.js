// Array para almacenar los nombres ingresados
let listaDeAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre.');
    } else {
        listaDeAmigos[listaDeAmigos.length] = nombreAmigo;
        mostrarListaDeAmigos();
        inputAmigo.value = '';
    }
}

// Función para mostrar la lista de nombres en la página
function mostrarListaDeAmigos() {
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    let i = 0;
    while (i < listaDeAmigos.length) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        listaAmigosElement.appendChild(li);
        i = i + 1;
    }
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    if (listaDeAmigos.length === 0) {
        alert('No hay nombres en la lista para realizar el sorteo.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indiceAleatorio];

        let liResultado = document.createElement('li');
        liResultado.textContent = 'El amigo secreto es: ' + amigoSorteado;
        resultadoElement.appendChild(liResultado);
    }
}