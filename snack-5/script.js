const nums = [2, 8, 4, 7, 12, 87];

const evenNums = nums.filter((num) => num % 2 === 0); // Callback Function che per ogni num che gli viene passata, restituisce la condition
// num % 2 === 0 che quindi è un true o false, questo fa capire a filter quali elementi mettere nell'array di risultato xD

console.log(evenNums);
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]