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
window.addEventListener("scroll", () => appear(recruiter));