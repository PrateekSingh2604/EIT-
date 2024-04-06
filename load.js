const welcome = document.querySelector(".wlcmpage");
const placement = document.querySelector(".campus-placement")
const recruiter = document.querySelector(".recruiter");
const course_head = document.querySelector(".course-info")
const courses = document.querySelector(".main-courses") 
const campus_life = document.querySelector(".campus-life")

function appear(element){
    const triggerBottom = window.innerHeight;

    const welcomeTop = element.getBoundingClientRect().top


    if(welcomeTop < triggerBottom){
        element.classList.add("show");
        element.style.display = "flex";
        campus_life.style.display = "block"
    }
    else{
        element.classList.remove("show");
    }
}


window.addEventListener("scroll", () => appear(placement));
window.addEventListener("scroll", () => appear(welcome));
window.addEventListener("scroll", () => appear(recruiter));
window.addEventListener("scroll", () => appear(course_head));
window.addEventListener("scroll", () => appear(courses));
window.addEventListener("scroll", () => appear(campus_life));

//home page image change
const images = [
    "img/eitCampus.JPG",
    "img/campus/canteen.JPG",
    "img/campus/sports.jpg",
    "img/front-img/Faculty.jpg",
    "img/front-img/Farewell2023.jpg",
    "img/front-img/Seniors.jpg"
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

  // function prevSlide() {
  //   currentIndex = (currentIndex - 1) % images.length;
  //   updateBackground();
  // }
  function autoSlide() {
    setInterval(nextSlide, 3000); // Change slide every 5 seconds
  }

  updateBackground();
  autoSlide();