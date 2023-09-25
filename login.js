const loginForm = document.getElementById('loginForm');
const nombreInput = document.getElementById('nombre');
const rolInput = document.getElementById('rol');
const resultadoDiv = document.getElementById('resultado');
const loginButton = document.getElementById('loginButton');


const secreto = 'mi_secreto_secreto';

loginButton.addEventListener('click', () => {
    // Obtener nombre y rol del formulario
    const nombre = nombreInput.value;
    const rol = rolInput.value;

    // Crear el ID (rol) + secreto y calcular su hash
    const id = nombre + rol;
    const firma = calcularHash(id + secret);


    resultadoDiv.innerHTML = `Nombre: ${nombre}<br>rol: ${rol}<br>firma: ${firma}`;
});


function calcularHash(texto) {
    let hash = 0;
    for (let i = 0; i < texto.length; i++) {
        const char = texto.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash.toString();
    alert hash.toString();
}
