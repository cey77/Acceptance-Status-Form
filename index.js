//Change function

var gender = null;
var prevUni = null;
var lastDegree = null;
var gpa = null;
var coef3_1 = -0.22312; //low
var coef3_2 = 0.53518; //meidium
var coef3_3 = -2.69323; //very high
var coef3 = null;
function GenderFunction(e1) {
  gender = e1.options[e1.selectedIndex].value;
  console.log(gender);
}
function UniFunction(e1) {
  prevUni = e1.options[e1.selectedIndex].value;
  console.log(prevUni);
  if (prevUni == "0") {
    coef3 = coef3_1;
    //console.log("inn");
  } else if (prevUni == "1") {
    coef3 = coef3_2;
  } else {
    coef3 = coef3_3;
  }
}
function DegreeFunction(e1) {
  lastDegree = e1.options[e1.selectedIndex].value;
  console.log(lastDegree);
}
const gpaField = document.getElementById("gpa");
gpaField.addEventListener("input", function () {
  gpa = gpaField.value;
  console.log(gpa);
});

var coef1 = 17.81166;
var coef2 = -0.60603;
var coef4 = 0.93390;
var coef6 = -0.23425;

const myForm = document.getElementById("myForm");

// Add an event listener to the form for the submit event
myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var equationResult =
    coef1 +
    coef2 * parseInt(gender) +
    coef3 * parseInt(prevUni) +
    coef4 * parseInt(lastDegree) +
    coef6 * gpa;

  var proba = 1 / (1 + Math.exp(-1 * equationResult));
  var AcceptanceResult = null;
  if (proba < 0.5) {
    AcceptanceResult = "Accepted Unconditionally";
  } else {
    AcceptanceResult = "Accepted Conditionally";
  }
  console.log(proba);
  document.getElementById("result").innerHTML =
    "<h3> Your Probability is " +
    proba + //proba.toFixed(3)
    "<br>" + "<br>" +
    " Acceptance Result: " +
    AcceptanceResult +
    "<h3/>";

  // You can perform other actions here, like sending data via AJAX, etc.
});
