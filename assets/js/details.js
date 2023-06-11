const swiper2 = new Swiper("#sub-thumbnails", {
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".banner-btn-next",
    prevEl: ".banner-btn-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Lấy danh sách các phần tử img trong swiper
var thumbnails = document.querySelectorAll(".swiper-slide img");

// Lặp qua từng thumbnail và gán sự kiện mouseover
thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("mouseover", function () {
    var imageUrl = this.getAttribute("src");
    var mainImage = document.getElementById("main-image");
    mainImage.setAttribute("src", imageUrl);
  });
});

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
