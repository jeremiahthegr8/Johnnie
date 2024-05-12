document.getElementById("toggleButton").addEventListener("click", function () {
  var panel = document.getElementById("panel");
  var button = document.getElementById("toggleButton");
  var span = button.querySelector(".prvtxt");
  var arrow = button.querySelector(".arrow");
  if (panel.style.display === "none") {
    panel.style.display = "block";
    span.innerHTML = "PREVIOUS TIPS (View Slip)";
    arrow.classList.add("rotate"); // Add rotation
  } else {
    panel.style.display = "none";
    span.innerHTML = "PREVIOUS TIPS (View Slip)";
    arrow.classList.remove("rotate"); // Remove rotation
  }
});
// JavaScript for Button 1
document
  .getElementById("toggleButtonone")
  .addEventListener("click", function () {
    var panel = document.getElementById("panel1");
    var button = document.getElementById("toggleButtonone");
    var span = button.querySelector(".prvtxt");
    var arrow = button.querySelector(".arrow");
    if (panel.style.display === "none") {
      panel.style.display = "block";
      span.innerHTML = "PREVIOUS TIPS (View Slip)";
      arrow.classList.add("rotate180"); // Add rotation
    } else {
      panel.style.display = "none";
      span.innerHTML = "PREVIOUS TIPS (View Slip)";
      arrow.classList.remove("rotate180"); // Remove rotation
    }
  });

// JavaScript for Button 2
document.getElementById("toggleButtontwo").addEventListener("click", function () {
  var panel = document.getElementById("panel2");
  var button = document.getElementById("toggleButtontwo");
  var span = button.querySelector(".prvtxt");
  var arrow = button.querySelector(".arrow");
  if (panel.style.display === "none") {
    panel.style.display = "block";
    span.innerHTML = "PREVIOUS TIPS (View Slip)";
    arrow.classList.add("rotate"); // Add rotation
  } else {
    panel.style.display = "none";
    span.innerHTML = "PREVIOUS TIPS (View Slip)";
    arrow.classList.remove("rotate"); // Remove rotation
  }
});

function updateDateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  var date = now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear();
  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = strTime;
}
setInterval(updateDateTime, 1000);

function checkDevice() {
  var ipadContent = document.getElementsByClassName("ipadContent");

  for (var i = 0; i < ipadContent.length; i++) {
    if (window.matchMedia("(min-device-width: 768px)").matches) {
      // iPad, laptops, desktops
      ipadContent[i].style.display = "block";
    } else {
      // Other devices
      ipadContent[i].style.display = "none";
    }
  }
}

// Run on page load
checkDevice();

// Run on window resize
window.onresize = checkDevice;