// script.js
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    const zoomers = document.querySelectorAll('.zoom-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    zoomers.forEach(zoomer => {
        appearOnScroll.observe(zoomer);
    });
});

document.querySelector('.btn_one').addEventListener('click', () => {
    document.querySelector('.sidebar_menu').classList.toggle('active');
});
document.querySelector('.btn_two').addEventListener('click', () => {
    document.querySelector('.sidebar_menu').classList.toggle('active');
});


document.getElementById('social_check').addEventListener('change', function() {
    var icons = document.querySelector('.social_media_icons');
    if (this.checked) {
        icons.style.display = 'block';
        icons.style.animation = 'fade-in 0.5s forwards';
    } else {
        icons.style.animation = 'fade-out 0.5s forwards';
        setTimeout(function() {
            icons.style.display = 'none';
        }, 500);
    }
});


// Get all gallery containers
const galleries = document.querySelectorAll('.gallery-container');

// Loop through each gallery container
galleries.forEach((gallery, index) => {
  // Get the slides and dots for this gallery
  const slides = gallery.querySelectorAll('.gallery-slide');
  const dots = gallery.querySelectorAll('.dot');

  // Initialize the current slide index for this gallery
  let currentSlideIndex = 0;

  // Add event listeners to the dots
  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      // Show the corresponding slide for this gallery
      showSlide(gallery, dotIndex);
    });
  });

  // Function to show a slide for this gallery
  function showSlide(gallery, slideIndex) {
    // Hide all slides for this gallery
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Show the selected slide for this gallery
    slides[slideIndex].style.display = 'block';

    // Update the current slide index for this gallery
    currentSlideIndex = slideIndex;
  }

  // Initialize the first slide for this gallery
  showSlide(gallery, 0);
});



// Implement the showSlide function
function showSlide(gallery, slideIndex) {
    const slides = gallery.querySelectorAll('.gallery-slide');
    const dots = gallery.querySelectorAll('.dot');
  
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
  
    slides[slideIndex].style.display = 'block';
  
    dots.forEach((dot, dotIndex) => {
      dot.classList.remove('active');
    });
  
    dots[slideIndex].classList.add('active');
  }
  
  // Implement the appearOnScroll function
  function appearOnScroll(element) {
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('appear');
          appearOnScrollObserver.unobserve(element);
        }
      });
    }, appearOptions);
  
    appearOnScrollObserver.observe(element);
  }



  
function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    var allMenus = document.querySelectorAll('.sub-menu');
    allMenus.forEach(function(m) {
        if (m.id !== menuId) {
            m.style.display = 'none';
        }
    });
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}


document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("image-modal");
  var modalImg = document.getElementById("modal-image");
  var captionText = document.getElementById("modal-caption");
  var closeBtn = document.getElementsByClassName("close")[0];

  closeBtn.onclick = function() { 
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Load default section
  // loadSection('granito');
});

function toggleSubMenu(type) {
  document.querySelectorAll('.sub-menu').forEach(menu => {
      if (menu.id === 'sub-menu-' + type) {
          menu.classList.toggle('active');
      } else {
          menu.classList.remove('active');
      }
  });
}

function loadGallery(material, shade) {
  let title = "";
  let description = "";
  let items = [];   

  if (material === "granito") {
      title = "Granito " + shade.charAt(0).toUpperCase() + shade.slice(1);
      description = "Galería de granito " + shade;
      if (shade === "claros") {
          items = [
              { src: "Granitos cuarzos y mas/Ornamental LIGTH.jpeg", caption: "Ornamental Light<br> Un granito de fondo claro con sutiles vetas doradas y grises,<br>ideal para iluminar cualquier espacio con su apariencia suave y elegante.<br>"},
              { src: "Granitos cuarzos y mas/BLANCO_DALLAS.jpg", caption: "Blanco Dallas<br>Caracterizado por su base blanca con motas y vetas grises y negras,<br>ofreciendo un aspecto limpio y contemporáneo.<br>" },
              { src: "Granitos cuarzos y mas/BlancoFortalez.jpg", caption: "Blanco Fortaleza<br>Presenta un fondo blanco con sutiles vetas y puntos grisáceos,<br>brindando una sensación de amplitud y luminosidad.<br>" },
              { src: "Granitos cuarzos y mas/GrisImperial.jpeg", caption: "Gris Imperial<br>Un granito de fondo gris con vetas oscuras y claras,<br>proporcionando una estética moderna y sofisticada.<br>" },
              {src: "Granitos cuarzos y mas/granitoValleN.jpeg", caption:"El granito Valle Nevado es una piedra brasileña de fondo blanco o gris claro con vetas grises y negras. Su durabilidad y elegante apariencia lo hacen ideal para encimeras, suelos y revestimientos en proyectos residenciales y comerciales."}
            ];
      } else if (shade === "oscuros") {
          items = [
              { src: "Granitos cuarzos y mas/OrnamentalChocolate.jpeg", caption: "Ornamental Chocolate<br>Granito de fondo marrón oscuro con vetas doradas y negras,<br>creando un ambiente cálido y acogedor.<br>" },
              { src: "Granitos cuarzos y mas/verdeubataba.jpg", caption: "Verde Ubatuba<br>De base verde profunda con motas doradas y negras,<br>este granito aporta un toque exótico y elegante.<br>" },
              { src: "Granitos cuarzos y mas/Granito-Verde-Mariposa-abastel.jpg", caption: "Verde Mariposa<br>Presenta un color verde oscuro con vetas y puntos plateados y dorados,<br>evocando la belleza de una mariposa en vuelo.<br>" },
              { src: "Granitos cuarzos y mas/Cafe Veneciatus.jpeg", caption: "Café Veneciatus<br>Un granito marrón con vetas doradas y negras,<br>ideal para espacios que buscan una combinación de lujo y confort.<br>" },
              { src: "Granitos cuarzos y mas/NEGRO-SAN.jpg", caption: "Negro San Gabriel<br>De fondo negro con sutiles motas blancas y grises,<br>perfecto para un aspecto elegante y atemporal.<br>" },
              { src: "Granitos cuarzos y mas/negro_assoluto.jpg", caption:"Negro Absoluto<br>Un granito completamente negro, sin vetas visibles,<br>ofreciendo un acabado limpio y sofisticado.<br>"},
              { src: "Granitos cuarzos y mas/brazilian_black_granite.jpg", caption:"Brasilian Black<br>Presenta un color negro profundo con sutiles variaciones de tono,<br>aportando una sensación de profundidad y riqueza.<br>"}
          ];
      } else if (shade === "exoticos") {
          items = [
              { src: "Granitos cuarzos y mas/bianco-romano-granite.jpg", caption: "Blanco Romano<br>Un granito blanco con elegantes vetas grises y doradas,<br>evocando una estética clásica y lujosa.<br>" },
              { src: "Granitos cuarzos y mas/black mountain.jpg", caption: "Black Mountain<br>De fondo negro con vetas blancas y doradas,<br>creando un contraste dramático y elegante.<br>" },
              { src: "Granitos cuarzos y mas/valhalla-granite.jpg", caption: "Valhalla<br>Presenta una combinación de colores intensos y patrones intrincados,<br>inspirados en las tierras míticas de Valhalla.<br>" },
              {src: "Granitos cuarzos y mas/delicatus-gold.jpg", caption: "Delicatus Gold<br>Un granito de base clara con abundantes vetas doradas y marrones,<br>perfecto para un toque de glamour y sofisticación.<br>"}
          ];
      }
  } else if (material === "cuarzo") {
      title = "Cuarzo " + shade.charAt(0).toUpperCase() + shade.slice(1);
      description = "Galería de cuarzo " + shade;
      if (shade === "claros") {
          items = [
              { src: "Granitos cuarzos y mas/granite-white-galaxy.jpg", caption: "Blanco Galaxy (chispas)<br>Un cuarzo blanco con destellos brillantes que reflejan la luz,<br>creando una superficie dinámica y luminosa.<br>" },
              { src: "Granitos cuarzos y mas/Blanco absoluto.jpeg", caption: "Blanco Absoluto<br>Un cuarzo completamente blanco, sin vetas ni motas,<br>ideal para un acabado minimalista y moderno.<br>" },
              {src: "Granitos cuarzos y mas/Calacata blanco .jpg", caption: "Calacata Blanco<br>Imitando el mármol Calacatta, este cuarzo tiene un fondo blanco<br>con elegantes vetas grises, ofreciendo una apariencia lujosa y clásica.<br>"}
            ];
      } else if (shade === "oscuros") {
          items = [
              { src: "Granitos cuarzos y mas/Gris-Chispas.jpg", caption: "Gris con Chispas<br>Un cuarzo gris con partículas brillantes,<br>proporcionando un aspecto moderno y sofisticado con un toque de brillo.<br>" },
              { src: "Granitos cuarzos y mas/negro con Chispas.jpg", caption: "Ne Chispas<br>Un cuarzo negro con destellos brillantes,<br>perfecto para añadir profundidad y un efecto visual impresionante.<br>" },
              { src: "Granitos cuarzos y mas/Beige-chispas.jpg", caption: "Beige con Chispas<br>De base beige con partículas brillantes,<br>este cuarzo combina calidez con un toque de glamour.<br>" },

            ];
      } else if (shade === "exoticos") {
          items = [
            { src: "Granitos cuarzos y mas/CALACATTA QUARTZ.jpg", caption: "Calacata<br>Similar al mármol Calacatta, este cuarzo exótico presenta un fondo blanco<br>con vetas grises pronunciadas, ofreciendo una apariencia sofisticada y lujosa.<br>" }
              
          ];
      }
  }

  document.getElementById('section-title').innerText = title;
  document.getElementById('section-description').innerHTML = `<p>${description}</p>`;

  let galleryContent = document.getElementById('gallery-content');
  galleryContent.innerHTML = "";
  items.forEach(item => {
      let div = document.createElement('div');
      div.className = "gallery-item";
      div.innerHTML = `
          <img src="${item.src}" alt="${item.caption}" onclick="openModal(this)">
          <div class="caption">${item.caption}</div>
      `;
      galleryContent.appendChild(div);
  });
}

function openModal(element) {
  var modal = document.getElementById("image-modal");
  var modalImg = document.getElementById("modal-image");
  var captionText = document.getElementById("modal-caption");

  modal.style.display = "block";
  modalImg.src = element.src;
  captionText.innerText = element.nextElementSibling.innerText;
}





// app.js

// Example: Initialize a simple image slider
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
