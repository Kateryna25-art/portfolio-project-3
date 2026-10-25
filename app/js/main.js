const bakerSwiper = new Swiper('.our-baker__slider', {
direction: 'vertical',
slidesPerViews: 3,
spaceBetween: 10, 

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});

const testimonialsSlider = new Swiper('.testimonials__sliders', {
    slidesPerView: 3,

    spaceBetween: 20,

    loop: true,
    loopedSlides: 3,
    pagination: {
el: '.swiper-pagination',
clickable: true,
    },


});

const burgerBtn = document.querySelector('.header__btn-burger');
const menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () =>{
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
});