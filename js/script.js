$(document).ready(function(){
    setTimeout(() => {
        $('#preloader').hide();
    }, 1000);
    $(".animated").addClass("delay-1s");
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $("nav").addClass("bg-dark");
        }else{
            $("nav").removeClass("bg-dark");
        }
    });

    // Add scrollspy to <body>
    $('body').scrollspy({target: "#smNavbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#smNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });

    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
    });
    sr.reveal('.sm-content h1', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
    });
    sr.reveal('.sm-content .intro-subtitle', {
    delay: 2000,
    origin: 'right'
    });
    sr.reveal('.sm-content .btn-primary', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
    });
    sr.reveal('#about h1', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
    });
    sr.reveal('section h1', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
    });
    sr.reveal('section p', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
    });
    sr.reveal('.progress', {
    duration: 2000,
    origin: 'bottom',
    distance: '250px'
    });
    sr.reveal('#skills .skill .skill-item .d-flex', {
    delay: 1000,
    origin: 'top',
    distance: '250px'
    });
    sr.reveal('.col-md-6', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom'
    });

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});