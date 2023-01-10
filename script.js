

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


let passwordLength = 0;
let userChoice = [];
let result = "";


// function getPasswordOptions() {
 
//}
  

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
// while loop to only run if conditions are met
function generatePassword() {
  while (passwordLength < 10 || passwordLength > 64 || passwordLength === "" || isNaN (passwordLength)){
    passwordLength = prompt ("How many characters would you like your password to be (please choose a number between 10 and 64 characters)?");
  }
  // confirm messages to build and generate user choice characters
  const doYouSpecialCharacters = confirm("Would you like to add special characters?");
  const doYouNumericCharacters = confirm("Would you like to add numeric characters?");
  const doYouLowerCasedCharacters = confirm("Would you like to add lowercase characters?");
  const doYouUpperCasedCharacters = confirm("Would you like to add uppercase characters?");
  
  // if statements to add characters to user choice if they are true (selected as OK)
if (doYouSpecialCharacters === true) {
  userChoice = userChoice.concat (specialCharacters)
}
if (doYouNumericCharacters === true) {
  userChoice = userChoice.concat (numericCharacters)
}
if (doYouLowerCasedCharacters === true) {
  userChoice = userChoice.concat (lowerCasedCharacters)
}
if (doYouUpperCasedCharacters === true) {
  userChoice = userChoice.concat (upperCasedCharacters)
}
// if statement to show alert if all character confirms return as false (or cancel). URL will then refresh.
if (doYouSpecialCharacters === false && doYouNumericCharacters === false && doYouLowerCasedCharacters === false && doYouUpperCasedCharacters === false) {
  alert("Please try again and ensure you select at least one character type")
  window.location.reload()
}
// for loop to generate random selection from the arrays and totalling to the result string
console.log(userChoice);
for(let i = 0; i < parseInt(passwordLength); i++) {
  result += userChoice [Math.floor(Math.random()*userChoice.length)]
  console.log(result);
}
return result
 };

  


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
let password = generatePassword();
console.log(password);
 let passwordText = document.querySelector('#password');

  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
