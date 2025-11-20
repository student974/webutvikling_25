// Henter HTML-elementet med id="ham" (f.eks. en "hamburger"-knapp for menyen)
const ham = document.getElementById('ham')

// Henter HTML-elementet med id="close" (f.eks. en "X"-knapp for å lukke menyen)
const closeM = document.getElementById('close')

// Henter HTML-elementet med id="menu" (selve menyen som skal vises/skjules)
const menu = document.getElementById('menu')


// Legger til en hendelseslytter på hamburger-knappen.
// Når brukeren klikker, kjøres funksjonen.
// Den toggler (slår av/på) CSS-klassen "hidden" på menyen.
// → Hvis "hidden" er på, blir menyen skjult. Hvis ikke, vises den.
ham.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
})


// Legger til en hendelseslytter på lukkeknappen ("X").
// Når brukeren klikker, skjer det samme som over: menyen veksler
// mellom skjult og synlig ved å toggle "hidden"-klassen.
closeM.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
})
