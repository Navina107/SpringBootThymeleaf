jQuery(document).ready(function($) {
	$(".clickable-row").click(function() {
		window.location = $(this).data("href");
	});
	$('#example').DataTable( {
		"order": [[ 4, "desc" ]],
		"paging":   false,
		"ordering": false,
		"info":     false,
		"filter":     false,
		responsive: true,
		columnDefs: [
		             { responsivePriority: 1, targets: 0 },
		             { responsivePriority: 2, targets: 5 },
		             { responsivePriority: 3, targets: 4 },
		             { responsivePriority: 4, targets: 1 }
		             ]
	} );
	$('#trimsProdOrderChk').DataTable( {
		"paging":   false,
		"ordering": false,
		"filter":     false,
		"info":     false
	} );
	$('#threadsProdOrderChk').DataTable( {
		"paging":   false,
		"ordering": false,
		"filter":     false,
		"info":     false
	} );
	$('#manaulOrderEntryTable').DataTable( {
		"paging":   false,
		"ordering": false,
		"filter":     false,
		"info":     false
	} );
	$('#buyer').change(function(){
		if($('#buyer option:selected').text() == "Add New Buyer"){
			$('#newBuyerName').show();
		}
		else{
			$('#newBuyerName').hide();
		}
	})
	$('#buyingHouse').change(function(){
		if($('#buyingHouse option:selected').text() == "Add New Buying House"){
			$('#newBuyingHouse').show();
		}
		else{
			$('#newBuyingHouse').hide();
		}
	})
	$( "#calendar0" ).datepicker();  
	$( "#calendar1" ).datepicker(); 
	$( "#calendar2" ).datepicker();   
	$( "#calendar3" ).datepicker();   
	$( "#calendar4" ).datepicker();   
	$( "#calendar5" ).datepicker(); 
	$( "#calendar6" ).datepicker();    
	$('#signin').click(function(event){
		event.preventDefault();
		var username=$('#userName').val();
		var password=$('#password').val();

		if(username=="")
		{
			$(".error-username").css("display", "block");
		}
		if(password=="")
		{
			$(".error-password").css("display", "block");
		}
		if(username!=""&& password!="" )
		{

			$(".error-username").css("display", "none");
			$(".error-password").css("display", "none");

		}
	});

});
