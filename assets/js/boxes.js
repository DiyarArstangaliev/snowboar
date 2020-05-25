const prev = document.getElementById('prevBg'),
  next = document.getElementById('nextBg'),
  slides = document.querySelectorAll(".bg-tile");

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('activ');
  }
  slides[n].classList.add('activ');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = () => {
  if (index == slides.length - 1){
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if (index == 0){
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);