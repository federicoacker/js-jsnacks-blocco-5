const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

const student = students.find((student) => student.id === 2); // Callback che restituisce true quando student.id === 2, 
// poi la find semplicemente scorre l'array finché non trova un elemento per cui la callback restituisce true
// e questo elemento ci viene poi restituito 
console.log(student);
// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }