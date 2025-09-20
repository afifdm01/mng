let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

// event next click 
next.onclick = function () {
  itemActive++;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
}

// event prev click 
prev.onclick = function () {
  itemActive--;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
}

// auto run slide
let refreshInterval = setInterval(() => next.click(), 5000);

function showSlider() {
  // remove old active
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

  if (itemActiveOld) itemActiveOld.classList.remove('active');
  if (thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

  // add new active
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  // reset auto timer
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => next.click(), 5000);
}

// click thumbnail
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  });
});
