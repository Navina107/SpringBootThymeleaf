var data = [ {
	id : 0,
	text : 'enhancement'
}, {
	id : 1,
	text : 'bug'
}, {
	id : 2,
	text : 'duplicate'
}, {
	id : 3,
	text : 'invalid'
}, {
	id : 5,
	text : 'wontfix'
},
{
	id : 6,
	text : 'valid'
},
{
	id : 7,
	text : 'fixitup'
}]; 


function matchStart (term, text) {
	if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
		return true;
	}

	return false;
}

$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
	$(".js-example-basic-multiple").select2({
		matcher: oldMatcher(matchStart)
	})
});

$(".js-example-basic-multiple").select2({
	data : data,
	minimumInputLength: 2
});

jQuery.getJSON('https://api.github.com/users/mralexgray/repos').done(
		function( data ) {

			remoteName = $.map(data, function(item) {
				return { id: item.name, text: item.name }; 
			});

			remoteID = $.map(data, function(item) {
				return { id: item.id, text: item.id }; 
			});

			jQuery('.js-ajax-example').select2({
				placeholder: '',
				allowClear: true,
				minimumInputLength: 2,
				multiple: true,
				data: remoteName,
			});

			jQuery('.js-ajax-remote-data').select2({
				placeholder: '',
				allowClear: true,
				minimumInputLength: 1,
				multiple: true,
				data: remoteID
			});
		}
);
