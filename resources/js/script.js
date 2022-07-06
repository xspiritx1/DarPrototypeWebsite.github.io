$(document).ready(function() {
    /* STICKY NAVIGATION */
    $(".about-section").waypoint(function(direction) {
        if(direction == "down") {
            $("nav").addClass('sticky-nav');
        }
        else 
        {
            $("nav").removeClass('sticky-nav');
        }
    })

    $(".packages-section").waypoint(function(direction) {
        
        if(direction == "down") {
            $("nav").removeClass('sticky-nav');
        }
        else 
        {
            $("nav").addClass('sticky-nav');
        }
        
    })



    /* ANIMATE PACKAGES */
    $(".js--packages-section").waypoint(function(direction) {
        if(direction == "down") {
            $(".js--dublex").addClass('animate__animated animate__pulse');
        }
    });

    /* PRELOADER */
    var loader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        loader.style.display = "none";
    })
    
});