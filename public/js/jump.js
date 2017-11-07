document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  const jumpKeyValue = ''

  switch(keyName) {
  	case 'w':
	    alert('W key was released');
	  	break;
  	case 'W':
	    alert('W key was released');	    
	  	break;
  	case 'a':
	    alert('A key was released');	    
	  	break;	    
  	case 'A':
	    alert('A key was released');	    
	  	break;
  	case 's':
	    alert('S key was released');
	  	break;
  	case 'S':
	    alert('S key was released');
	  	break;
  	case 'd':
	    alert('D key was released');
	  	break;
  	case 'D':
	    alert('D key was released');	    
	  	break;
  }

}, false);
