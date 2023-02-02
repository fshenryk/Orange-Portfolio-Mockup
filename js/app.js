/////////// EVENT LISTENERS ///////////
// Scroll
window.addEventListener('scroll', () => {
    isPageScrolled()
    navSelectedButton()
    makeBackToTopVisible()
}); 

/////////// NAV BUTTONS ///////////
const navButtons = document.querySelector('ul:nth-of-type(1)')

function navSelectedButton() {
    if (window.scrollY >= 633){
        navButtons.firstElementChild.classList.remove('selected');
        navButtons.firstElementChild.classList.add('unselected');
    }else{
        navButtons.firstElementChild.classList.remove('unselected');
        navButtons.firstElementChild.classList.add('selected');
    }

    if(window.scrollY >= 633 && window.scrollY < 1304){
        navButtons.children[1].classList.remove('unselected');
        navButtons.children[1].classList.add('selected');
    }else{
        navButtons.children[1].classList.remove('selected');
        navButtons.children[1].classList.add('unselected');
    }

    if(window.scrollY >= 1304 && window.scrollY < 2190){
        navButtons.children[2].classList.add('selected');
        navButtons.children[2].classList.remove('unselected');
    }else{
        navButtons.children[2].classList.remove('selected');
        navButtons.children[2].classList.add('unselected');
    }

    if(window.scrollY >= 2190 && window.scrollY < 2928){
        navButtons.children[3].classList.add('selected');
        navButtons.children[3].classList.remove('unselected');
    }else{
        navButtons.children[3].classList.remove('selected');
        navButtons.children[3].classList.add('unselected');
    }

    if(window.scrollY >= 2928 && window.scrollY < 3792){
        navButtons.children[4].classList.add('selected');
        navButtons.children[4].classList.remove('unselected');
    }else{
        navButtons.children[4].classList.remove('selected');
        navButtons.children[4].classList.add('unselected');
    }

    if(window.scrollY >= 3792){
        navButtons.lastElementChild.classList.add('selected');
        navButtons.lastElementChild.classList.remove('unselected');
    }else{
        navButtons.lastElementChild.classList.remove('selected');
        navButtons.lastElementChild.classList.add('unselected');
    }
};

/////////// HEADER ///////////
const scrollingHeader = document.querySelector('header')

function isPageScrolled() {
    if (window.scrollY >= 350){
        scrollingHeader.classList.add('scrolling')
} else {
        scrollingHeader.classList.remove('scrolling')
}};

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
  
function makeBackToTopVisible() {
    console.log( window.pageYOffset)
   if (window.scrollY >= 300) {
    backToTopButton.classList.add('visible')
  } else {
    backToTopButton.classList.remove('visible')
    }
};

