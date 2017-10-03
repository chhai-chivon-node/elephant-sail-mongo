$(document).ready(function() {

	$('#btn_plus_qty').on('click', function(){
		
		var newQty = +($("#pro_input_qty").val()) + 1;
  		$("#pro_input_qty").val(newQty);

	});

	$('#btn_minus_qty').on('click', function(){

  		var newQty = +($("#pro_input_qty").val()) - 1;
		  if(newQty < 1)newQty = 1;
		  $("#pro_input_qty").val(newQty);


	});
	
	
});

// Product Detail

$(document).ready(function() {

	$('#btn_detail_plus_qty').on('click', function(){
		
		var newQty = +($("#pro_detail_input_qty").val()) + 1;
  		$("#pro_detail_input_qty").val(newQty);

	});

	$('#btn_detail_minus_qty').on('click', function(){

  		var newQty = +($("#pro_detail_input_qty").val()) - 1;
		  if(newQty < 1)newQty = 1;
		  $("#pro_detail_input_qty").val(newQty);


	});
	
	
});