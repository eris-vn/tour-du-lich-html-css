// LOCAL TOUR

const local_tour = [
  {
    title:
      "Tây Bắc: Hà Nội - Nghĩa Lộ - Tú Lệ - Mù Cang Chải - Sapa - Fansipan - Lai Châu - Điện Biên - Sơn La - Mộc Châu Island - Trải nghiệm cầu kính đi bộ dài nhất thế giới ",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_221208042538_041303.jpg",
    from: "Hồ Chí Minh",
    star: 4.3,
    review: 9,
    time: "2 ngày 1 đêm",
    type: 1,
    price: 9990000,
    original_price: 0,
  },
  {
    title:
      "Đông Bắc: Hà Nội - Hà Giang - Lũng Cú - Đồng Văn - Mã Pí Lèng - Mèo Vạc - Cao Bằng - Thác Bản Giốc - Hồ Ba Bể ",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_211224124117_416287.jpg",
    from: "Hồ Chí Minh",
    star: 4,
    review: 10,
    time: "2 ngày 1 đêm",
    type: 0,
    price: 10990000,
    original_price: 0,
  },
  {
    title:
      "SIÊU SALE 24H 🔥 Giảm-10% | Hà Nội - Sapa - Bản Cát Cát - Fansipan - Cổng Trời Ô Quy Hồ",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_200826043929_668278.jpg",
    from: "Hồ Chí Minh",
    star: 5,
    review: 13,
    time: "3 ngày 1 đêm",
    type: 0,
    price: 8190000,
    original_price: 0,
  },
  {
    title:
      "Hà Nội - Vịnh Hạ Long - Chùa Bái Đính - Tràng An - Tuyệt Tịnh Cốc (Khách sạn 4 sao)",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_220715111546_272791.jpg",
    from: "Hồ Chí Minh",
    star: 4.1,
    review: 13,
    time: "3 ngày 1 đêm",
    type: 0,
    price: 8590000,
    original_price: 9250000,
  },
  {
    title:
      "Hà Nội - Sapa - Fansipan - Ninh Bình - Tràng An - Bái Đính - Tuyệt Tịnh Cốc - Hạ Long - Yên Tử",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_221207045649_874164.jpg",
    from: "Hồ Chí Minh",
    star: 5,
    review: 13,
    time: "2 ngày 1 đêm",
    type: 1,
    price: 10990000,
    original_price: 0,
  },
  {
    title:
      "Hà Nội - Hạ Long - Yên Tử - Ninh Bình - Bái Đính - Tràng An (Khách sạn 4 sao)",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_230308105654_250775.jpg",
    from: "Hồ Chí Minh",
    star: 4.5,
    review: 13,
    time: "4 ngày 1 đêm",
    type: 1,
    price: 7990000,
    original_price: 0,
  },
];

local_tour_html = "";

local_tour.forEach((item) => {
  local_tour_html += `
  <a href="/tour.html" class="tour">
    <div class="img-wrapper">
        <img src="${item.thumbnails}"
            alt="">
        <div class="from">Từ: ${item.from}</div>
    </div>
    <div class="content">
        <div class="title">${item.title}</div>
        <div id="review">
            <div class="Stars" style="--rating: ${item.star};">
            </div> <span class="text-gray-800">| ${item.review} đánh giá</span>
        </div>
        <div class="info">
            <div class="mt-2">
                <i class="fa-solid fa-clock text-gray-800"></i> ${item.time}
            </div>
            ${
              item.type == 1
                ? `
            <div class="mt-2">
                <i class="fa-sharp fa-solid fa-plane"></i> Bay khứ hồi
            </div>
            `
                : `
            <div class="mt-2">
                <i class="fa-solid fa-bus"></i> Xe nghế ngồi
            </div>
            `
            }

        </div>
        <!-- <div class="mt-2">
            <i class="fa-solid fa-bus"></i> Xe nghế ngồi
        </div> -->
        <div class="flex gap-10 al">
            <div class="price">
                ${item.price.toLocaleString()} <sup>đ</sup>
            </div>
            ${
              item.original_price
                ? `
            <div class="original-price">
                ${item.original_price.toLocaleString()}<sup>đ</sup>
            </div>
            `
                : ""
            }
        </div>
    </div>
 </a>
  `;
});

$("#local-tour-list").html(local_tour_html);

// END LOCAL TOUR

// international TOUR

const international_tour = [
  {
    title:
      "Maroc: Casablanca - Rabat - Chefchaouen - Fes - Ifrane - Erfoud - Merzouga - Todra Gorges - Dades Valley - Atben  Haddou - Marrakech",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_230224111013_180049.jpg",
    from: "Hồ Chí Minh",
    star: 4.3,
    review: 9,
    time: "2 ngày 1 đêm",
    type: 1,
    price: 84990000,
    original_price: 0,
  },
  {
    title:
      "Khám phá Ai Cập: Cairo - Aswan - Edfu - Kom Obo - Luxor - Trải nghiệm du thuyền 5 sao sông Nile huyền bí",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_220815090145_129844.jpg",
    from: "Hồ Chí Minh",
    star: 4,
    review: 10,
    time: "2 ngày 1 đêm",
    type: 1,
    price: 72990000,
    original_price: 0,
  },
  {
    title: "Nam Phi: Cape Town - Sun City - Pretoria - Johannesburg | Lễ 02/09",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_140921_south_africa_cheetahs.jpg",
    from: "Hồ Chí Minh",
    star: 5,
    review: 13,
    time: "3 ngày 1 đêm",
    type: 1,
    price: 77990000,
    original_price: 85000000,
  },
  {
    title:
      "Khám phá Mông Cổ | Ulaanbaatar - Tsonjin Boldog - Gorkhi Terelj National Park - Elsen Tasarkhai Sand Dunes",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_220421063946_077832.jpg",
    from: "Hồ Chí Minh",
    star: 4.1,
    review: 13,
    time: "3 ngày 1 đêm",
    type: 0,
    price: 59990000,
    original_price: 0,
  },
  {
    title: "Maroc - Tây Ban Nha - Bồ Đào Nha | Lễ 02/09",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_220920110901_613365.jpg",
    from: "Hồ Chí Minh",
    star: 5,
    review: 13,
    time: "5 ngày 1 đêm",
    type: 1,
    price: 134990000,
    original_price: 0,
  },
  {
    title: "Khám Phá Vùng Đất Hoang Dã Kenya",
    thumbnails:
      "https://media.travel.com.vn/destination/tf_230103100959_704239.jpg",
    from: "Hồ Chí Minh",
    star: 4.5,
    review: 13,
    time: "4 ngày 1 đêm",
    type: 1,
    price: 119990000,
    original_price: 0,
  },
];

international_tour_html = "";

international_tour.forEach((item) => {
  international_tour_html += `
   <a href="/tour.html" class="tour">
      <div class="img-wrapper">
          <img src="${item.thumbnails}"
              alt="">
          <div class="from">Từ: ${item.from}</div>
      </div>
      <div class="content">
          <div class="title">${item.title}</div>
          <div id="review">
              <div class="Stars" style="--rating: ${item.star};">
              </div> <span class="text-gray-800">| ${
                item.review
              } đánh giá</span>
          </div>
          <div class="info">
              <div class="mt-2">
                  <i class="fa-solid fa-clock text-gray-800"></i> ${item.time}
              </div>
              ${
                item.type == 1
                  ? `
              <div class="mt-2">
                  <i class="fa-sharp fa-solid fa-plane"></i> Bay khứ hồi
              </div>
              `
                  : `
              <div class="mt-2">
                  <i class="fa-solid fa-bus"></i> Xe nghế ngồi
              </div>
              `
              }
  
          </div>
          <!-- <div class="mt-2">
              <i class="fa-solid fa-bus"></i> Xe nghế ngồi
          </div> -->
          <div class="flex gap-10 al">
              <div class="price">
                  ${item.price.toLocaleString()} <sup>đ</sup>
              </div>
              ${
                item.original_price
                  ? `
              <div class="original-price">
                  ${item.original_price.toLocaleString()}<sup>đ</sup>
              </div>
              `
                  : ""
              }
          </div>
      </div>
   </a>
    `;
});

$("#international-tour-list").html(international_tour_html);
