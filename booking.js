// booking message
  let form = document.getElementById("bookingForm");
  let msg = document.getElementById("confirmationMsg");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display ='none';
        form.reset();
    },5000);
  });