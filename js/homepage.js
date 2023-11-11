
const project1 = document.getElementById("project-1");

project1.style.display = "none";

const project2 = document.getElementById("project-2");

project2.style.display = "none";

const project3 = document.getElementById("project-3");

project3.style.display = "none";

const project1Button = document.getElementById("project1-button");

project1Button.addEventListener("click", () => {
  if (project1.style.display === "none") {
    project1.style.display = "block";
  } else {
    project1.style.display = "none";
  }
});

const project2Button = document.getElementById("project2-button");

project2Button.addEventListener("click", () => { 
  if (project2.style.display === "none") {
    project2.style.display = "block";
  } else {
    project2.style.display = "none";
  }
});

const project3Button = document.getElementById("project3-button");

project3Button.addEventListener("click", () => { 
  if (project3.style.display === "none") {
    project3.style.display = "block";
  } else {
    project3.style.display = "none";
  }
});