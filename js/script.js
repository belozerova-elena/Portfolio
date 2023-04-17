const header = document.querySelector(".header");

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled !== 0) {
    header.style.backgroundColor = "rgba(249, 247, 247, 0.6)";
  }
  if (scrolled > 50) {
    headerHover();
  }
  if (scrolled < 50) {
    headerTop();
  } else if (scrolled < 30) {
    header.style.backgroundColor = "#f9f7f7";
  }
};

function headerHover() {
  header.addEventListener("mouseover", function handleMouseOver() {
    header.style.backgroundColor = "#f9f7f7";
  });
  header.addEventListener("mouseout", function handleMouseOut() {
    header.style.backgroundColor = "rgba(249, 247, 247, 0.6)";
  });
}
function headerTop() {
  header.addEventListener("mouseout", function handleMouseOver() {
    header.style.backgroundColor = "#f9f7f7";
  });
  header.style.backgroundColor = "#f9f7f7";
}