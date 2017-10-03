$(document).ready(function () {
	
	// show empty cart
	$('#shop-cart').on('click', function () {
		var cart_empty = $('.cart-empty');
		var cart_item = $('.cart-item');

			$('.cart-empty').toggle();

			$('.cart-item').toggle();
	});

	// show order popup

	$('#btn-add-to-cart').on('click', function(){

		// Add Item to popup order
		// var order
		var order_image = $('#btn-add-to-cart').attr("data-image");
		var order_name = $('#btn-add-to-cart').attr("data-name");
		var order_price = $('#btn-add-to-cart').attr("data-price");
		//add image to order popup
		$("#order_image").attr('src', order_image);
		$("#order_name").html(order_name);
		$("#order_price").html(order_price);

		//show loading
		$('.dropdown-toggle').css({"background-color":"#B2DFDB", "color":"#B2DFDB"});
		$('#loading').fadeIn();
		// timeout
		 setTimeout(function() { 
		 	
		  	$('.dropdown-toggle').css({"background-color":"#FFFFFF", "color": "#16a085"});
		  	$('#loading').fadeOut();
		 }, 500); 	

		//show popup order
		$('.your-order-popup').animate({"margin-left":"10px", "opacity":"1"}, 500);
		  // timeout 
		  setTimeout(function() { 

        	$('.your-order-popup').animate({"margin-left":"-50%", "opacity":"0"}, 500); 
 			
 			// add item and price to basket button
			var basket_qty = +($("#basket_qty").html()) + 1;
	  		$("#basket_qty").html(basket_qty);

	  		//total price in basket
	  		var Qty = Number($("#pro_input_qty").val());
	  		var Pro_price = Number($('#pro_price').val());
	  		var total =0;
	  		total = (Pro_price * Qty)+'.00';

	  		$("#basket_price").each(function() { 
				 $('#basket_price').html(total);
			});
	  		
 			}, 1500);

		//add product to dropdown panel
		var item_order_quantity = Number($("#pro_input_qty").val());
		$("#item_order_images").attr('src', order_image);
		$("#item_order_name").html(order_name);
		$("#item_order_price").html(order_price);
		$(".item-order-quantity").html(item_order_quantity);


		// hidden panel cart dropdown
		$('.cart-empty').addClass('hidden');
		$('.cart-item').removeClass('hidden');
	});
	
});