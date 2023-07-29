










// Fonction pour faire défiler vers le haut lorsque le bouton est cliqué
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (prevScrollpos > currentScrollPos) {
    // Scroll vers le haut, afficher la barre de navigation avec une animation
    navbar.style.transform = "translateY(0)";
  } else {
    // Scroll vers le bas, masquer la barre de navigation avec une animation
    navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").classList.add("show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }

  prevScrollpos = currentScrollPos;
};
