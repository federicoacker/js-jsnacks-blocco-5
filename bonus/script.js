/// Primo Esercizio. ///
/* Implementazione della map in javascript
function myMap(array, callback) {

}
*/

const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Funzione myMap customizzata, accetta un array e una callback e restituisce un array con i valori modificati dalla callback
function myMap(array, callback){  
    const resultArray = []; // Crea un array che sarà l'array risultante che verrà restituito
    for(let i = 0; i < array.length; i++){ // Itera nell'array iniziale
        const current = array[i]; // Seleziona l'elemento corrente
        const currentModified = callback(current); // Invoca la callback sull'elemento corrente e salva il valore
        resultArray.push(currentModified); // mette il risultato della callback dentro l'array risultato
    }

    return resultArray; // ritorna l'array risultato
}

const authors = myMap(posts, (post) => post.author); // Mi restituisce un array di autori partendo dall'array posts

console.log(authors);


/// Secondo Esercizio ///
/* Versione di una funziona che faccia da ponte tra map e filter
La funzione deve prendere una callback che:
se restituisce undefined non inserisce l'elemento nell'array
se restituisce qualcosa inserisce nell'array l'elemento modificato
function myMapFilter(array, callback) {

}
*/

//Funzione myMapFilter custom, accetta un'array e una callback e controlla se i valori restituiti dalla callback sono undefined o no prima
// di metterli nell'array di risultati, alla fine restituisce l'array
function myMapFilter(array, callback){
    const resultArray = []; // Array dei risultati
    for(let i = 0; i < array.length; i++){ // Iteriamo attraverso l'array originale
        const current = array[i]; // Prendiamo l'elemento corrente
        const valueToInsert = callback(current); // recuperiamo l'elemento, con una chimata alla callback
        if(valueToInsert !== undefined){ // Se l'elemento recuperato non è undefined
            resultArray.push(valueToInsert); // Allora lo inseriamo nell'array dei risultati
        }
    }
    return resultArray; // Restituiamo l'array dei risultati
}

const filteredMap = myMapFilter(posts, (post) => { // Chiamata alla funziona myMapFilter, facciamo la callback, per ogni elemento
    let value; // Definiamo una variabile che poi verrà restituita
    const year = parseInt(post.date.split("/")[2]); // Andiamo a prendere l'anno, facendo lo split della stringa date, selezionando il secondo
    // elemento dell'array risultante (che è l'anno) e facendo poi il parseInt
    if(year > 2020){ // Controlliamo se l'anno è superiore al 2020
        value = post; // in quel caso il mio value da restituire sarà l'elemento stesso
        // a questo punto posso fare le modifiche che farebbe una callback normale di una map function
        // ad esempio
        const {author, content} = post;
        value = {
            author,
            content
        }
        return value; // lo restituiamo
    }
    return undefined; // altrimenti, restituiamo undefined
})

console.log(filteredMap);