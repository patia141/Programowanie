//zad 1
const tab = [-3,4,7,-3,-8];
console.log("Tablica: "+tab);

const suma = tab.reduce((a, b) => a + b, 0);
console.log("Zsumowane wartości: "+suma);

console.log("Liczby parzyste: ");
tab.forEach(element => {element%2==0 ? console.log(element) : null;});

const tab_3 = tab.map(element => element * 3); 
console.log("Elementy przemnożone przez 3: " + tab_3);

tab.push(67223);
console.log("Indeks nr albumu: " + tab.indexOf(67223));

let suma_srednia = 0;
for(let i=0; i<tab.length; i++) {
    suma_srednia += tab[i];
}
console.log("Średnia wynosi: " + suma_srednia/tab.length);

let najwieksza = null;
tab.forEach(element => {
    if(najwieksza<element) najwieksza=element;
});
console.log("Największa liczba w tablicy to: " + najwieksza);

let ile_razy = 0;
tab.forEach(element => {
    if(element == -3) ile_razy++;
});
console.log("Liczba -3 wystąpiła " + ile_razy + " razy");

//zad 2
console.log("Ciąg Fibonacciego");
const fib = [0, 1];
for(let i=2; i<100; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);