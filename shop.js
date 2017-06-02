 $(function(){
 	$(window).scroll(function(){
 		if($('body').scrollTop() > 100){
 		}
 	})
 	$(".top .banner .dropdown-content a").click(function(){
 		layhref = $(this).attr('href');
 		console.log(layhref);


 	  	$('body,html').animate({scrollTop:$(layhref).offset().top});
 	  	return false ; 
 	  
 	 })
})  
 