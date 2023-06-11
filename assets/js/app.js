const swiper0 = new Swiper("#main-banner", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".banner-btn-next",
    prevEl: ".banner-btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiper1 = new Swiper("#sub-banner", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 13,
  navigation: {
    nextEl: ".sub-banner-btn-next",
    prevEl: ".sub-banner-btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 13,
    },
  },
});

const swiper2 = new Swiper("#swiper-partner", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 8,
  spaceBetween: 10,
  navigation: {
    nextEl: ".sub-banner-btn-next",
    prevEl: ".sub-banner-btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiper3 = new Swiper("#review", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".banner-btn-next",
    prevEl: ".banner-btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 13,
    },
  },
});

// đổi màu

const root = document.querySelector(":root");

function setThemeColor(hex) {
  root.style.setProperty("--blue", hex);
  localStorage.setItem("pickColor", hex);
}

if (localStorage.getItem("pickColor") != "") {
  root.style.setProperty("--blue", localStorage.getItem("pickColor"));
}

// sidebar
function openSidebar() {
  let sidebar = $("#sidebar");
  sidebar.show();
  sidebar.removeClass("disappear");
  sidebar.addClass("appear");
}

function closeSidebar() {
  let sidebar = $("#sidebar");
  sidebar.removeClass("appear");
  sidebar.addClass("disappear");
  setTimeout(() => {
    sidebar.hide();
  }, 800);
}
