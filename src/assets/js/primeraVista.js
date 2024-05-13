
function generarTabla() {
    // Obtén una referencia al elemento div
    const miDiv = document.getElementById('contenedorGrande');

    for (let index = 0; index < 11; index++) {
        // Crea un nuevo elemento (por ejemplo, un párrafo)
        const nuevoDiv = document.createElement('div');
        nuevoDiv.setAttribute('class','content');
        nuevoDiv.textContent = '¡Hola, mundo!';

        // Agrega el nuevo párrafo como hijo del div
        miDiv.appendChild(nuevoDiv);
    }
}
generarTabla();
