
// HEADER
window.onscroll = function() {myFunction()};

const header = document.querySelector(".header")
// var sticky = header.offsetTop;

const sticky = 30;

function myFunction() {
  if (window.scrollY > sticky) {
    header.style.boxShadow = "0 0 10px 1px lightgrey";
  } else {
    header.style.boxShadow = "none";
  }
}









// REGISTER JS
function validate() {
	var username = document.getElementById("username").value;
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var postcode = document.getElementById("postcode").value;
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var iceCream1 = document.getElementById("ic1").checked;
	var iceCream2 = document.getElementById("ic2").checked;
	var iceCream3 = document.getElementById("ic3").checked;
	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;

	if (username == "") {
		errMsg += "Username cannot be empty.\n";
	}
	if (pass1.length < 8) {
		errMsg += "Password has to be at least 8 characters long.\n";
	}
	if (pass2 == "") {
		errMsg += "Retype Password cannot be empty.\n";
	}
	if (pass1 != pass2) {
		errMsg += "Passwords do not match.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if (!postcode.match(/^(?=.*\d).{4}$/)) {
		errMsg += "Postcode has to be 4-digit.\n";
	}
	if (name == "") {
		errMsg += "User's name cannot be empty.\n";
	}
	if (!name.match(pattern)) {
		errMsg += "User's name contains symbols.\n";
	}
	if ((male == "") && (female == "")) {
		errMsg += "A gender must be selected.\n";
	}
	if ((iceCream1 == "") && (iceCream2 == "") && (iceCream3 == "")) {
		errMsg += "You have to choose at least 1 type of ice cream.\n";
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var regForm = document.getElementById("form");
	regForm.onsubmit = validate;
}

window.onload = init;