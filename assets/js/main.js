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

  $(document).ready(function () {
    // For the click-based accordions, the first one stays open
    $(".accordion-wrapper:not(.on-hover)").each(function () {
      $(this).find(".accordion-outer:first").addClass("is-open");
      $(this).find(".accordion-content:first").show();
    });
  
    // Click event for accordions without "on-hover" class
    $(".accordion-wrapper:not(.on-hover) .accordion-heading").click(function () {
      var $accordionContent = $(this).next(".accordion-content");
      var $accordionOuter = $(this).closest(".accordion-outer");
      var $parentWrapper = $(this).closest(".accordion-wrapper");
  
      // Slide up all other accordions IN THIS WRAPPER and remove the 'is-open' class
      $parentWrapper.find(".accordion-content").not($accordionContent).slideUp();
      $parentWrapper
        .find(".accordion-outer")
        .not($accordionOuter)
        .removeClass("is-open");
  
      // Toggle the clicked accordion
      if ($accordionContent.is(":visible")) {
        $accordionContent.slideUp();
        $accordionOuter.removeClass("is-open");
      } else {
        $accordionContent.slideDown();
        $accordionOuter.addClass("is-open");
      }
    });
  
    // // Optional: Add hover functionality for the hover accordions
    // $(".accordion-wrapper.on-hover .accordion-heading").hover(
    //   function () {
    //     $(this).next(".accordion-content").stop().slideDown();
    //     $(this).closest(".accordion-outer").addClass("is-open");
    //   },
    //   function () {
    //     $(this).next(".accordion-content").stop().slideUp();
    //     $(this).closest(".accordion-outer").removeClass("is-open");
    //   }
    // );
  });
  