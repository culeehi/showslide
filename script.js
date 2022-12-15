var imgShow = document.querySelector('.img-show');
var listImg = document.querySelectorAll('.list-image img');

var agoBtn = document.querySelector('.ago');
var nextBtn = document.querySelector('.next');

var imgIndex = 0;

//hàm update ảnh chính
function updateImg(index) {
   document.querySelectorAll('.list-image div').forEach((item) => {
      item.classList.remove('active');
   });
   imgIndex = index;
   imgShow.src = listImg[index].getAttribute('src');
   listImg[index].parentElement.classList.add('active');
}

//hàm chọn ảnh chính ở list ảnh
listImg.forEach((imgElement, index) => {
   imgElement.addEventListener('click', (e) => {
      imgShow.style.opacity = '0';
      setTimeout(() => {
         imgShow.style.opacity = '1';
         updateImg(index);
      }, 600);
   });
});

//hàm lùi ảnh

agoBtn.addEventListener('click', (e) => {
   if (imgIndex == 0) {
      imgIndex = listImg.length - 1;
   } else {
      imgIndex--;
   }
   imgShow.style.animation = '';

   setTimeout(() => {
      updateImg(imgIndex);
      imgShow.style.animation = ' slideLeft 1s ease-in-out forwards';
   }, 200);
});

//hàm tiến ảnh

nextBtn.addEventListener('click', (e) => {
   if (imgIndex == listImg.length - 1) {
      imgIndex = 0;
   } else {
      imgIndex++;
   }
   imgShow.style.animation = '';
   setTimeout(() => {
      updateImg(imgIndex);
      imgShow.style.animation = ' slideRight 1s ease-in-out forwards';
   }, 400);
});

//hàm auto slide
function nextSlide() {
   if (imgIndex == listImg.length - 1) {
      imgIndex = 0;
   } else {
      imgIndex++;
   }
   imgShow.style.animation = '';
   setTimeout(() => {
      updateImg(imgIndex);
      imgShow.style.animation = ' slideRight 1s ease-in-out forwards';
   }, 400);
}

function stopChange() {
   clearInterval(autoSlide);
}

function startChange() {
   autoSlide = setInterval(nextSlide, 3000);
}

updateImg(0);

// function startAuto() {
//    autoSlide = setInterval(nextSlide, 2000);
// }

// function stopAuto() {
//    clearInterval(autoSlide);
// }
// startAuto();
