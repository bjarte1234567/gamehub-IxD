const continueButton = document.getElementById("continue-btn");
const errorMessage = document.getElementById("error-message");

continueButton.addEventListener("click", function (event) {
  const cardName = document.getElementById("cardname");
  const cardNumber = document.getElementById("cardnumber");
  const expiryDate = document.getElementById("expirdate");
  const expiryYear = document.getElementById("expiryear");
  const cvv = document.getElementById("cvv");
  const platforms = document.querySelectorAll('input[name="platform"]:checked');

  // Check if all fields are filled out
  if (
    cardName.value.length < 2 ||
    cardNumber.value.length < 16 ||
    expiryDate.value === "" ||
    expiryYear.value === "" ||
    cvv.value.length < 3 ||
    platforms.length === 0
  ) {
    event.preventDefault();
    errorMessage.style.display = "block";
    // Highlight the invalid fields in red and valid in green
    if (cardName.value.length < 2) {
      cardName.style.borderColor = "red";
    } else {
      cardName.style.borderColor = "green";
    }
    if (cardNumber.value.length < 16) {
      cardNumber.style.borderColor = "red";
    } else {
      cardNumber.style.borderColor = "green";
    }
    if (cvv.value.length < 3) {
      cvv.style.borderColor = "red";
    } else {
      cvv.style.borderColor = "green";
    }
    if (expiryDate.value === "" || expiryYear.value === "") {
      expiryDate.style.borderColor = "red";
      expiryYear.style.borderColor = "red";
    } else {
      expiryDate.style.borderColor = "green";
      expiryYear.style.borderColor = "green";
    }
    if (platforms.length === 0) {
      document.querySelector(".platform-checkbox").style.borderColor = "red";
    } else {
      document.querySelector(".platform-checkbox").style.borderColor = "green";
    }
  } else {
    // All fields are filled out, hide the error message and highlight the fields in green
    errorMessage.style.display = "none";
    cardName.style.borderColor = "green";
    cardNumber.style.borderColor = "green";
    cvv.style.borderColor = "green";
    expiryDate.style.borderColor = "green";
    expiryYear.style.borderColor = "green";
    document.querySelector(".platform-checkbox").style.borderColor = "green";
  }
});
