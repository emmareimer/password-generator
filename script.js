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
  // GeneratePassword will return the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }


function generatePassword() {
    // User inputs length of password
    var passwordLength = prompt ("Length of password? Between 8-128 digits.")

    // Empty array for enabled options that user chooses
    var enabledOptions = []
    // Empty string to pluck random characters from to the length of chosen Passwordlength
    var passwordString = ""
     
    // or user cancels
    if (passwordLength === null) { 
      // function ends
      return; 
    }

    // If passwordLength is too short or too long
    else if (passwordLength < 8 || passwordLength > 128) {
      // confirm error message
      var lengthInvalid = confirm ("You have chosen a password that is too short or too long. \nPlease try again.")
    }

    // If user chooses ok on error message, back to beginning of function    
    if (lengthInvalid === true) {
      generatePassword();
    }

    // or if user selects cancel
    else if (lengthInvalid === false) {
      // function ends
      return; 
    } 

    //User chooses to include lowercase letters
    var lowercase = confirm ("Would you like to include lowercase letters? Choose 'Ok' for yes or 'Cancel' for no.")
    if (lowercase) {
      enabledOptions.push("lowercase");
    }

    // User chooses to include uppercase letters
    var uppercase = confirm ("Would you like to include uppercase letters? Choose 'Ok' for yes or 'Cancel' for no.")
    if (uppercase) {
      enabledOptions.push("uppercase");
    }

    // User chooses to include numbers
    var number = confirm ("Would you like to include numbers? Choose 'Ok' for yes or 'Cancel' for no.")
    if (number) {
      enabledOptions.push("number");
    }

    //User chooses to include special characters
    var symbol = confirm ("Would you like to include special characters? Choose 'Ok' for yes or 'Cancel' for no.")
    if (symbol) {
      enabledOptions.push("symbol");
    }

    // Error if no character types chosen
    if (!enabledOptions.length) {
      var confirmError = confirm ("Error: You must choose to include at least one character type.") 
    }
    
    // User confirms error, function begins again
    if (confirmError){
      generatePassword (); 
    }
    

    for (let i = 0; i < passwordLength; i++) {
      // Shuffle enabledOptions to the passwordLength
      var optionIndex = Math.floor(Math.random() * enabledOptions.length)
      // Select one random array from optionIndex
      var optionKey = enabledOptions[optionIndex] 
      // Shuffle characters within the optionKey
      var characterIndex = Math.floor(Math.random() * options[optionKey].length)
      // Genereate a random character from the numerical value that corresponds with a character from the options
      var randomCharacter = options[optionKey][characterIndex]

      // Add randomCharacter to the end of passwordString
      passwordString += randomCharacter
    }

    // Return the generated password as the output
    console.log(enabledOptions)
    return passwordString;  
    
  } // End of generatePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
