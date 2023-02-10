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

    hamburgerMenu.addEventListener('click', () => {
        if(headerElement.classList.contains('mobile')){
            headerElement.classList.remove('mobile')
            document.querySelector('body').style.overflow = "visible"
        }else{
            headerElement.classList.add('mobile')
            document.querySelector('body').style.overflow = "hidden"
        }
    });

    // hamburger options
    document.querySelectorAll('nav > ul li a').forEach(a => {
        a.addEventListener('click', () => {
            headerElement.classList.remove('mobile')
            document.querySelector('body').style.overflow = "visible"
        })
    });

/////////// NAV BUTTONS ///////////
const navButtons = document.querySelector('ul:nth-of-type(1)')

function navSelectedButton() {
    if (window.scrollY >= 633){
        changeToUnselected(0);
    }else{
        changeToSelected(0);
    }

    if(window.scrollY >= 633 && window.scrollY < 1304){
        changeToSelected(1);
    }else{
        changeToUnselected(1);
    }

    if(window.scrollY >= 1304 && window.scrollY < 2190){
        changeToSelected(2);
    }else{
        changeToUnselected(2);
    }

    if(window.scrollY >= 2190 && window.scrollY < 2928){
        changeToSelected(3);
    }else{
        changeToUnselected(3);
    }

    if(window.scrollY >= 2928 && window.scrollY < 3792){
        changeToSelected(4);
    }else{
        changeToUnselected(4);
    }

    if(window.scrollY >= 3792){
        changeToSelected(5);
    }else{
        changeToUnselected(5);
    }
};

function changeToSelected(index) {
    navButtons.children[index].classList.replace('unselected', 'selected')
};

function changeToUnselected(index) {
    navButtons.children[index].classList.replace('selected', 'unselected')
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
function displayed(li){
    document.querySelectorAll('.trabalhos > div').forEach(div => {
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

