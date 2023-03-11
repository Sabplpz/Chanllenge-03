// Assignment Code
var generateBtn = document.querySelector("#generate");
// Global arrays to include certain characters
var lowerAbc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperAbc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCh = ["!","@","#","$","%","&","*",",",".","-","_"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passLength = prompt("How long should the password be? ");

  while ( passLength < 8 || passLength > 128){
    alert("Please choose between 8 and 128 characters.");
    passLength = prompt("How long should the password be? ");
  }

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
