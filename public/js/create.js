document.addEventListener('keyup', (event) => {
  const keyName = event.key
  const keyCode = event.keyCode
  const availableKeyValues = ['w', 'W', 'a', 'A', 's', 'S', 'd', 'D']
  const keyMappings = { }

  console.log('keyName value : ' + keyName)
  if(availableKeyValues.includes(keyName)) {
  	
	  $("#jumpKey")[0].innerHTML = keyName.toUpperCase()
  }
}, false)
