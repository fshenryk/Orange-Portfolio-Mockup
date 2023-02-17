/////////// EVENT LISTENERS ///////////
//Onload
window.onload = () => {
    PageScrolled()
    navSelectedButton()
    makeBackToTopVisible()
}

// Scroll
window.addEventListener('scroll', () => {
    PageScrolled()
    navSelectedButton()
    makeBackToTopVisible()
}); 

/////////// HEADER ///////////
const headerElement = document.querySelector('header')

function PageScrolled() {
    if (window.scrollY >= 200){
        headerElement.classList.add('scrolling')
} else {
        headerElement.classList.remove('scrolling')
}};

// hamburguer display
const hamburgerMenu = document.querySelector('.hamburger')
const body = document.querySelector('body')

hamburgerMenu.addEventListener('click', () => {
    if(headerElement.classList.contains('mobile')){
        headerElement.classList.remove('mobile')
        body.style.overflow = "visible"
    }else{
        headerElement.classList.add('mobile')
        body.style.overflow = "hidden"
    }
});

// hamburger options
const hamburgerLinks = document.querySelectorAll('nav > ul li a')

hamburgerLinks.forEach(a => {
    a.addEventListener('click', () => {
        headerElement.classList.remove('mobile')
        body.style.overflow = "visible"
    })
});

/////////// NAV BUTTONS ///////////
const navLi = document.querySelectorAll('nav ul li')

function navSelectedButton() {
    const Y = window.scrollY;

    if (Y <= 633){
        unselect();
        changeToSelected(0);
    }
    if(Y >= 633 && Y < 1304){
        unselect();
        changeToSelected(1);
    }
    if(Y >= 1304 && Y < 2190){
        unselect();
        changeToSelected(2);
    }
    if(Y >= 2190 && Y < 2928){
        unselect();
        changeToSelected(3);
    }
    if(Y >= 2928 && Y < 3792){
        unselect();
        changeToSelected(4);
    }
    if(Y >= 3792){
        unselect();
        changeToSelected(5);
    }
};

function unselect() {
    navLi.forEach(li => {
        li.classList.replace('selected', 'unselected')
    })
}

function changeToSelected(index) {
    navLi[index].classList.replace('unselected', 'selected')
};

/////////// PORTFOLIO ///////////
// port-nav 
var liButtons = document.querySelectorAll('.port-nav ul li')

liButtons.forEach(li => {
    li.addEventListener('click', () => {
        if(li.classList.contains('selected')) {
            return
        }else{
            resetUnselected()
            li.classList.replace('unselected', 'selected')
            displayed(li)
        }
    })

});

function resetUnselected() {
    for( index = 0; index < liButtons.length; index++ ) {
        liButtons[index].classList.replace('selected', 'unselected')
    }
}

//change displayed imgs
const divTrabalhos = document.querySelectorAll('.trabalhos > div')

function displayed(li){
    divTrabalhos.forEach(div => {
        if(div.classList.contains(li.classList[1])){
            div.classList.remove('hide')
        }else{
            div.classList.add('hide')
        }
    })
}

/////////// CAROUSEL SECTION ///////////
// slider
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
if (window.scrollY >= 300) {
    backToTopButton.classList.add('visible')
} else {
    backToTopButton.classList.remove('visible')
}
};