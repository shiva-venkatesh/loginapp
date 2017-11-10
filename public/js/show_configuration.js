$.get('/configuration/show.json')
	.done(function(response) {
		console.log(response)
		$('#jump-config').html(response[0].jump);
		$('#shoot-config').html(response[0].shoot);
		$('#slide-config').html(response[0].slide);
		$('#run-config').html(response[0].run);
	})

