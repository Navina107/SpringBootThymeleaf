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
	id : 4,
	text : 'wontfix'
} ]; 

$(".js-example-basic-multiple").select2({
	data : data,
	minimumInputLength : 3
});


$(".js-ajax-example").select2({
	ajax: {
		type: 'get',
		url: 'https://api.github.com/users/mralexgray/repos',
		dataType: 'json',
		processResults: function (data) {
			return {
				results: $.map(data, function(obj) {
					return { id: obj.name, text: obj.name };
				})

			};
		},
		minimumInputLength : 3,
		cache: true
	},
	minimumInputLength : 3
});

/*function matchStart (term, text) {
	if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
		return true;
	}

	return false;
}

$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
	  $(".js-ajax-example").select2({
	    matcher: oldMatcher(matchStart)
	  })
	});*/