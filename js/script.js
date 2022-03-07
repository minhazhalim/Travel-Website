const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-mobile .list-link');
const toggleMenu = () => {
     navMobile.classList.toggle('active');
     headerElement.classList.toggle('active');
};
menuToggleIcon.addEventListener('click',toggleMenu);
const headerScrollEvent = () => {
     if(this.scrollY >= 30){
          headerElement.classList.add('active-scroll');
     }else{
          headerElement.classList.remove('active-scroll');
     }
}
window.addEventListener('scroll',headerScrollEvent);
navLinks.forEach(link => link.addEventListener('click',() => {
     navMobile.classList.remove('active');
     headerElement.classList.remove('active');
     let current = document.getElementsByClassName('current');
     current[0].className = current[0].className.replace('current',"");
     link.className += ' current';
}));
const scrollReveal = ScrollReveal({
     distance: '25px',
     duration: 2500,
});
scrollReveal.reveal('.image-left,.popular-destinations-data,.plan-trip-data',{
     origin: 'left',
});
scrollReveal.reveal('.image-center',{
     origin: 'bottom',
});
scrollReveal.reveal('.image-right,.showcase-data',{
     origin: 'right',
});
scrollReveal.reveal('.beach-data-wrapper',{
     origin: 'bottom',
     interval: 250,
});
scrollReveal.reveal('.newsletter-container',{
     origin: 'top',
});
scrollReveal.reveal('.footer-container-inner > div,.footer-separator,.copyright',{
     origin: 'bottom',
     interval: 250,
});