const numbers = [2, 8, 4, 7, 2, 87];

const increasedNumbers = numbers.map((number) => ++number); // La mia callback, prende number, lo incrementa e poi lo ritorna. 
// Non funzionerebbe se fosse number++ perché in quel caso il numero verrebbe ritornato e poi incrementato dopo, quindi non sarebbe salvato
// Nell'array con il valore incrementato.
//Poi semplicemente la map function esegue questa callback su ogni elemento e prende il return value e lo aggiunge all'array

console.log(increasedNumbers);
// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]