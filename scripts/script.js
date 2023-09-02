const nav = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  window.scrollY > 10
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
});
