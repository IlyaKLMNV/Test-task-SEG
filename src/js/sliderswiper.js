// Нужно сделать так чтобы класс принимал в себя уникальный div одного класса
class Slider {
  constructor(element) {

  this.element = element;
  this.containerWithCards = this.element.querySelector('.cards');
  this.cards = this.element.querySelectorAll('.card');
  this.leftArrow =this.element.querySelector('.buttons-shevron__left');
  this.rightArrow = this.element.querySelector('.buttons-shevron__right');
  this.cardWidth = this.element.querySelector('.card').offsetWidth;

  this.counter = 0;
  }

  turnLeft = () => {
    if (this.counter === 0) {
      this.containerWithCards.style.transform = `translateX(-${this.cardWidth * (this.cards.length - 1)}px)`;
      this.counter = this.cards.length - 1;
      return
    }

    else {
      this.counter = this.counter - 1;
      this.containerWithCards.style.transform = `translateX(-${this.cardWidth * this.counter}px)`;
      return
    }
  }

  turnRight = () => {
    if (this.counter === this.cards.length - 1) {
      this.counter = 0;
      this.containerWithCards.style.transform = `translateX(-${this.cardWidth * this.counter}px)`;
      return
    }
    else {
      this.counter = this.counter + 1;
      this.containerWithCards.style.transform = `translateX(-${this.cardWidth * this.counter}px)`;
      return
    }
    
  }

  init() {
    this.leftArrow.addEventListener('click', this.turnLeft);
    this.rightArrow.addEventListener('click', this.turnRight);
  }
}

const sliderRealizedObjects = new Slider(document.getElementById('sliderRealizedObjects'));
sliderRealizedObjects.init();

const sliderPartners = new Slider(document.getElementById('sliderPartners'));
sliderPartners.init();
