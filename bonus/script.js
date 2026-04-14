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

// Funzione myMap customizzata, accetta un array e una callback
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
