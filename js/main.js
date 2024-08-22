const carouselElement = document.getElementById('default-carouselA');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
   
];

// options with default values
const options = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses:
            'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2'),
            },
           
        ],
    },
 
   
};

// instance options object
const instanceOptions = {
  id: 'default-carouselA',
  override: true
};


const carousel = new Carousel(carouselElement, items, options, instanceOptions);

// goes to the next (right) slide
carousel.next();

// goes to the previous (left) slide
carousel.prev();

// jumps to the 3rd position (position starts from 0)
carousel.slideTo(0);

carousel.cycle();
