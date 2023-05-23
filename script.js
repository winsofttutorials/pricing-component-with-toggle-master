var toggleBtn = document.getElementById("toggleBtn");
var plansStatus = document.getElementsByClassName("plan");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var monthly1 = document.getElementById("monthly1");
var monthly2 = document.getElementById("monthly2");
var monthly3 = document.getElementById("monthly3");

let currentValue = 1;
function activlink() {
  if (currentValue == 1) {
    for (const i of plansStatus) {
      i.classList.remove("active");
    }
    currentValue++;
    plansStatus[currentValue - 1].classList.add("active");
  } else {
    for (const i of plansStatus) {
      i.classList.remove("active");
    }
    currentValue--;
    plansStatus[currentValue - 1].classList.add("active");
  }
}

var i = false;
function toggleIcon() {
  toggleBtn.classList.toggle("rightToggle");

  // form1.style.transform = "translateY(40px)";
  // monthly1.style.transform = "translateY(0px)";
  if (!i) {
    i = true;
    form1.style.transform = "translateY(40px)";
    monthly1.style.transform = "translateY(0px)";
    form2.style.transform = "translateY(40px)";
    monthly2.style.transform = "translateY(0px)";
    form3.style.transform = "translateY(40px)";
    monthly3.style.transform = "translateY(0px)";
    activlink();
  } else {
    form1.style.transform = "translateY(0px)";
    monthly1.style.transform = "translateY(-40px)";
    form2.style.transform = "translateY(0px)";
    monthly2.style.transform = "translateY(-40px)";
    form3.style.transform = "translateY(0px)";
    monthly3.style.transform = "translateY(-40px)";
    activlink();
    i = false;
  }
}
