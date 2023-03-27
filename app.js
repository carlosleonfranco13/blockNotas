// VARIABLES
const formulario = document.querySelector('#formulario');
const listaNotas = document.querySelector('#list-notes');
let notes = [];



// EVENT LISTENERS
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarNota);
}



// FUNCIONES
function agregarNota(e) {
    e.preventDefault();

    // TextArea donde el usuario escribe
    const nota = document.querySelector('#nota').value;

    // Validación...
    if(nota === '') {
        mostrarError('Una nota no puede ir vacía');
        
        return; // Evita que se ejecuten más lineas de código
    }

    const notaObj = {
        id: Date.now(),
        nota
    }

    // Añadir al arreglo de notes
    notes = [...notes, notaObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar msj de Error
function mostrarError(error) {
    const msjError = document.createElement('P');
    msjError.textContent = error;
    msjError.classList.add('error');

    // Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msjError);

    // Elimina la alerta después de 3s.
    setTimeout(() => {
        msjError.remove();
    }, 3000);
}   

// Muestra listado de las notas
function crearHTML() {

    limpiarHTML();

    if(notes.length > 0){
        notes.forEach( nota => {
            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = nota.nota;

            // Insertarlo en el HTML
            listaNotas.appendChild(li);
        });
    }

}

// Limpiar el HTML
function limpiarHTML() {
    while(listaNotas.firstChild) {
        listaNotas.removeChild(listaNotas.firstChild);
    }
}