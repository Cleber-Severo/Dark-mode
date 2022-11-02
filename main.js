const darkToggle = document.getElementById('darkToggle')
const topContainer = document.querySelector('.top__container')

//const x = document.querySelectorAll('.followers__card') 
const cards = document.getElementsByTagName('article')

var counter = 0

function cardlight(){

    while (counter <= 11) {
        cards[counter].style.backgroundColor = 'var(--lightMode-cardBg-grayishBlue)'
        counter++
        }

    counter = 0

}

function cardDark(){

    while (counter <= 11) {
         cards[counter].style.backgroundColor = 'var(--darkMode-Card-BG-blue)'
        counter++
        }

    counter = 0;

}


darkToggle.addEventListener('click', ()=> {

    if(darkToggle.checked) {
        document.body.classList.add("dark");
        topContainer.style.backgroundColor = 'var(--lightMode-bgTop)'
        cardlight()
   
    } else {
        document.body.classList.remove("dark");
        topContainer.style.backgroundColor = 'var(--darkMode-bgTop)'
        cardDark()
    }

})

/*
darkToggle.addEventListener('click', ()=> {

    if(darkToggle.checked) {
        document.body.style.backgroundColor = 'var(--lightMode-bg)'
        document.querySelector('.top__container').style.backgroundColor = 'var(--lightMode-bgTop)'
        document.getElementsByTagName("h2").style.color = 'var(--darkMode-text)'

        document.querySelector('.toggle__container--text').style.color = 'var(--darkMode-text)'
    } else {
        document.body.style.backgroundColor = 'var(--darkMode-bg)'
        document.querySelector('.top__container').style.backgroundColor = 'var(--darkMode-bg)'
         document.querySelector('.toggle__container--text').style.color = 'white'
    }

})

*/ 

/*
toggle.addEventListener('click', ()=> {

    document.body.style.backgroundColor = 'white'
    document.querySelector('.top__container').style.backgroundColor = 'white'
    
}) */