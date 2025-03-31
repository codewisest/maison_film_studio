console.log('Yes')

window.onload = () => {
    console.log("Page has fully loaded!");
    const hamburger = document.querySelector('.hamburger');
    const modal = document.querySelector('.modal');
    console.log(hamburger)

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active')
        modal.classList.toggle('show_modal');
    })
};

$(document).ready(function() {
    console.log("jQuery is working!");
});

// SWIPER JS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Responsive Breakpoints
  breakpoints: {
    320: {  // Small screens (phones)
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {  // Tablets
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: { // Laptops & desktops
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
