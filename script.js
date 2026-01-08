function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const reviews = [
  "Amazing product! Highly recommended.",
  "Clean UI and very easy to use.",
  "Great support and fast performance."
];

let i = 0;
setInterval(() => {
  document.getElementById("testimonial").innerText = reviews[i];
  i = (i + 1) % reviews.length;
}, 3000);

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");

  if (name === "" || email === "") {
    error.innerText = "Please fill all fields";
  } else {
    error.style.color = "lightgreen";
    error.innerText = "Submitted successfully!";
  }
});
