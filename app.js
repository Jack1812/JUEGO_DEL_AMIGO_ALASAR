let listaAmigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

function actualizarLista() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";
    
    listaAmigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaElementos.appendChild(li);
    });
}


// Función para seleccionar aleatoriamente un amigo secreto
function sortearAmigo() {
    
    if (listaAmigos.length === 0) {
        // Alerta al usuario para que agregue al menos un nombre
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }
    
    // Genera un índice aleatorio basado en la longitud de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // Selecciona un amigo aleatorio de la lista
    let amigoSeleccionado = listaAmigos[indiceAleatorio];
    
  
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎁</li>`;
}