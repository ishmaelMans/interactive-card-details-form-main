cardholderName = document.getElementById("cardholder");
cardNumber = document.getElementById("cardnumber");
cardNumberInput = document.getElementById("card-number-input");

cardholderName.addEventListener("keydown", (e) => {
  console.log(e.target.value);
});

cardNumber.addEventListener("keydown", (e) => {
  let value = e.target.value;
  console.log(value);
  cardNumberInput.textContent = `${value}`;
});
