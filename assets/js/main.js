//Adding global variables
const darkToggle = document.getElementById('darkToggle')
const topContainer = document.querySelector('.top__container')
const darkMode_txt = document.querySelector('.toggle__container--text')


const cards = document.getElementsByTagName('article')
const cardsFollowers = document.querySelectorAll(".followers__card")
const cardsOverview = document.querySelectorAll(".overview-card")

var counter = 0
var counter = 0

//This function changes the card background for light mode 
function cardlight(){

    while (counter <= 11) {
        cards[counter].style.backgroundColor = 'var(--lightMode-cardBg-grayishBlue)'
        cards[counter].classList.add('cardLight-bg') //add ligh-mode hover card state
        cards[counter].classList.remove('cardDark-bg') //remove dark-mode hover card state

        counter++
        }

    counter = 0

}

//This function changes the card background for dark mode 
function cardDark(){

    while (counter <= 11) {
        cards[counter].style.backgroundColor = 'var(--darkMode-Card-BG-blue)'
        cards[counter].classList.add('cardDark-bg') //add dark-mode hover card state
        cards[counter].classList.remove('cardLight-bg') //remove ligh-mode hover card state

        counter++
        }

    counter = 0;

}

//Starts this function by clicking on toggle button
darkToggle.addEventListener('click', ()=> {

    //checks input status
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

