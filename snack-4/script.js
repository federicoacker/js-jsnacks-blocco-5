const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

const authorNames = posts.map((post) => post.author); // Map con una callback che semplicemente
// prende ogni elemento e ne restituisce la proprietà name che poi viene aggiunta all'array interno della funzione map, che una volta finito
// restituisce l'array ad authorNames

console.log(authorNames);
// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']