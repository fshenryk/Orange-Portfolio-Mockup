/////////// EVENT LISTENERS ///////////
// Scroll
window.addEventListener('scroll', () => {
    PageScrolled()
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

/////////// PORTFOLIO ///////////
document.querySelectorAll('.port-nav ul li').forEach(li => {
    console.log(li)
    li.addEventListener('click', () => {
        var selected = document.querySelector('.port-nav ul li.selected')
        selected = li[0]
        if(li.classList.contains('selected')) {
            return
        }else{
            li.classList.remove('unselected')
            li.classList.add('selected')
        }
        
    })
})



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
    if (window.scrollY >= 300) {
        backToTopButton.classList.add('visible')
    } else {
        backToTopButton.classList.remove('visible')
        }
    };

