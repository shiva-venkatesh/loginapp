document.addEventListener('keyup', (event) => {
  const keyName = event.key
  const keyCode = event.keyCode
  const availableKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']
  const keyMappings = { }

  console.log('keyName value : ' + keyName)
  if(availableKeyValues.includes(keyName)) {
		keyMappings['jump'] = keyName
		console.log('Your key mapping is : ' + keyMappings['jump'])
	  $("#jumpKey")[0].innerHTML = keyName.toUpperCase()
  }
}, false)
