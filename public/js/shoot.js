document.addEventListener('keyup', (event) => {
  const keyName = event.key
  const keyCode = event.keyCode
  const availableKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']
  const keyMappings = localStorage.getItem('keyMappings')

  console.log('keyName value : ' + keyName)
  if(availableKeyValues.includes(keyName)) {
    debugger
		keyMappings['shoot'] = keyName
		console.log('Your key mapping is : ' + keyMappings['shoot'])
    localStorage.setItem('keyMappings', keyMappings)
	  $("#shootKey")[0].innerHTML = keyName.toUpperCase()
  }
}, false)
