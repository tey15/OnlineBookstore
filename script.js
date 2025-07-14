

searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
// Function to toggle the search form
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active'); // Toggle the active class
};
// Select the navbar
const navbar = document.querySelector('.header-2');
const closeNavbar = document.getElementById('close-navbar');
document.getElementById('hamburger-menu').onclick = () => {
    navbar.classList.toggle('active'); // Toggle the active class for the navbar
};
// Close button click event
closeNavbar.onclick = () => {
    navbar.classList.remove('active'); // Hide the navbar
};

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};


// window.onscroll = () =>{
//     searchForm.classList.remove('active');
//     if(window.scrollY > 80){
//         document.querySelector('.header .header-2').classList.add('active');
//     }else{
//         document.querySelector('.header .header-2').classList.remove('active');
//     }
// }

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
var swiper = new Swiper(".heroSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true

    });
var swiper2 = new Swiper(".heroSwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      loop: true

});

var swiper3 = new Swiper(".recommendedSwiper", {
      spaceBetween: 20,
      slidesPerView: 4,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },

});


var swiper4 = new Swiper(".BookOnSaleSwiper", {
      spaceBetween: 20,
      slidesPerView: 4,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },

});
var swiper5 = new Swiper(".testimonialsSwiper", {
      spaceBetween: 20,
      slidesPerView: 4,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },

});



const sb = ScrollReveal({
  duration:2500,
  delay: 800,
  mobile: false,
  origin: 'bottom',
  distance: '60px'
})
sb.reveal('.header-1,.header,.features_container .col');
sb.reveal('.hero_container .col:nth-child(1),.trending_container .col:nth-child(1)',{origin: 'left'});
sb.reveal('.hero_container .col:nth-child(2),.trending_container .col:nth-child(2)',{origin: 'right'});
sb.reveal('.title_container h4',{delay: 200, origin:'left'});
sb.reveal('.title_container h1',{delay: 500,origin:'left'});
sb.reveal('.title_container p',{delay: 800,origin:'left'});

