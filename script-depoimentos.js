
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 7500,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1188: {
          slidesPerView: 3,
          spaceBetween: 5
        }
    }


    
    });

