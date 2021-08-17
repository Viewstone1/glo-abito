
        // swiper
var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
            slidesPerView: 4,
            width: auto,
          },
          968: {
            slidesPerView: 6,
            wi
          },
        }
      });

      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });

      const menuBtn = document.querySelector('.menu-button');
      const menu = document.querySelector('.navbar-panel');
      const menuCloseBtn = document.querySelector('.close-menu');
      menuBtn.addEventListener('click', () => {
      menu.classList.toggle('is-open');
      });
      menuCloseBtn.addEventListener('click', () => {
        menu.classList.toggle('is-open');
      })