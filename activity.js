let randomNum = Math.floor(Math.random() * (100 - 1) + 1);
let userNumber;
let tries = 1;
let i = 9;

while (tries <= 10){
	userNumber = prompt('Guess a number between 1 and 100: ')
		if(tries == 10 && userNumber != randomNum){ //Check if all tries have been used && randomNumber and userNumber does not match
			alert('Failed! You have reached the maximum number of tries. Thank you for playing!')
			break;
		} else if (userNumber.trim() === ""){ //If nothing was inputted in the prompt
			alert(`Nothing was inputted! Please try again.`)
		} else if (userNumber == randomNum){ //If user successfully guessed the random number
			tries++
			alert(`Congratulations! You have successfully guessed the random number after ${tries-1} tries!`)
			break;
		} else if(userNumber >= randomNum+1){ //If user input is higher than random number
			alert(`${userNumber} is Too high! Please try guessing again. Number of tries left: ${i}`)
			tries++
			i--
		} else if (userNumber <= randomNum-1){ //If user input is lower than random number
			alert(`${userNumber} is Too low! Please try guessing again. Number of tries left: ${i}`)
			tries++
			i--
		} 
	}	