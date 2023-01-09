

// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/', 
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
//Welcome alert
//alert("Welcome to the Random Password Generator!");
//User specifies how many characters they would like in their password 
//let myCharactersAnswer = prompt("How many characters would you like your password to be (please choose a number between 10 and 64 characters)?"); 
 // console.log(myCharactersAnswer);
//Alert to let user know they must select at least one character type
//alert("Your password must contain at least one character type");
//Asking user to confirm if they would like to add special characters
//let doYouSpecialCharacters = confirm("Would you like to add special characters?");
//console.log(doYouSpecialCharacters);
// Asking user to confirm if they would like to add numeric characters
//let doYouNumericCharacters = confirm("Would you like to add numeric characters?")
//console.log(doYouNumericCharacters);
// Asking user to confirm if they would like to add lowercase characters
//let doYouLowerCasedCharacters = confirm("Would you like to add lowercase characters?");
//console.log(doYouLowerCasedCharacters);
// Asking user to confirm if they would like to add uppercase characters
//let doYouUpperCasedCharacters = confirm("Would you like to add uppercase characters?");
//console.log(doYouUpperCasedCharacters)
//Alert user to press the red button to generate their password
//alert("Click the red button to generate your password")
//function getPasswordOptions() {
 
  // This is created from user entering how many characters they want in the password from the prompt
  

// Function for getting a random element from an array
function getRandom(arr) {
  let randomCharacterIndex = Math.floor(Math.random()*arr.length); 
  let randomCharacter = arr[randomCharacterIndex];
return randomCharacter;
console.log(randomCharacter)
}


// Function to generate password with user input
function generatePassword() {
let password 

 ///let password = "";
  ///for (let i = 0; i <= myCharacters; i++) {

 // }
  ///for (let i = 0; (i <= 64)+10; i++) {
    //password where users select all characters and numbers
//return password += (randomSpecialCharacter + randomNumber + randomLowerCasedCharacter + randomUpperCasedCharacter)*answer
  //}
  /// password += [randomSpecialCharacter, randomNumber, randomLowerCasedCharacter, randomUpperCasedCharacter]*answer;
  /// return password
  /// console.log(password)
  ///}
  //password where users only selects lowercase characters
    //let password2 = lowerCasedCharacters;
  //password where users only selects uppercase characters
    // let password3 = upperCasedCharacters;
  //password where user only selects special characters
    // let password4 = specialCharacters;
  //password where user selects lowercase and uppercase characters
    // let password5 = lowerCasedCharacters.concat(upperCasedCharacters);
  //password where user selects lowercase and numeric characters
    // let password6 = lowerCasedCharacters.concat(numericCharacters);
  //password where user selects lowercase and special characters
    // let password7 = lowerCasedCharacters.concat(specialCharacters);
  //password where user selects uppercase and numeric characters
   // let password8 = upperCasedCharacters.concat(numericCharacters);
  //password where user selects uppercase and special characters
    //let password9 = upperCasedCharacters.concat(specialCharacters);
  //password where user selects lowercase, uppercase and numeric characters
    //let password10 = lowerCasedCharacters.concat(upperCasedCharacters,numericCharacters);
  //password where user selects lowercase, uppercase and special characters
  //let password11 = lowerCasedCharacters.concat(upperCasedCharacters,specialCharacters);
  //password where user selects lowercase, numeric and special characters
    //let password12 = lowerCasedCharacters.concat(numericCharacters,specialCharacters);
  //password where user selects uppercase, numeric and special characters
 // letpassword13 = upperCasedCharacters.concat(numericCharacters,specialCharacters);
  //void if user doesnts select a character type 
  // if user 'cancels - false' all characters types THEN return "Please try again and ensure you select a character type"
  


// Get references to the #generate element
///let generateBtn = document.querySelector('#generate');

// Write password to the #password input
///function writePassword() {
  ///let password = generatePassword();
 /// let passwordText = document.querySelector('#password');

 ///passwordText.value = password;


// Add event listener to generate button
///generateBtn.addEventListener('click', writePassword);
///}
