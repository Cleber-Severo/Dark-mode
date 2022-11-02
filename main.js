const darkToggle = document.getElementById('darkToggle')
const topContainer = document.querySelector('.top__container')

console.log(darkToggle)



darkToggle.addEventListener('click', ()=> {

    if(darkToggle.checked) {
        document.body.classList.add("dark");
        topContainer.style.backgroundColor = 'var(--lightMode-bgTop)'
    } else {
        document.body.classList.remove("dark");
        topContainer.style.backgroundColor = 'var(--darkMode-bgTop)'
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