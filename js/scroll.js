let button = document.querySelector('.scroll');
button.addEventListener('click', goToTop);
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function() {
  function showTopButton() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.querySelector(".scroll").style.display = "block";
    } else {
      document.querySelector(".scroll").style.display = "none";
    }

  }

  showTopButton()};



