// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()";
var passwordLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter password length", "8-128");
  var includeLowercase = confirm("Include lowercase characters?");
  if (includeLowercase === true) alert("Including lowercase characters");
  else alert("No lowercase characters will be included");
  var includeUppercase = confirm("Include uppercase characters?");
  if (includeUppercase === true) alert("Including uppercase characters");
  else alert("No uppercase characters will be included");
  var includeNumeric = confirm("Include numeric characters?");
  if (includeNumeric === true) alert("Including numeric characters");
  else alert("No numeric characters will be included");
  var includeSpecial = confirm("Include special characters?");
  if (includeSpecial === true) alert("Including special characters");
  else alert("No special characters will be included");
  return;
}
