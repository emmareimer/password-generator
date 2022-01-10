// Assignment Code

// Assign variables to the global scope
var generateBtn = document.querySelector("#generate");
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolOptions = ["!", "@"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function generatePassword() {
    // user inputs length of password
    var length = prompt ("Length of password? Between 8-128 digits.")
  
    // or user cancels
    if (length === null) { 
      // function ends
      return; 
    }

    // if length is too short or too long
    else if (length < 8 || length > 128) {
      // confirm error message
      var lengthInvalid = confirm ("You have chosen a password that is too short or too long. \nPlease try again.")
      generatePassword();
    }

    // // back to the beginning
    // else if (lengthInvalid === true) {
    // generatePassword (); 
    // }
    
    // // or if user selects cancel
    // else if (lengthInvalid === false) {
    // // end function
    // // return; 
    // } 

    //user confirms length of password
    var confirmLength = confirm ("You have chosen to have a password that is " + length + " digits long. \nPress 'Ok' to continue.")    

    // if users chooses no
    if (confirmLength === false) {
      // back to the beginning
      generatePassword();
    }

    //user chooses to include lowercase letters
    var lowercase = confirm ("Would you like to include lowercase letters? Choose 'Ok' for yes or 'Cancel' for no.")
    // user confirms choice of lowercase letters
    var confirmLowercase = confirm ("You have chosen to include lowercase letters: " + lowercase + ". \nPress 'Ok' to continue.")
    // if users chooses cancel, end the function !! NOT WORKING !!
    if (confirmLowercase === false) {
      generatePassword();
    }

    // user chooses to include uppercase letters
    var uppercase = confirm ("Would you like to include uppercase letters? Choose 'Ok' for yes or 'Cancel' for no.")
    //user confirms choice to include uppercase letters
    var confirmUppercase = confirm ("You have chosen to include uppercase letters: " + uppercase + ". \n Press 'Ok' to continue.")
    // if user chooses cancel, end the function
    if (confirmUppercase === false) {
      generatePassword();
    }
    
    // user chooses to include numbers
    var number = confirm ("Would you like to include numbers? Choose 'Ok' for yes or 'Cancel' for no.")
    // user confirms choice to include numbers
    var confirmNumber = confirm ("You have chosen to include numbers: " + number + ". \n Press 'Ok' to continue.")
    // if user choose to cancel, back to the beginning
    if (confirmNumber === false) {
      generatePassword();
    }
  
    //user chooses to include special characters
    var symbol = confirm ("Would you like to include special charcaters? Choose 'Ok' for yes or 'Cancel' for no.")
    //user confirms choice of symbols
    var confirmSymbol = confirm ("You have chosen to include symbols: " + symbol + ". \n Press 'Ok' to continue.")
    //if user chooses to cancel, back to the beginning
    if (confirmSymbol === false) {
      generatePassword();
    }

    // error if no character types chosen
    if (lowercase == false && uppercase == false && number == false && special == false) {
    var confirmError = confirm ("Error: You must choose to include at least one character type.") }
  
    // if user chooses, cancel, back to the beginning
    if (confirmError === false) {
      generatePassword;
    }

    else {
      //enter in function for generating the actual pw
    }
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
