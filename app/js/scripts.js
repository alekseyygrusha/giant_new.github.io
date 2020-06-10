$(document).ready(function() {
    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
        movingToCenter: function($item) {
            $("#callback-output").prepend(
                "movingToCenter: " + $item.attr("id") + "<br/>"
            );
        },
        movedToCenter: function($item) {
            $("#callback-output").prepend(
                "movedToCenter: " + $item.attr("id") + "<br/>"
            );
        },
        movingFromCenter: function($item) {
            $("#callback-output").prepend(
                "movingFromCenter: " + $item.attr("id") + "<br/>"
            );
        },
        movedFromCenter: function($item) {
            $("#callback-output").prepend(
                "movedFromCenter: " + $item.attr("id") + "<br/>"
            );
        },
        clickedCenter: function($item) {
            $("#callback-output").prepend(
                "clickedCenter: " + $item.attr("id") + "<br/>"
            );
        }
    });

    $("#prev").bind("click", function() {
        carousel.prev();
        return false;
    });

    $("#next").bind("click", function() {
        carousel.next();
        return false;
    });

    $("#reload").bind("click", function() {
        newOptions = eval("(" + $("#newoptions").val() + ")");
        carousel.reload(newOptions);
        return false;
    });

    $('.card_price').hover(
        
        function() {
            console.log('111');
            $('.price_box').toggleClass('.gradient_background')
        }
    );


    // $('#autoplay').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //         {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             infinite: true
    //         }
    //         },
    //         {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //         },
    //         {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //         }
    //     ]
    // });

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
               
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        
    });

    $('#hamburger_button').on("click", function(){
        $('.hamburger_button').toggleClass('active');
        $('.mobile_menu_wrap').toggleClass('open');
    });

});





(function($) {
    $(function() {
        
        $(".menu__icon").on("click", function() {
            
            $(this)
                .closest(".menu")
                .toggleClass("menu_state_open");
        });
    });
})(jQuery);







