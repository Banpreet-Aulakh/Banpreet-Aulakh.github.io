
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

if (isTouchDevice()) {
  document.body.classList.add("touch-device");
} else {  
  document.body.classList.add("no-touch-device");
}


const project1 = document.getElementById("project-1");

project1.style.display = "none";

const project2 = document.getElementById("project-2");

project2.style.display = "none";

const project3 = document.getElementById("project-3");

project3.style.display = "none";

const project1Button = document.getElementById("project1-button");

project1Button.addEventListener("click", () => {
  const arrow = document.getElementById("arrow-1");
  if (project1.style.display === "none") {
    project1.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    project1.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }  
});

const project2Button = document.getElementById("project2-button");

project2Button.addEventListener("click", () => { 
  const arrow = document.getElementById("arrow-2");
  if (project2.style.display === "none") {
    project2.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    project2.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
});

const project3Button = document.getElementById("project3-button");

project3Button.addEventListener("click", () => { 
  const arrow = document.getElementById("arrow-3");
  if (project3.style.display === "none") {
    project3.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    project3.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
});