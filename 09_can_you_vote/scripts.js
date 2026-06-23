// Instructions in the CSS

function checkAge() {
  let message = "";
  let age = document.getElementById("ageBox").value;

  if (age == ""){
    message = "Please enter an age!";
  } else if (age > 100){
    message = "You're a living legend!";
  } else if (age < 0){
    message = "You're a time traveller!";
  } else if (age >= 18){
    message = "You can vote!";
  } else if (age >= 16){
    message = "You can pre-enrol.";
  } else {
    message = "Sorry, you can't register yet.";
  }
  document.getElementById("results").innerText = message;
}
document.getElementById("submit").onclick = checkAge
