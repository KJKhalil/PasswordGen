// Assignment Code
var generateBtn = document.querySelector("#generate");

// These functions in combination with a "for" line down below is what allows the password generator to randomize the characters it is given to work with.

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min * (1 - random) + random * max)
}

function randomItem(list) {
  return list[randomInt(list.length)]
}

// function generatePassword is the main function of the webpage that gives the generate password button its functionality

function generatePassword() {
  
  // This "while" code is what creates the prompt after the generate password button is pushed that asks the user how many characters they would like in their password.
  // If they dont choose anything it will "break" from continuing through with the rest of the code. As well as alert them if they type an invalid number.

  while (true) {

    var userInput = window.prompt("How many characters do you want in your password? Choose 8 - 128.")
  
    if (userInput === null) {
      return
    }
  
    var passLength = parseInt(userInput)
  
    if (isNaN(passLength)) {
      window.alert("Must choose a number.")
    } 
    else if (passLength < 8 || passLength > 128) {
      window.alert("Character amount must be 8 - 128 characters.")
    }
    else {
      break
    } 

  }

  // These variables and if lines are what create the prompts that allow the user to select wether or not they want lowercase, uppercase, numbers, and or symbols in their password.
  // As well as defining what characters in each of the above options that the password generator can use to create the password.
  
  var lowercase = window.confirm("Do you want lowercase letters in your password?")
  var uppercase = window.confirm("Do you want uppercase letters in your password?")
  var numbers = window.confirm("Do you want numbers in your password?")
  var symbols = window.confirm("Do you want symbols in your password?")

  var lowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var uppercaseList = ['A','B','C','D','E','F','G','H','I','J','L','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numbersList = ['0','1','2','3','4','5','6','7','8','9']
  var symbolsList = ['`','~','!','@','#','$',"%",'^','&','*','(',')','-','_','=','+','[','{',']','}','|',';',':','"',',','<','.','>','/','?']

  var characterList = []

  if (lowercase === true) {
    characterList.push(lowercaseList)
  }

  if (uppercase === true) {
    characterList.push(uppercaseList)
  }

  if (numbers === true) {
    characterList.push(numbersList)
  }

  if (symbols === true) {
    characterList.push(symbolsList)
  }

  var generatedPassword = ""
  
  // This "for" line is the line mentioned earlier at the top of this javascript page that help the password generator randomly select characters for the password.

  for (var i = 0; i < passLength; i++) {
    var randomList = randomItem(characterList)
    var randomCharacter= randomItem(randomList)
    generatedPassword += randomCharacter  
  }

  return generatedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
