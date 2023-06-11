window.addEventListener("load", function () {
  const loader = document.querySelector(".loading-screen");
  loader.classList.add("effect-hide");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});
