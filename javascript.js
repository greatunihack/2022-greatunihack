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
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementsByClassName("date-heading").style.zIndex = "0";
  document.getElementById("firstLottie").style.display = "block";
  
}




