
import { rockets, planets } from './data.js';
import { fetchData, checkLaunchConditions, updateRocketSpecs, getHistoricalData } from './api.js';
import { canEscapePlanet ,calculateEscapeVelocity} from './utils.js';


async function init() {
    try {
    
    } catch (error) {
        console.error('Initialization failed:', error);
    }
}

// for mobile view navbar
document.addEventListener('click', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navList = document.getElementById('navList');

    hamburgerMenu.addEventListener('click', () => {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });
});    


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('predictLaunchButton').addEventListener('click', predictLaunch);
});

document.addEventListener('DOMContentLoaded', () => {
    const launchButton = document.getElementById('predictLaunchButton');
    const rocketForm = document.getElementById('rocket-form');
    const rocketSelect = document.getElementById('rocketSelect');
    const planetSelect = document.getElementById('planetSelect');

    // Form submission event
    rocketForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        predictLaunch();
    });

    // Optionally, handle changes in rocket and planet selections
    rocketSelect.addEventListener('change', handleRocketChange);
    planetSelect.addEventListener('change', handlePlanetChange);
});

// Function to handle the launch prediction
export function predictLaunch() {
    // console.log("Hi");
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    const weight = document.getElementById('weight').value;
    const rocketSelect = document.getElementById('rocketSelect');
    const planetSelect = document.getElementById('planetSelect');

    // Assuming the Rocket constructor and properties are correctly defined
    const rocket = new Rocket(height, width, weight);
    const planetName = planetSelect.value;

    const result = canEscapePlanet(rocket, planetName);

    // Displaying the result
    const resultElement = document.getElementById('rocket-result');
    resultElement.textContent = result;
}


export class Rocket {
    constructor(height, width, weight) {
        this.height = height;
        this.width = width;
        this.weight = weight;
    }

    calculateVolume() {
        
        return Math.PI * (this.width / 2) ** 2 * this.height;

    }

    calculateDensity() {
        return this.weight / this.calculateVolume();
    }

}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.slide');
    const slides1 = document.querySelectorAll('.slide1');
    let currentSlide = 0;
    let currentSlide1 = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function showSlide1(index) {
        slides1.forEach((slide1, j) => {
            if (j === index) {
                slide1.classList.add('active');
            } else {
                slide1.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function nextSlide1() {
        currentSlide1 = (currentSlide1 + 1) % slides1.length;
        showSlide1(currentSlide1);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);

    setInterval(nextSlide1, 5000); // Change slide every 5 seconds
    showSlide1(currentSlide1);
});


init();