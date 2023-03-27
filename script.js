// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()";
var passwordLength = "";

function generatePassword() {
  var userPassword = "";
  var options = "";
  console.log("start");
  var passwordLength = prompt("Enter password length", "8-128");
  if (passwordLength < 8 || passwordLength > 128);
  var includeLowercase = confirm("Include lowercase characters?");
  console.log(options);
  if (includeLowercase === true) {
    options = options.concat(lowercase);
  };
  console.log(options);
  var includeUppercase = confirm("Include uppercase characters?");
  if (includeUppercase === true) {
    options = options.concat(uppercase);
  }
  console.log(options);
  var includeNumeric = confirm("Include numeric characters?");
  if (includeNumeric === true) {
    options = options.concat(numeric);
  }
  console.log(options);
  var includeSpecial = confirm("Include special characters?");
  if (includeSpecial === true) {
    options = options.concat(special);
  }
  console.log(options);

for (let i = 0; i < passwordLength; i++) {
  userPassword += options.charAt(Math.floor(Math.random() * passwordLength));
  console.log(userPassword);
}

  return userPassword;
}

// Write password to the #password input
function writePassword() {
  console.log("hello");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

