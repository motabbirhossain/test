/*
Template:ImmiPress - Solution & Information HTML Template
Author: Theme Junction
*/

(function($) {
    "use strict"

    $(document).ready(function () {

        /* =============================================
            # Owl Carousel slider init
         ===============================================*/

        $(".hero-slider").owlCarousel({        
            items: 1,     
            dots: true,
            loop: true,
            autoplayTimeout: 4000,
            animateOut: 'fadeOut',
            smartSpeed:2000,
            autoplay:true,
            nav: false,
        });
        
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
        /*==========================
           Sticky Menu Init
        ============================*/

        // Sticky Menu
        // $(window).scroll(function() {
        //     var Width = $(document).width();

        //     if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
        //         if (Width > 767) {
        //             $("header").addClass("sticky");
        //         }
        //     } else {
        //         $("header").removeClass("sticky");
        //     }
        // });


        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        //metisMenu
        $("#mobile-menu").metisMenu();

        //AOS
        AOS.init();
        
        
    }); // end document ready function

})(jQuery); // End jQuery
