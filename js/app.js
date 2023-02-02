/////////// NAV BUTTONS ///////////
var navButtons = document.querySelector('ul:nth-of-type(1)')

window.addEventListener('scroll', () => {
    let homeButton = navButtons.firstElementChild;
    let sobreButton = navButtons.children[1];
    let servicosButton = navButtons.children[2];
    let caracButton = navButtons.children[3];
    let portButton = navButtons.children[4];
    let contatoButton = navButtons.lastElementChild;

    if (window.scrollY >= 919){
        homeButton.classList.remove('selected');
        homeButton.classList.add('unselected');
    }else{
        homeButton.classList.add('selected');
    }

    if(window.scrollY >= 919 && window.scrollY < 1304){
        sobreButton.classList.remove('unselected');
        sobreButton.classList.add('selected');
    }else{
        sobreButton.classList.remove('selected');
        sobreButton.classList.add('unselected');
    }

    if(window.scrollY >= 1304 && window.scrollY < 2190){
        servicosButton.classList.add('selected');
        servicosButton.classList.remove('unselected');
    }else{
        servicosButton.classList.remove('selected');
        servicosButton.classList.add('unselected');
    }

    if(window.scrollY >= 2109 && window.scrollY < 2928){
        caracButton.classList.add('selected');
        caracButton.classList.remove('unselected');
    }else{
        caracButton.classList.remove('selected');
        caracButton.classList.add('unselected');
    }

    if(window.scrollY >= 2928 && window.scrollY < 4364){
        portButton.classList.add('selected');
        portButton.classList.remove('unselected');
    }else{
        portButton.classList.remove('selected');
        portButton.classList.add('unselected');
    }

    if(window.scrollY >= 4364){
        contatoButton.classList.add('selected');
        contatoButton.classList.remove('unselected');
    }else{
        contatoButton.classList.remove('selected');
        contatoButton.classList.add('unselected');
    }
})


//home = 0
//sobre = 919
//servicos = 1304
//carac = 2190
//port = 2928
//contato = 4364


/////////// HEADER ///////////
const scrollingHeader = document.querySelector('header')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 350){
        scrollingHeader.classList.add('scrolling')
} else {
        scrollingHeader.classList.remove('scrolling')
}});

/////////// CAROUSEL SECTION ///////////
const slider = document.querySelector('.carousel-itens');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) =>{
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; //stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});

/////////// BACK-TO-TOP BUTTON ///////////
const backToTopButton = document.querySelector('.back-to-top')
  
window.addEventListener('scroll', ()=> {
   if (window.scrollY <= 300) {
    backToTopButton.classList.add('hidden')
  } else {
    backToTopButton.classList.remove('hidden')
}
console.log( window.pageYOffset)
});

