const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

people.forEach((person) => {console.log(person.name)}); // Di nuovo, per ogni oggetto dell'array, eseguo la callback che fa la stampa del nome
// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'