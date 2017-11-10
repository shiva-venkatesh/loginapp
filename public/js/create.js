const keyCounter = 0
const keyMappings = {
	jump:'',
	shoot:'',
	slide:'',
	run:''
}
const possibleKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']
const availableKeyValues = []

function makeAPICall(keyMappings){
	console.log('---------')
	console.log('jump ' + keyMappings.jump)
	console.log('shoot ' + keyMappings.shoot)
	console.log('slide ' + keyMappings.slide)
	console.log('run ' + keyMappings.run)
	console.log('---------')	
	debugger
	$.post("/configuration/new", keyMappings)
	  .done(function(response) {
			console.log(response)
			window.location.replace("show");
	  });
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
		keyMappings['jump'] = keyName
		console.log(keyMappings['jump'])
		$('.jump-select').fadeOut('slow')
		$('.shoot-select').toggleClass('fadeIn hide')
	})
  $('#shoot-key').on('click', function(e) {
		console.log('pressed SHOOT')
		keyMappings['shoot'] = keyName
		$('.shoot-select').fadeOut('slow')
		$('.slide-select').removeClass('hide')
		$('.slide-select').addClass('fadeIn')
	})
  $('#slide-key').on('click', function(e) {
		console.log('pressed SLIDE')
		keyMappings['slide'] = keyName
		$('.slide-select').fadeOut('slow')
		$('.run-select').toggleClass('fadeIn hide')
	})
  $('#run-key').on('click', function(e) {
		console.log('pressed RUN')
		keyMappings['run'] = keyName
		makeAPICall(keyMappings)
	})
}, false)
