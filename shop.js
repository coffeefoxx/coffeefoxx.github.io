 $(function(){
 	// check vi tri 
 	// vitricuawelcome = $('.welcome').offset().top;   // tinh vi tri cua thang div welcome
 	 
// ko tinh vi tri thi cung ko sao, dung luon 750 

	new WOW().init();
 	$(window).scroll(function(event) { // khi cuon chuot thi goi ham 
// $('body').scrollTop() --> tinh ra vi tri hien tai cua man hinh
 		 if($('body').scrollTop() > 150) {  // so sanh vi tri hien tai voi welcome
 		 	$('.navbar-brand.logo img').attr('src', 'images/index/logo.png'); // doi logo
 		  
 		 	 $('.navbar-brand.logo img').addClass('vang'); // them hieu ung 
 		 	 $('.menutren').addClass('nentrang');
 		 }
 		 else   // neu o tren welcome
 		 {
 		 	$('.navbar-brand.logo img').removeClass('vang');  // ve nhu cu 
 		 	$('.menutren').removeClass('nentrang');
 		 	$('.navbar-brand.logo img').attr('src', 'images/index/logo2.png');// ve nhu cu 
 		 }
 	});
 	$(".top .banner .dropdown a").click(function(){
 		layhref = $(this).attr('href');
 		console.log(layhref);


 	  	$('body,html').animate({scrollTop:$(layhref).offset().top});
 	  	return false ; 
 	  
 	 })
})  
 