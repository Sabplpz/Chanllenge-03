// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function used to generate the random password
function generatePassword() {

  // Arrays to include certain characters
  var lowerAbc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperAbc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var specialCh = ["!","@","#","$","%","&","*",",",".","-","_","/","(",")","[","]","{","}"];

  // This si to ask the user how long should their password be.
  var passLength = prompt("How long should the password be? ");

  //While they choose a number under 8 or over 128 the question will continue to be asked
  while ( passLength < 8 || passLength > 128){
    alert("Please choose between 8 and 128 characters.");
    passLength = prompt("How long should the password be? ");
  }


  // Questions to choose the characters wanted for the password
  var valid = false;

  while (!valid) {
    var lowCaseYoN = confirm("Do you want lower case characters in your password?");
    var upCaseYoN = confirm("Do you want upper case characters in your password?");
    var numYoN = confirm("Do you want numerical characters in your password?");
    var spcChYoN = confirm("Do you want special characters in your password?");

    // If they confrim at least one of the ones above the while loop will finish
    if (lowCaseYoN == true || upCaseYoN == true || numYoN == true || spcChYoN == true) {
      valid = true;
    } else {
      // If they don't choose at leats one the questions will repeat again
      alert("Please make sure to choose at least 1.");
    }
  }

  // If they chose to not have either of the above, the following code will dletee it from their password
  if (lowCaseYoN == false){
    lowerAbc = [];
  } 
  if (upCaseYoN == false) {
    upperAbc = [];
  }
  if (numYoN == false) {
    numbers = [];
  }
  if (spcChYoN == false) {
    specialCh = [];
  }

  // This will be the array of all the characters they chos eto have
  var password = lowerAbc.concat(upperAbc, numbers, specialCh);

  // The following code will create a randomized array with the characters and length they want
  var randoPass = "";
  for ( var i = 0; i < passLength; i++) {
    randoPass += password[Math.floor(Math.random() * password.length)];
  }
  
  // This will return the password generated for the user
  return randoPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
