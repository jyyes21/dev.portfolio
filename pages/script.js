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

  prevScrollpos = currentScrollPos;
};



