// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
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
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
