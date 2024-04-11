const welcome = document.querySelector(".wlcmpage");
const placement = document.querySelector(".campus-placement")
const recruiter = document.querySelector(".recruiter");
const course_head = document.querySelector(".course-info")
const courses = document.querySelector(".main-courses")
const campus_life = document.querySelector(".campus-life")

function appear(element) {
  const triggerBottom = window.innerHeight;

  const classes = element.getBoundingClientRect().top


  if (classes < triggerBottom) {
    element.classList.add("show");
    element.style.display = "flex";
    campus_life.style.display = "block";
  }
  else {
    element.classList.remove("show");
  }
}


window.addEventListener("scroll", () => appear(placement));
window.addEventListener("scroll", () => appear(welcome));
window.addEventListener("scroll", () => appear(recruiter));
window.addEventListener("scroll", () => appear(course_head));
window.addEventListener("scroll", () => appear(courses));
window.addEventListener("scroll", () => appear(campus_life));

// echelon by number
const excellence = document.querySelector(".eit-box .boxes .box1")
const alumni = document.querySelector(".eit-box .boxes .box2")
const cplacement = document.querySelector(".eit-box .boxes .box3")
const recruiters = document.querySelector(".eit-box .boxes .box4")

function number(element, max, text) {
  const triggerBottom = window.innerHeight / 4*5;

  const classes = element.getBoundingClientRect().top;


  if (classes < triggerBottom) {
    // element.style.border = "2px solid red";
    console.log(classes)
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      element.innerHTML = `<h2>${count}</h2> <h3>${text}</h3>`;
      if(count == max){
        window.removeEventListener('scroll', alumni_number);
        window.removeEventListener('scroll', excellence_number);
        window.removeEventListener('scroll', campus_placement);
        window.removeEventListener('scroll', campus_recruiters);
        clearInterval(interval);
      }
    }, 5)
    
  }

}
function excellence_number() {
  number(excellence, 17, "YEARS OF EXCELLENCE IN EDUCATION");
}
function alumni_number() {
  number(alumni, 2800, "ALUMNI");
}
function campus_placement() {
  number(cplacement, 1750, "IN-CAMPUS PLACEMENT");
}
function campus_recruiters() {
  number(recruiters, 165, "CAMPUS RECRUITERS");
}

window.addEventListener("scroll", campus_recruiters);
window.addEventListener("scroll", campus_placement);
window.addEventListener("scroll", alumni_number);
window.addEventListener("scroll", excellence_number);


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