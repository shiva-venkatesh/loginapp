function copyConfiguration(dickMove) {
	var selectedOption = $('#select-conf').find(":selected").text();
	var dataObj = { 
		selectedOption: selectedOption
	}
	$.post('/configuration/copy', dataObj)
	  .done(function(response) {
			console.log(response)
			// window.location.replace("show");
	  });
	alert(selectedOption)
}