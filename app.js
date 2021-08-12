let header = document.querySelector("header");
let anchor = header.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    header.style.color = "white";

    // header.style.height = "10vh";

    anchor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    anchor.forEach((a) => {
      a.style = "";
    });
  }
});
