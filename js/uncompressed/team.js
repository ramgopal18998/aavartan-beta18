// document.getElementByClass("slick-next").innerHTML="New Button Text";
// document.getElementByClass("slick-next").value="New Button Text";




$(function() {
			$('.carousel').carousel({
						interval: false
			})

			$('#responsive-carousel').slick({
						dots: false,
						arrows: true,
						infinite: true,
						speed: 800,
						slidesToShow: 4,
						slidesToScroll: 4,
						//prevArrow: '.slick-prev',
						//nextArrow: '.slick-next',
						responsive: [{
												breakpoint: 960,
												settings: {
															slidesToShow: 4,
															slidesToScroll: 4
												}
									}, {
												breakpoint: 768,
												settings: {
															slidesToShow: 3,
															slidesToScroll: 3
												}
									}, {
												breakpoint: 480,
												settings: {
													slidesToShow: 2,
													slidesToScroll: 2,
													dots: false,
													arrows: true,
												}
									}
									// You can unslick at a given breakpoint now by adding:
									// settings: "unslick"
									// instead of a settings object
						]
			});

			$('#responsive-carousel input').on('change', function() {
				$('#responsive-carousel .radio-inline').removeClass('selected');
				$(this).closest('.radio-inline').addClass('selected');
			});

			var filterString = '';

			$('.letter-filter a').on('click', function(event) {
				event.preventDefault();
				$('#responsive-carousel').slick('slickUnfilter');
				var filterString = $(this).attr('data-filter-by');
				console.log(filterString);
				$('#responsive-carousel').slick('slickFilter', '[data-first-letter="'+filterString+'"]');
				//$(this).text('Unfilter Slides');
				filtered = true;
			});
			$('.select-filter select').on('change', function(event) {
				var filterString = $(this).val();
				console.log(filterString);
				if( filterString == "reset") {
					$('#responsive-carousel').slick('slickUnfilter');
				} else {
					$('#responsive-carousel').slick('slickFilter', '[data-first-letter="'+filterString+'"]');
				}


			});



			$('.reset').on('click', function(event) {
				event.preventDefault();
				$('#responsive-carousel').slick('slickUnfilter');
				filtered = false;
			});
});
// console.log(document.getElementsByClassName("slick-next"))
// document.getElementsByClassName("slick-next").style.display= "none";
// setInterval(function(){		$('#sid').trigger('click');
//  }, 3000);


 $('#responsive-carousel').on('mouseenter', function(event) {
	 // event.preventDefault();
	 clearInterval(autotimer);
	 autotimer = null;
});
$('#responsive-carousel').on('mouseleave', function(event) {
	// event.preventDefault();
	// console.log("mouseleave");
	aww();
	 // autotimer = setInterval(function(){
		// console.log("triggered")
		//  	$('#sid').trigger('click')
		// }
	 // , 1001);
	// clearInterval(autotimer);
});

var aww = function(){
 autotimer = setInterval(function(){
	 	$('#sid').trigger('click')
	}
 , 2000);
}
aww();
// $('#autonext').on('click', function() {
// console.log("js")
//       alert($(this).text());
//     });
// 		$('#autonext').trigger('click');
//
//
// 		// $('.slick-next').trigger('click');
//
// 		$("button").click(function(){
//   // action goes here!!
// 	console.log("js")
// 	      alert($(this).text());
// });
