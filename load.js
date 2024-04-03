const welcome = document.querySelector(".Welcome_EIT");
const placement = document.querySelector(".campus-placement")
const recruiter = document.querySelector(".recruiter");

function appear(element){
    const triggerBottom = window.innerHeight;

    const welcomeTop = element.getBoundingClientRect().top


    if(welcomeTop < triggerBottom){
        element.classList.add("show");
        element.style.display = "flex";
        console.log(welcomeTop)
        console.log(triggerBottom)
    }
    else{
        element.classList.remove("show");
    }
}


// window.addEventListener("scroll", () => appear(placement));
window.addEventListener("scroll", () => appear(welcome));
// window.addEventListener("scroll", () => appear(recruiter));

//home page image change
const images = [
    "img/eitCampus.JPG",
    "img/campus/canteen.JPG",
    "img/campus/sports.jpg",
    "img/Holi.jpeg"
    // Add more image URLs as needed
  ];

  let currentIndex = 0;
  const backgroundElement = document.querySelector(".front");

  function updateBackground() {
    backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1) % images.length;
    updateBackground();
  }
  function autoSlide() {
    setInterval(nextSlide, 3000); // Change slide every 5 seconds
  }

  updateBackground();
  autoSlide();