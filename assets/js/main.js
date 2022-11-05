const darkToggle = document.getElementById('darkToggle')
const topContainer = document.querySelector('.top__container')
const darkMode_txt = document.querySelector('.toggle__container--text')


const cards = document.getElementsByTagName('article')
const cardsFollowers = document.querySelectorAll(".followers__card")
const cardsOverview = document.querySelectorAll(".overview-card")

var counter = 0
var counter = 0

function cardlight(){

    while (counter <= 11) {
        cards[counter].style.backgroundColor = 'var(--lightMode-cardBg-grayishBlue)'
        cards[counter].classList.add('cardLight-bg')
        cards[counter].classList.remove('cardDark-bg')

        counter++
        }

    counter = 0

}

function cardDark(){

    while (counter <= 11) {
        cards[counter].style.backgroundColor = 'var(--darkMode-Card-BG-blue)'
        cards[counter].classList.add('cardDark-bg')
        cards[counter].classList.remove('cardLight-bg')

        counter++
        }

    counter = 0;

}


darkToggle.addEventListener('click', ()=> {

    if(darkToggle.checked) {
        document.body.classList.add("dark");
        topContainer.style.backgroundColor = 'var(--lightMode-bgTop)'
        darkMode_txt.style.color = 'var(--darkMode-text)'
        
        cardlight() //cards changes for light-mode
   
    } else {
        document.body.classList.remove("dark");
        topContainer.style.backgroundColor = 'var(--darkMode-bgTop)'
        darkMode_txt.style.color = 'white'

        cardDark() //cards changes for dark-mode
   
    }

})

