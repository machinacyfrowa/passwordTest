function validate() {
    //pobierz hasło z pola edycyjnego
    let password = document.getElementById("passwordInput").value;
    //sprawdz długosc hasła
    if(password.length >= 8) {
        //hasło spełnia wymóg długości
        //zapisz cały element DOM do zmiennej
        let li = document.getElementById("passwordLength");
        //zmień zawartość HTML elementu <li>
        li.innerHTML = "Hasło posiada co najmniej 8 znaków";
        //zmień klasę elementu <li>
        li.className = "green";
    } else {
        //hasło nie spełnia wymogu długości
        let li = document.getElementById("passwordLength");
        li.innerHTML = "Hasło nie posiada co najmniej 8 znaków";
        li.className = "red";
    }
    //przygotuj wzorce dla małych, wielkich liter znaków     
    //specjalnych i cyfr
    let chars = "abcdefghijklmnopqrstuwxyz";
    let capitalChars = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    let digits = "0123456789";
    let specials = "!@#$%^&*(){}[]:;<>,.?/";

    //znaleziono małą literę
    let charsFound = false;
    //znaleziono wielką literę
    let capitalCharsFound = false;
    //znaleziono cyfrę
    let digitsFound = false;
    //znaleziono znak specjalny
    let specialsFound = false;

    //tu będzie logika wyszukiwania właściwych znaków...

    //iterujemy przez całe hasło porównując każdy znak
    //z znakami wzorcowymi
    console.log("Rozpoczynam pętle...");
    for(let i = 0; i < password.length; i++) {
        console.log("Licznik (i) wynosi: " + i);
        console.log("i-ta litera hasła to: " + password[i]);
        //sprawdz w tablicy chars czy istnieje 
        //i-ty znak z hasła (password)
        console.log("Szukam w małych literach");
        if(chars.indexOf(password[i]) > -1) {
            //znalazłem we wzorcu
            console.log("Znak " + password[i] + " znaleziono!");
            charsFound = true;
        }
        if(capitalChars.indexOf(password[i]) > -1) {
            //znalazłem we wzorcu
            console.log("Znak " + password[i] + " znaleziono!");
            capitalCharsFound = true;
        }
    }   
    console.log("Koniec pętli!");




    //wyświetlanie wyników
    //małe litery
    let charsLi = document.getElementById("chars");
    if(charsFound) {
        //jeżeli znaleziono małe litery
        charsLi.innerHTML = "Hasło zawiera małe litery";
        charsLi.className = "green";
    } else {
        //hasło nie zawiera małych liter
        charsLi.innerHTML = "Hasło nie zawiera małych liter";
        charsLi.className = "red";
    }
    charsLi = document.getElementById("capitalChars");
    if(capitalCharsFound) {
        //jeżeli znaleziono małe litery
        charsLi.innerHTML = "Hasło zawiera wielkie litery";
        charsLi.className = "green";
    } else {
        //hasło nie zawiera małych liter
        charsLi.innerHTML = "Hasło nie zawiera wielkich liter";
        charsLi.className = "red";
    }
}

//funkcja anonimowa (funkcja strzałkowa) służy do wstawiania 
//kodu w miejscu, które normalnie wymaga podania nazwy
//funkcji (metody)
//klasyczna metoda z funkcją addEvent patrz wcześniejsze projekty
window.addEventListener("load", () => {
    document.getElementById("passwordInput")
                .addEventListener("input", validate);
})