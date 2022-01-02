
$('.cws_loader_container').delay(1500).fadeOut(300,function(){
						$('body').addClass('loaded');									
});

if ($('.how_do_we_do').length > 0) {
    $('.how_do_we_do').owlCarousel({
        loop: false,
        margin: 20,
        responsiveClass: true,
        items: 3,
        navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
        nav: true,
        center: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
            600: {
                items: 2,
                dots: true,
                margin: 0
            },
            1000: {
                items: 3,
                dots: true,
                margin: 0
            },
            1300: {
                items: 3,
            },
            1800: {
                items: 4,
            }
        }
    })
}



if ($('.testimonial .owl-carousel').length > 0) {
    $('.testimonial .owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        items: 2,
        navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
        nav: false,
        center: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
            600: {
                items: 2,
                dots: true,
                margin: 0
            },
            1000: {
                items: 2,
                dots: true,
                margin: 0
            },
            1300: {
                items: 2,
            },
            1800: {
                items: 2,
            }
        }
    })
}




if ($('.videos_slider').length > 0) {
    $('.videos_slider').owlCarousel({
        loop: false,
        margin: 40,
        responsiveClass: true,
        items: 3,
        navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
        nav: true,
        center: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
            600: {
                items: 2,
                dots: true,
                margin: 20
            },
            1000: {
                items: 3,
                dots: true,
                margin: 0
            },
            1300: {
                items: 3,
            },
            1800: {
                items: 3,
            }
        }
    })
}




/*
$(window).scroll(function() {
    var top = $(this).scrollTop();
    if (top > 50) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }

});

*/



$('.form .input').focus(function(){
	$(this).parent().find('.placeholder').addClass('up');
	$(this).css('border-bottom','1px solid rgba(0,0,0,0.5)');
});

$('.form .input').blur(function(){
	if(!$(this).val()){								
		$(this).parent().find('.placeholder').removeClass('up');
		$(this).css('border-bottom','1px solid rgba(0,0,0,0.1)');
	}
});

$('.form .input').each(function(){
	if(!$(this).val()){								
		$(this).parent().find('.placeholder').removeClass('up');								 
	}
	else{
		$(this).parent().find('.placeholder').addClass('up');	
		$(this).css('border-bottom','1px solid rgba(0,0,0,0.5)');
	}
});


if($('.about_slider').length>0){
	$('.about_slider').owlCarousel({
    loop:true,
	autoplay:true,
    margin:30,
    responsiveClass:true,
	items:1,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	nav: true,
	dots:true,
	responsive:{
        0:{
            items:1,
            nav:false,
			margin:0,
        },
        600:{
            items:1,
            nav:false,
			margin:0,
        },
        1000:{
            items:1,
            nav:false,
			margin:0,
        },
		 1300:{
            items:1,
        },		
    }
    
})
}




if($('.about_testimonials .owl-carousel').length>0){
	$('.about_testimonials .owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
    margin:0,
    responsiveClass:true,
	items:1,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	nav: false,
	dots:true,
	responsive:{
        0:{
            items:1,
            nav:false,
			margin:0,
        },
        600:{
            items:1,
            nav:false,
			margin:0,
        },
        1000:{
            items:1,
            nav:false,
			margin:0,
        },
		 1300:{
            items:1,
        },		
    }
    
})
}




if ($('.about_slider2').length > 0) {
    $('.about_slider2').owlCarousel({
		autoplay:true,							
        loop: true,
        margin: 20,
        responsiveClass: true,
        items: 1,
        navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
        nav: false,
        center: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
            600: {
                items: 1,
                dots: true,
                margin: 0
            },
            1000: {
                items: 1,
                dots: true,
                margin: 0
            },
            1300: {
                items: 1,
            },
            1800: {
                items: 1,
            }
        }
    })
}




if($('.store .owl-carousel').length>0){
	$('.store .owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
    margin:20,
    responsiveClass:true,
	items:4,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	nav: true,
	dots:false,
	responsive:{
        0:{
            items:1,
            nav:false,
			margin:0,
        },
        600:{
            items:2,
            nav:false,
			margin:0,
        },
        1000:{
            items:3,
            nav:false,
			margin:0,
        },
		 1300:{
            items:3,
        },		
    }
    
})
}


if($('.looks .owl-carousel').length>0){
	$('.looks .owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
    margin:20,
    responsiveClass:true,
	items:4,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	nav: true,
	dots:false,
	responsive:{
        0:{
            items:1,
            nav:false,
			margin:0,
        },
        600:{
            items:2,
            nav:false,
			margin:0,
        },
        1000:{
            items:4,
            nav:false,
			margin:0,
        },
		 1300:{
            items:4,
        },		
    }
    
})
}
