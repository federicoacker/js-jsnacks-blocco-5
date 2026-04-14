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

let classe = students.find((student) => student.name === "Marco Lanci").class; // Usiamo di nuovo la find, 
// la callback darà true solo quando trova Marco Lanci, a quel punto find mi restituirà l'oggetto
// Quindi essendo che abbiamo l'oggetto possiamo usare direttamente .class e recuperare la classe
// In realtà, sarebbe più corretto dire:
// const classe = students.find((student) => student.name === "Marco Lanci")?.class; Perché teoricamente, non siamo sicuri che Marco Lanci 
// ci sia nell'array
// Faccio in quest'altro modo allora:
const studenteCheVoglio = students.find((student) => student.name === "Marco Lanci");
if(studenteCheVoglio){
  classe = studenteCheVoglio.class;
}
console.log(classe);
// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'