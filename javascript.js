
    const navbar = document.querySelector('.navbarw');
    const bar = document.querySelector('.badge');
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
        bar.classList.add('badge-display');
    } else {
        navbar.classList.remove('nav-active');
        bar.classList.add('badge-display');
    }
};




var util = {
    mobileMenu() {
      $("#nav").toggleClass("nav-visible");
    },
    windowResize() {
      if ($(window).width() > 800) {
        $("#nav").removeClass("nav-visible");
      }
    },
    scrollEvent() {
      var scrollPosition = $(document).scrollTop();
      
      $.each(util.scrollMenuIds, function(i) {
        var link = util.scrollMenuIds[i],
            container = $(link).attr("href"),
            containerOffset = $(container).offset().top,
            containerHeight = $(container).outerHeight(),
            containerBottom = containerOffset + containerHeight;
  
        if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
          $(link).addClass("active");
        } else {
          $(link).removeClass("active");
        }
      });
    }
  };
  
  $(document).ready(function() {
    
    util.scrollMenuIds = $("a.nav-link[href]");
    $("#menu").click(util.mobileMenu);
    $(window).resize(util.windowResize);
    $(document).scroll(util.scrollEvent);
    
  });
  
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  
  // document.getElementsByClassName("date-heading").style.zIndex = "-1";
  document.getElementById("firstLottie").style.display = "none";
  // document.getElementsByClassName("ca3-scroll-down-link ca3-scroll-down-arrow").style.display="none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementsByClassName("date-heading").style.zIndex = "0";
  document.getElementById("firstLottie").style.display = "block";
 
  
}


$(function () {
  $(document).scroll(function () {
    var $nav = $("navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}