let vectorPrueba = [
    'a'   ,'a'      ,'a'   ,'a'     ,'a'
    ,'a'  ,true     ,'a'   ,false   ,'a'
    ,'a'  ,false    ,'a'   ,true    ,'a'
    ,'a'  ,true     ,'a'   ,true    ,'a'
    ,'a'  ,false    ,'a'   ,false   ,'a'

]



function generarTabla() {
    // Obtén una referencia al elemento div
    const miDiv = document.getElementById('contenedorGrande');
    let contador = 0;
    for (let index = 0; index < 25; index++) {
        // Crea un nuevo elemento (por ejemplo, un párrafo)
        const nuevoDiv = document.createElement('div');

        if (vectorPrueba[index] == false) {
            nuevoDiv.setAttribute('class','content contentVerde');
            nuevoDiv.textContent = 'P - ' + contador++;

        }else if (vectorPrueba[index] == 'a') {
            nuevoDiv.setAttribute('class','content contentGris');

        }else{
            nuevoDiv.setAttribute('class','content');
            nuevoDiv.textContent = 'P - ' + contador++;
        }

        // Agrega el nuevo párrafo como hijo del div
        miDiv.appendChild(nuevoDiv);
    }
}

function borrarTabla() {
    const miDiv = document.getElementById('contenedorGrande');
    while (miDiv.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

setInterval(() => {
    for (let index = 0; index < vectorPrueba.length; index++) {
        if (vectorPrueba[index] != 'a') {
           var a = Math.floor(Math.random() * 2)
           if (a == 1) {
           console.log(vectorPrueba[index]);
           vectorPrueba[index] = true;
           }else{
                vectorPrueba[index] = false;
           }
        }
    }
    borrarTabla();
    generarTabla();
}, 1000);