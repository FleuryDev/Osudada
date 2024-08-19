import { Carousel } from 'flowbite';
const carouselElement = document.getElementById('carousel-example');



// options with default values
const options = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-orange-700 dark:bg-gray-800',
        
    },


};

// instance options object
const instanceOptions = {
  id: 'default-carousel',
  override: true
};


const carousel = new Carousel(carouselElement, null, options, instanceOptions);