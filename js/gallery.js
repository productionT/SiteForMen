const galleryInner = document.querySelector(".c_gallery__inner");

const lists = [
  "img/gal_01.jpg",
  "img/gal_02.jpg",
  "img/gal_03.jpg",
  "img/gal_04.jpg",
  "img/gal_05.jpg",
  "img/gal_06.jpg",
  "img/gal_07.jpg",
  "img/gal_08.jpg",
];

for (let i = 0; i < lists.length; i++) {
  const list = lists[i];
  const content = `<a href="#" class="c_gallery__link"
              ><img src="${list}" alt="" class="c_gallery__photo"
            /></a>`;
  galleryInner.insertAdjacentHTML("beforeend", content);
}
