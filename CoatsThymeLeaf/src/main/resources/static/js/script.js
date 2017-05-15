
var $ = jQuery;
$(document).ready(function() {
    
    $.ajax({
        type : "GET",
        url : "http://localhost:8090/login",
        success: function(data){
        	$('.reponseTemplate').append(data);
        },
        error : function(e) {
           
        }
    }); 
});