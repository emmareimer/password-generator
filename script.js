// Assignment Code

// Assign variables to the global scope
var generateBtn = document.querySelector("#generate");
var options = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbol: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "{", "}", "[", "]"]
};


// Write password to the #password input
function writePassword() {
  // generatePassword will return thePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log (password)
  
  passwordText.value = password;
  }

function generatePassword() {
    // user inputs length of password
    var passwordLength = prompt ("Length of password? Between 8-128 digits.")
  
    // or user cancels
    if (passwordLength === null) { 
      // function ends
      return; 
    }

    // if passwordLength is too short or too long
    else if (passwordLength < 8 || passwordLength > 128) {
      // confirm error message
      var lengthInvalid = confirm ("You have chosen a password that is too short or too long. \nPlease try again.")
    }
    
    if (lengthInvalid === true) {
      generatePassword();
    }

    // or if user selects cancel
    else if (lengthInvalid === false) {
      // end function
      return; 
    } 

    var enabledOptions = []

    //user chooses to include lowercase letters
    var lowercase = confirm ("Would you like to include lowercase letters? Choose 'Ok' for yes or 'Cancel' for no.")
    if (lowercase) {
      enabledOptions.push("lowercase");
    }

    // user chooses to include uppercase letters
    var uppercase = confirm ("Would you like to include uppercase letters? Choose 'Ok' for yes or 'Cancel' for no.")
    if (uppercase) {
      enabledOptions.push("uppercase");
    }

    // user chooses to include numbers
    var number = confirm ("Would you like to include numbers? Choose 'Ok' for yes or 'Cancel' for no.")
    if (number) {
      enabledOptions.push("number");
    }

    //user chooses to include special characters
    var symbol = confirm ("Would you like to include special characters? Choose 'Ok' for yes or 'Cancel' for no.")
    if (symbol) {
      enabledOptions.push("symbol");
    }


    // error if no character types chosen
    if (!enabledOptions.length) {
      var confirmError = confirm ("Error: You must choose to include at least one character type.") 
    }
    
    if (confirmError){
      generatePassword (); 
    }
      
  // initialized blank password to add to it
  var thePassword = "";
  // will start at the first enabled option
  var optionTypeToUsePosition = 0;

  // looping the password as long as the user chose
  for (let i = 0; i < passwordLength; i++) {
    // get the name of the option type from the enabled options
    var optionTypeToUse = enabledOptions[optionTypeToUsePosition];

    // getting random character from the options for the option type that we're working with
    var theCharacter = getRandomOptionTypeCharacter(optionTypeToUse);

    //adds theCharacter to the end of thePassword
    thePassword += theCharacter;

    // resets optionTypeToUsePosition back to first enabled option to choose from options again otherwise go to next enabled option
    if (optionTypeToUsePosition === enabledOptions.length-1) {
      optionTypeToUsePosition = 0;
    } else {
      optionTypeToUsePosition++;
    }
  }

  return thePassword;

}

function getRandomOptionTypeCharacter(optionTypeToUse) {
  // gets the amount of characters available for this option type
  var optionTypeTotal = options[optionTypeToUse].length;
  var randomCharacterPosition = Math.floor(Math.random() * optionTypeTotal);

  // pluck theCharacter from the optionType at the random generated position from above
  var theCharacter = options[optionTypeToUse][randomCharacterPosition];

  return theCharacter;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
