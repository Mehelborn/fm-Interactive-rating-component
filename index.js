var chosenRate = 0;

document.querySelectorAll(".grades").forEach((element) => {
  element.addEventListener("click", function () {
    chosenRate = element.value;
  });
});

document.querySelector(".submit").addEventListener("click", function () {
  document.querySelector(".rate-state").classList.add("hide");
  document.querySelector(".ty-state").classList.remove("hide");
  document.getElementById("rate").textContent = chosenRate;
  document.getElementById("rate").classList.remove("hide");
});
