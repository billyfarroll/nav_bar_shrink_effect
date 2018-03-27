        $(document).ready(function () {
            $(window).scroll(function () {
             
               $(".navbar-standard").toggleClass("navbar-shrink", $(this).scrollTop() > 40)
			   $(".title1").toggleClass("title1_shrink", $(this).scrollTop() > 40)
            });
        });
