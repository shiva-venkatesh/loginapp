(function() {
	const keyCounter = 0
	const keyMappings = {
		jump:'',
		shoot:'',
		slide:'',
		run:''
	}
	const usedKeyValues = []
	let possibleKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']

	function makeAPICall(keyMappings){
		$.post("/configuration/new", keyMappings)
		  .done(function(response) {
				window.location.replace("show");
		  });
	}

	function clearValues() {
		$('.key-preview').each(function(index){
		  $(".key-preview")[index].innerHTML = ''  
		})
	}

	function updatePossibleKeyValues(keyName){
		possibleKeyValues.splice(possibleKeyValues.indexOf(keyName.toUpperCase()), 1);
		possibleKeyValues.splice(possibleKeyValues.indexOf(keyName.toLowerCase()), 1);
	}

	document.addEventListener('keyup', (event) => {
	  const keyName = event.key
	  const keyCode = event.keyCode

	  if(possibleKeyValues.includes(keyName)) {
		  $(".key-preview")[0].innerHTML = keyName.toUpperCase()
		  $(".key-preview")[1].innerHTML = keyName.toUpperCase()
		  $(".key-preview")[2].innerHTML = keyName.toUpperCase()
		  $(".key-preview")[3].innerHTML = keyName.toUpperCase()

		  $('#jump-key').on('click', function(e) {
				keyMappings['jump'] = keyName
				$('.jump-select').fadeOut('slow')
				$('.shoot-select').toggleClass('fadeIn hide')
				clearValues()
			})
		  $('#shoot-key').on('click', function(e) {
				keyMappings['shoot'] = keyName
				$('.shoot-select').fadeOut('slow')
				$('.slide-select').removeClass('hide')
				$('.slide-select').addClass('fadeIn')
				clearValues()
			})
		  $('#slide-key').on('click', function(e) {
				keyMappings['slide'] = keyName
				$('.slide-select').fadeOut('slow')
				$('.run-select').toggleClass('fadeIn hide')
				clearValues()
			})
		  $('#run-key').on('click', function(e) {
				keyMappings['run'] = event.key
				makeAPICall(keyMappings)
				clearValues()
			})
			updatePossibleKeyValues(keyName)
		}
	}, true)
})();
