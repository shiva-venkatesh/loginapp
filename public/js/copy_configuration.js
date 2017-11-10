function copyConfiguration(dickMove) {
	var selectedOption = $('#select-conf').find(":selected").text();
	var dataObj = { 
		selectedOption: selectedOption
	}
	$.post('/configuration/copy', dataObj)
	  .done(function(response) {
			window.location.replace("show");
	  });
	alert('You have successfully copied the key configuration')
}