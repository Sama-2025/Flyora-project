const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();


  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    valid = false;
  }

  if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (phone === "" || !/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter a valid phone number.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Please write a message.";
    valid = false;
  }

  if (valid) {
    alert("Thank you! Your message has been sent.");
    form.reset();
  }
});
