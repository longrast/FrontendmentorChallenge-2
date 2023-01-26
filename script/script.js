const start = document.getElementById("start");
const end = document.getElementById("end");
const submitButton = document.getElementById("submit");
const ratings = document.querySelectorAll("state-start__choose-button");
const actualRating = document.getElementById("stars");

submitButton.addEventListener("click", () => {
  if(actualRating.innerHTML != ".") {
    start.style.display = "none";
    end.style.display = "flex";
  }
  else {
    start.style.display = "flex";
    end.style.display = "none";
  }
});

function myFunction1() {
  actualRating.innerHTML = "1";
}
function myFunction2() {
  actualRating.innerHTML = "2";
}
function myFunction3() {
  actualRating.innerHTML = "3";
}
function myFunction4() {
  actualRating.innerHTML = "4";
}
function myFunction5() {
  actualRating.innerHTML = "5";
}
