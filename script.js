//rozgrzewka

/*
function doSetTimeout(i) {
    setTimeout(function() {
        if(i===10) {
            document.getElementById("new_year").innerHTML="Szczęśliwego Nowego Roku!";
        } else {
            console.log(i);
            document.getElementById("new_year").innerHTML=10-i;
        }
    }, i * 1000);
}

for(let i = 10; i>=0;i--) {
    doSetTimeout(i);
}
*/

//zad 1
function zad1() {
    document.write("<table>");
    for(let i = 1; i <= 10; i++) {
        document.write("<tr>");
        for(let j = 1; j <=10; j++) {
            document.write("<td style='border: 1px solid black; padding: 5px;'>" + (i*j) + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function TabliczkaMnozenia() {
    var tabela = document.getElementById("tabliczka_mnozenia");
    tabela.innerHTML = "";
    for(var i = 1; i <= 10; i++) {
        var wiersz = document.createElement("tr");
        for(var j = 1; j <= 10; j++) {
        var komorka = document.createElement("td");
        komorka.textContent = i * j;
        wiersz.appendChild(komorka);
    }
    tabela.appendChild(wiersz);
}
}

//zad 2 - kuba
/*
function zad2() {
    let firstNames = ["Adam", "Anna", "Jan", "Maria", "Piotr", "Katarzyna", "Tomasz", "Ewa", "Marek", "Iwona"];
    let lastNames = ["Nowak", "Kowalski", "Wójcik", "Kowalczyk", "Mazur", "Krawczyk", "Kaczmarek", "Król", "Szymański", "Woźniak"];
    let numRecords = parseInt(prompt("Podaj ilość rekordów:"));

    if(isNaN(numRecords) || numRecords < 1) {
        alert("Poddaj liczbę dodatnią");
        return;
    }

    let people = [];
    for(let i = 0; i < numRecords; i++) {
        let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        let age = Math.floor(Math.random() * (80 - 18 + 1)) + 18;
        let phone = Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 50000000;
    }
}
*/

//zad 2 - od babki

var m_names = ["Mateusz", "Łukasz", "Paweł", "Michał", "Krzysztof", "Marek"];
var w_names = ["Martyna", "Joanna", "Natalia", "Izabela", "Weronika"];
var m_surnames = ["Kowalczyk", "Nowak", "Kowalski", "Szczepański", "Jankowski"];
var w_surnames = ["Majewska", "Wróbel", "Tomczak", "Wojciechowska", "Rutkowska"];

function rand_pers() {
    var name, surname;
    var gend = Math.floor(Math.random() * 2);
    if(gend == 0) {
        name = m_names[Math.floor(Math.random() * m_names.length)];
        surname = m_surnames[Math.floor(Math.random() * m_surnames.length)];
    } else {
        name = w_names[Math.floor(Math.random() * w_names.length)];
        surname = w_surnames[Math.floor(Math.random() * w_surnames.length)];
    }
    var number = Math.floor(Math.random() * 3000001) + 5000000;
    var age = Math.floor(Math.random() * 62) + 18;
    //math random do 80-18=62
    return {name: name, surname: surname, age: age, phone: number};
    //label: value
}

function generateData() {
    var ilosc = parseInt(document.getElementById("ilosc").value);
    var tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    for(var i = 0; i < ilosc; i++) {
        var row = tabela.insertRow(i);

        var nameCell = row.insertCell(0);
        var surnameCell = row.insertCell(1);
        var ageCell = row.insertCell(2);
        var phoneCell = insertCell(3);

        var data = rand_pers();

        nameCell.innerHTML = data.name;
        surnameCell.innerHTML = data.surname;
        ageCell.innerHTML = data.age;
        phoneCell.innerHTML = data.phone;
    }
}