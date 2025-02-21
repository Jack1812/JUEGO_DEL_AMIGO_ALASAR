let listaAmigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    // Verificar que el nombre solo contenga letras y espacios
    if (!isNaN(nombre) || /\d/.test(nombre)) {
        alert("Solo se permiten letras en el nombre.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

function actualizarLista() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";
    
    listaAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaElementos.appendChild(li);
    });
}

// Función para seleccionar aleatoriamente un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎁</li>`;
}
