const backgrounds = [
    'assets/img/bedroom_1.jpg',
    'assets/img/bedroom_2.jpg',
    'assets/img/living-room_1.jpg',
    'assets/img/living-room_2.jpg',
    'assets/img/kitchen_1.jpg',
    'assets/img/kitchen_2.jpg',
];

const buttonPrev = document.querySelector('.button_previous');
const buttonNext = document.querySelector('.button_forward');
const slider = document.querySelector('.slider');
const totalSlides = backgrounds.length;
let backgroundUrlId = 0;
const inputs = document.querySelectorAll('.slider-button-group__input');
const sliderTitle = document.querySelector('.js-slider__subtitle');
const sliderPrice = document.querySelector('.js-slider__price');

const setBackground = (number = 0) => slider.style.backgroundImage = `url(${backgrounds[number]})`;
setBackground();

const setSliderTitle = (text) => sliderTitle.innerText = text;
const setSliderPrice = (price) => sliderPrice.innerText = price;

const setContent = () => {
    if (backgroundUrlId === 0 || backgroundUrlId === 1) {
        setSliderTitle("Для спальни");
        setSliderPrice(50);
    } else if (backgroundUrlId === 2 || backgroundUrlId === 3) {
        setSliderTitle("Для зала");
        setSliderPrice(85);
    } else {
        setSliderTitle("Для кухни");
        setSliderPrice(45);
    }
}

function nextSlider(direction) {
    if (direction === 'next') {
        if (backgroundUrlId === totalSlides - 1) {
            const n = backgroundUrlId = 0;
            setBackground(n);
            inputs[n].checked = "checked";
        } else {
            const n = backgroundUrlId += 1;
            setBackground(n);
            inputs[n].checked = "checked";
        }
    }

    if (direction === 'prev') {
        if (backgroundUrlId === 0) {
            const n = backgroundUrlId = 5;
            setBackground(n);
            inputs[n].checked = "checked";
        } else {
            const n = backgroundUrlId -= 1;
            setBackground(n);
            inputs[n].checked = "checked";
        }
    }
    setContent();
}

buttonNext.addEventListener('click', () => nextSlider('next'));
buttonPrev.addEventListener('click', () => nextSlider('prev'));

inputs.forEach((item, id) => {
    item.addEventListener('click', () => {
        setBackground(backgroundUrlId = id);
        setContent();
    });
});

