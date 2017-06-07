jQuery(document).ready(function($) {
        
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
