// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function promptCriteria() {
  prompt("How long do you want your new passowrd to be? Please choose between 8-128 characters.");
  confirm("Would you like to include lowercase characters?");
  confirm("Would you like to include uppercase characters?");
  confirm("Would you like to include numeric characters?");
  confirm("Would you like to include special characters?");
  alert("Generating Password...");
  alert("Your new password is: ");
  return;
};