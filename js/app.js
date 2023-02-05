/////////// EVENT LISTENERS ///////////
// Scroll
window.addEventListener('scroll', () => {
    PageScrolled()
    navSelectedButton()
    makeBackToTopVisible()
}); 

//Onload
window.onload  = () => {
    PageScrolled()
    navSelectedButton()
    makeBackToTopVisible()
}

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

    hamburgerMenu.addEventListener('click', () => {
        if(headerElement.classList.contains('mobile')){
            headerElement.classList.remove('mobile')
            document.getElementById('menu').src = './imagens/icone.jpg'
        }else{
            headerElement.classList.add('mobile')
            document.getElementById('menu').src = './imagens/close.jpg'
        }
    });

    // hamburger options
    document.querySelectorAll('nav > ul li a').forEach(a => {
        a.addEventListener('click', () => {
            headerElement.classList.remove('mobile')
            document.getElementById('menu').src = './imagens/icone.jpg'
            }
        )
    });

/////////// NAV BUTTONS ///////////
const navButtons = document.querySelector('ul:nth-of-type(1)')

function navSelectedButton() {
    if (window.scrollY >= 633){
        navButtons.firstElementChild.classList.replace('selected', 'unselected');
    }else{
        navButtons.firstElementChild.classList.replace('unselected', 'selected');
    }

    if(window.scrollY >= 633 && window.scrollY < 1304){
        navButtons.children[1].classList.replace('unselected', 'selected');
    }else{
        navButtons.children[1].classList.replace('selected', 'unselected');
    }

    if(window.scrollY >= 1304 && window.scrollY < 2190){
        navButtons.children[2].classList.replace('unselected', 'selected');
    }else{
        navButtons.children[2].classList.replace('selected', 'unselected');
    }

    if(window.scrollY >= 2190 && window.scrollY < 2928){
        navButtons.children[3].classList.replace('unselected', 'selected');
    }else{
        navButtons.children[3].classList.replace('selected', 'unselected');
    }

    if(window.scrollY >= 2928 && window.scrollY < 3792){
        navButtons.children[4].classList.replace('unselected', 'selected');
    }else{
        navButtons.children[4].classList.replace('selected', 'unselected');
    }

    if(window.scrollY >= 3792){
        navButtons.lastElementChild.classList.replace('unselected', 'selected');
    }else{
        navButtons.lastElementChild.classList.replace('selected', 'unselected');
    }
};


/////////// PORTFOLIO ///////////
// port-nav 
var liButtons = document.querySelectorAll('.port-nav ul li')

document.querySelectorAll('.port-nav ul li').forEach(li => {
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
const thumbTodos = document.querySelectorAll('.trabalhos .thumb')

function displayed(li){
    document.querySelectorAll('.trabalhos > div').forEach(div => {
        if(div.classList.contains(li.classList[1])){
            div.style.display = "grid";
        }else{
            div.style.display = "none"
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
        backToTopButton.style.display = "block"
    } else {
        backToTopButton.style.display = "none"
    }
    };

