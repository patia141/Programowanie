/*
Zadanie 1 - kalkulator
*/

var a = 20;
var b = 10;

var add = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;

//a)
console.log(add);
console.log("Wynik odejmowania to: "+sub);
console.log("Wynik mnozenia to: "+mul);
console.log("Wynik dzielenia to: "+div);
console.log("Wynik dzielenia modulo to: "+mod);

//b)
document.getElementById("addR").innerHTML = add;
document.getElementById("subR").innerHTML = "Wynik odejmowania "+a+" i "+b+" to: "+sub;
document.getElementById("mulR").innerHTML = "Wynik mnozenia "+a+" i "+b+" to: "+mul;
document.getElementById("divR").innerHTML = "Wynik dzielenia "+a+" i "+b+" to: "+div;
document.getElementById("modR").innerHTML = "Wynik dzielenia modulo "+a+" i "+b+" to: "+mod;

/*
Zadanie 2
*/

let s1=3;
let s2=4;
let s3=5;

let p=(s1+s2+s3)/2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));

//a)
console.log(area);

//b) wynik + wyjasnienie
console.log("Dla trojkata o bokach: "+s1+", "+s2+", "+s3+" pole wynosi "+area);

/*
Zadanie 3
*/

/*
let gnum = Math.ceil(Math.random()*10);
console.log(gnum);
let num = prompt("Podaj liczbe: ");

if(num == gnum){
    console.log("Dobra robota!");
}else{
    console.log("Sprobuj ponownie");
}
*/

/*
Zadanie 4
*/

let num1 = parseFloat(prompt("Podaj 1 liczbe: "));
let num2 = parseFloat(prompt("Podaj 2 liczbe: "));
let num3 = parseFloat(prompt("Podaj 3 liczbe: "));
let help=0;

/*
if(num1==num2==num3){
    console.log("Liczby sa rowne");
}else if(num1>=num2 && num1>=num3){
    console.log("Najwieksza jest pierwsza liczba: "+num1);
    document.getElementById("najw").innerHTML = num1;
}else if(num2>=num1 && num2>=num3){
    console.log("Najwieksza jest druga liczba: "+num2);
    document.getElementById("najw").innerHTML = num2;
}else if(num3>=num1 && num3>=num2){
    console.log("Najwieksza jest trzecia liczba: "+num3);
    document.getElementById("najw").innerHTML = num3;
} */

//podejście 2 - mniejsza złożoność obliczeniowa (mniej porównań)

if(num1==num2&&num2==num3){
    console.log("Liczby sa rowne");
} else {
    help=num1;
    if(help<=num2){
        help=num2;
    } if(help<=num1){
        help=num3;
    }
}

console.log("Największa liczba to: "+help);

/*
Zadanie 5
*/

/*
function nwd(a,b){
    if(b!=0){
        return a;
    } else {
        return nwd(b, a%b);
    }
    alert("Największy wspólny dzielnik to: "+nwd(a,b)); 
} */

function nwd(){
    let a = document.getElementById(n1).value;
    let b = document.getElementById(n2).value;

    for(let i=1; i<=a && i<=b; i++){
        if(a%1==0 && b%i==0){
            divisor=i;
        }
    }
    document.getElementById("msg").innerHTML=divisor;
}

//podejscie 2
function eukl() {
    let a = document.getElementById(n1).value;
    let b = document.getElementById(n2).value;
    var reszta;

    while(b){
        reszta = a % b;
        a = b;
        b = reszta;
    }
    document.getElementById("msg").innerHTML=a;
}

//zrobic tak, zeby te zad bylo widac na stronie - dodac na html