document.addEventListener('keyup', (event) => {
  const keyName = event.key
  const keyCode = event.keyCode
  const availableKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']
  const keyMappings = localStorage.getItem('keyMappings')

  console.log('keyName value : ' + keyName)
  if(availableKeyValues.includes(keyName)) {
		debugger
		keyMappings['jump'] = keyName
		console.log('Your key mapping is : ' + keyMappings['jump'])
		localStorage.setItem('keyMappings', keyMappings)
		console.log('Your LS key mapping is : ' + window.localStorage.keyMappings['jump'])
	  $("#jumpKey")[0].innerHTML = keyName.toUpperCase()
  }
}, false)
