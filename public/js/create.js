const keyCounter = 0
const keyMappings = {
	jump:'',
	shoot:'',
	slide:'',
	run:''
}
const possibleKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']
const usedKeyValues = []

function makeAPICall(keyMappings){
	$.post("/configuration/new", keyMappings)
	  .done(function(response) {
			console.log(response)
			window.location.replace("show");
	  });
}

function clearValues() {
	$('.key-preview').each(function(index){
	  $(".key-preview")[index].innerHTML = ''  
	})
}

document.addEventListener('keyup', (event) => {
  const keyName = event.key
  const keyCode = event.keyCode

  console.log('keyName value : ' + keyName)
	  if(possibleKeyValues.includes(keyName)) {
		  $(".key-preview")[0].innerHTML = keyName.toUpperCase()
		  $(".key-preview")[1].innerHTML = keyName.toUpperCase()
		  $(".key-preview")[2].innerHTML = keyName.toUpperCase()
		  $(".key-preview")[3].innerHTML = keyName.toUpperCase()
	  }
  $('#jump-key').on('click', function(e) {
		console.log('pressed JUMP')
		if(!usedKeyValues.includes(keyName)) {
			keyMappings['jump'] = keyName
			usedKeyValues.push(keyName.toUpperCase(), keyName.toLowerCase())
		}
		else {
			$('#jump-key').prop('disabled', true)
		}
		console.log(keyMappings['jump'])
		$('.jump-select').fadeOut('slow')
		$('.shoot-select').toggleClass('fadeIn hide')
		clearValues()
	})
  $('#shoot-key').on('click', function(e) {
		console.log('pressed SHOOT')
		if(!usedKeyValues.includes(keyName)) {
			keyMappings['shoot'] = keyName
			usedKeyValues.push(keyName.toUpperCase(), keyName.toLowerCase())
		}
		else {
			$('#shoot-key').prop('disabled', true)
		}
		$('.shoot-select').fadeOut('slow')
		$('.slide-select').removeClass('hide')
		$('.slide-select').addClass('fadeIn')
		clearValues()
	})
  $('#slide-key').on('click', function(e) {
		console.log('pressed SLIDE')
		if(!usedKeyValues.includes(keyName)) {
			keyMappings['slide'] = keyName
			usedKeyValues.push(keyName.toUpperCase(), keyName.toLowerCase())
		} else {
			$('#slide-key').prop('disabled', true)
		}
		$('.slide-select').fadeOut('slow')
		$('.run-select').toggleClass('fadeIn hide')
	})
  $('#run-key').on('click', function(e) {
		console.log('pressed RUN')
		if(!usedKeyValues.includes(keyName)) {
			keyMappings['run'] = keyName
			usedKeyValues.push(keyName.toUpperCase(), keyName.toLowerCase())
		} else {
			$('#run-key').prop('disabled', true)
		}
		makeAPICall(keyMappings)
	})
}, false)
