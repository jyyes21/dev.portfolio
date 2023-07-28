





var originalPlaybackRate; // Variable pour stocker la vitesse de lecture originale de la vidéo

function playVideoOpkod() {
  var video = document.getElementById("video-opkod");
  if (!originalPlaybackRate) {
    originalPlaybackRate = video.playbackRate; // Sauvegarde de la vitesse de lecture originale
  }
  video.playbackRate = 2.0; // Définition de la vitesse de lecture à 2x
  video.play();
}

function pauseVideoOpkod() {
  var video = document.getElementById("video-opkod");
  video.playbackRate = originalPlaybackRate; // Restauration de la vitesse de lecture originale
  video.pause();
}






var originalPlaybackRate; // Variable pour stocker la vitesse de lecture originale de la vidéo

function playVideoTroc() {
  var video = document.getElementById("video-Troc");
  if (!originalPlaybackRate) {
    originalPlaybackRate = video.playbackRate; // Sauvegarde de la vitesse de lecture originale
  }
  video.playbackRate = 2.0; // Définition de la vitesse de lecture à 2x
  video.play();
}

function pauseVideoTroc() {
  var video = document.getElementById("video-Troc");
  video.playbackRate = originalPlaybackRate; // Restauration de la vitesse de lecture originale
  video.pause();
}






    function actualiserHeure() {
      const date = new Date();
      const heure = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');

      document.getElementById('heure').textContent = `${heure}:${minutes}`;
    }

    actualiserHeure();
    setInterval(actualiserHeure, 1000); // Actualiser l'heure chaque seconde



    let phoneVisible = false;

  function togglePhone() {
    const textToCopy = "Text to copy"; // Replace this with the text you want to copy
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Toggle the visibility of the "message copied" notification
    const phoneDiv = document.getElementById("phoneDiv");
    phoneVisible = !phoneVisible;
    if (phoneVisible) {
      phoneDiv.classList.remove("hidden"); // Show the message div
    } else {
      phoneDiv.classList.add("hidden"); // Hide the message div
    }
  }



  let mailVisible = false;

  function toggleMail() {
    const textToCopy = "Text to copy"; // Replace this with the text you want to copy
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Toggle the visibility of the "message copied" notification
    const mailDiv = document.getElementById("mailDiv");
    mailVisible = !mailVisible;
    if (mailVisible) {
      mailDiv.classList.remove("hidden"); // Show the message div
    } else {
      mailDiv.classList.add("hidden"); // Hide the message div
    }
  }









  document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'élément .typing-animation
    const typingAnimation = document.querySelector('.typing-animation');
  
    // Définir le texte complet à afficher
    const fullText = "Développeur full stack";
  
    // Fonction pour démarrer l'animation de saisie
    function startTypingAnimation() {
      typingAnimation.textContent = ''; // Réinitialiser le contenu
      let i = 0;
  
      // Fonction pour afficher les caractères un par un
      function typeNextCharacter() {
        if (i < fullText.length) {
          typingAnimation.textContent += fullText.charAt(i);
          i++;
          setTimeout(typeNextCharacter, 100); // Délai entre chaque caractère (100 millisecondes ici)
        } else {
          // Ajouter une pause de 2 secondes après que le texte soit entièrement écrit
          setTimeout(resetTypingAnimation, 2000); // 2000 millisecondes = 2 secondes
        }
      }
  
      // Lancer la saisie de caractères
      typeNextCharacter();
    }
  
    // Fonction pour réinitialiser l'animation
    function resetTypingAnimation() {
      // Supprimer les caractères un par un pour obtenir l'effet de retour de l'animation
      let i = fullText.length;
      function deleteNextCharacter() {
        if (i >= 0) {
          typingAnimation.textContent = fullText.substring(0, i);
          i--;
          setTimeout(deleteNextCharacter, 100); // Délai entre chaque caractère (100 millisecondes ici)
        } else {
          // Une fois que le texte est entièrement effacé, relancer l'animation de saisie
          setTimeout(startTypingAnimation, 1000); // Délai de 1 seconde avant de redémarrer l'animation
        }
      }
  
      // Démarrer la suppression de caractères
      deleteNextCharacter();
    }
  
    // Démarrer l'animation de saisie au chargement de la page
    startTypingAnimation();
  });
  











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





