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

const labs = document.querySelector(".glance-detail .glance-about .box2");
const establishment = document.querySelector(".glance-detail .glance-about .box1");
const books = document.querySelector(".glance-detail .glance-about .box3");
const rooms = document.querySelector(".glance-detail .glance-about .box4");
const print = document.querySelector(".glance-detail .glance-about .box5");
const area = document.querySelector(".glance-detail .glance-about .box6");

function number(element, max, text, value, plus) {
  const triggerBottom = window.innerHeight / 4*5;

  const classes = element.getBoundingClientRect().top;


  if (classes < triggerBottom) {
    console.log("hello")
    console.log(classes)
    let count = 0;
    const interval = setInterval(() => {
      count += value;
      element.innerHTML = `<h2>${count}${plus}</h2> <h3>${text}</h3>`;
      if(count == max){
        window.removeEventListener('scroll', alumni_number);
        window.removeEventListener('scroll', excellence_number);
        window.removeEventListener('scroll', campus_placement);
        window.removeEventListener('scroll', campus_recruiters);
        window.removeEventListener('scroll', establishment_eit);
        window.removeEventListener('scroll', labs_workshops);
        window.removeEventListener('scroll', book);
        window.removeEventListener('scroll', classrooms);
        window.removeEventListener('scroll', national_print);
        window.removeEventListener('scroll', eit_area);
        clearInterval(interval);
      }
    }, 15)
    
  }

}
function excellence_number() {
  number(excellence, 17, "YEARS OF EXCELLENCE IN EDUCATION", 1, "");
}
function alumni_number() {
  number(alumni, 2800, "ALUMNI", 50, "+");
}
function campus_placement() {
  number(cplacement, 1750, "IN-CAMPUS PLACEMENT", 50, "+");
}
function campus_recruiters() {
  number(recruiters, 165, "CAMPUS RECRUITERS", 5, "+");
}
function labs_workshops(){
  number(labs, 70, "Labs & Workshops", 2, "+")
}
function establishment_eit(){
  number( establishment,  2007, "Establishment Year", 9, "")
}
function book(){
  number(books,  40000, "Books", 200, "+")
}
function classrooms(){
  number(rooms,  50, "Classrooms and Tutorial Rooms", 1, "+")
}
function national_print(){
  number(print,  58, "National & International Print Journals", 1, "+")
}
function eit_area(){
  number(area,  17.5, "Acres Green Lush Campus", 0.5, "+")
}
window.addEventListener("scroll", eit_area);
window.addEventListener("scroll", national_print);
window.addEventListener("scroll", classrooms);
window.addEventListener("scroll", book);
window.addEventListener("scroll", labs_workshops);
window.addEventListener("scroll", establishment_eit);
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