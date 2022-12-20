const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burguer.addEventListener('click', () => { //Onclick of burguer makes appere the nav
        nav.classList.toggle('nav-active');

        //Animete links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2}s`;
            }
        });

        //Bugger animation
        burguer.classList.toggle('toggle');


    });
    
}

const app = () => {
    navSlide();
}

app();