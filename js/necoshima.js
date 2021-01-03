$('.nav_toggle').on('click', function() {
    $('.nav_toggle, .nav').toggleClass('show');
});



$('.slider').slick({
   slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  
  responsive: [{
		breakpoint: 599,
		settings: {
			slidesToShow: 2, // 表示スライド数 2つ
			slidesToScroll: 1,
		}
	}]
  
  
});






 $(function () {
        /* slick setting
        ------------------------------------- */
        $('.responsive').slick({
            arrows: false,
            autoplay: true,
            draggable: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            
            
            
            
           
           responsive: [{
		breakpoint: 599,
		settings: {
			slidesToShow: 2.5, // 表示スライド数 2つ
			slidesToScroll: 1,
		}
	}]
            
        });
    });
    
    
    
