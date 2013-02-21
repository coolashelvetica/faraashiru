// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	 $(".web").click(function()
   {
   	$(".mobile-collection, .print.collection, .branding-collection, .interior-collection, #quoteContainer").fadeOut(100);
   	$(".web-collection").fadeIn(300);
      $(".web").addClass("active");
      $(".mobile,.branding,.print,.interior").removeClass("active");


   });

	  $(".mobile").click(function()
   {
   	$(".web-collection, .print.collection, .branding-collection, .interior-collection, #quoteContainer").fadeOut(100);
   	$(".mobile-collection").fadeIn(300);
      $(".mobile").addClass("active");
       $(".web,.branding,.print,.interior").removeClass("active");


   });

	  $(".print").click(function()
   {
   	$(".web-collection, .mobile.collection, .branding-collection, .interior-collection, #quoteContainer").fadeOut(100);
   	$(".print-collection").fadeIn(300);
      $(".print").addClass("active");
       $(".mobile,.branding,.web,.interior").removeClass("active");


   });

	  $(".branding").click(function()
   {
   	$(".web-collection, .print.collection, .mobile-collection, .interior-collection, #quoteContainer").fadeOut(200);
   	$(".branding-collection").fadeIn(300);
      $(".branding").addClass("active");
       $(".mobile,.web,.print,.interior").removeClass("active");


   });

	  $(".interior").click(function()
   {
   	$(".web-collection, .print.collection, .branding-collection, .mobile-collection").fadeOut(100);
   	$(".interior-collection").fadeIn(300);
      $(".interior").addClass("active");
       $(".mobile,.branding,.print,.web").removeClass("active");


   });
	 $(".gobutton").click(function(e)
   {
   		e.preventDefault();

   		if($("#name").val() == '')
   		{
   			$(".name-error").show();
   		}
   		else if($(".email").val() == '')
   		{
   			$(".email-error").show();
   		}
   		else if($(".project").val() == '-')
   		{
   			$(".project-error").show();
   		}
   		else if($(".timeframe").val() == '-')
   		{
   			$(".timeframe-error").show();
   		}
   		else if($(".budget").val() == '-')
   		{
   			$(".budget-error").show();
   		}
   		else
   		{
   									var name = $("#name").val();
   									var email = $(".email").val();
   									var project = $(".project").val();
   									var timeframe = $(".timeframe").val();
   									var budget = $(".budget").val();
   									var aboutyou = $(".aboutyou").val();
   									var aboutproject = $(".aboutproject").val();
   									var website = $(".website").val();
						   			var dataTypes = 'name=' +name +'&email=' +email+'&website=' +website+'&project=' +project+'&timeframe=' +timeframe+'&aboutyou=' +aboutyou+'&aboutproject=' +aboutproject;
						   			$.ajax({

						   				type:"POST",
						   				url: "email.php",
						   				data: encodeURI(dataTypes),


						   				 success: function(yourname) { 

						   				 	
						   				 	$(".contactForm").hide();
						   				 	$(".success").show();
						   				 	$(".success").html("<h1>Thanks for the email, " +yourname+ "!</h1><p>I'll get back to your shortly!</p>");

						   				 	}
						   			});
						   			}
   	});


	 $(".xclose").click(function(e)
   {

   		$(".name-error, .budget-error, .timeframe-error, .email-error, .project-error").hide();
   });

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/