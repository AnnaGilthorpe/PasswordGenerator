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
// Code to generate a random special character
let randomSpecialCharacter = Math.floor(Math.random*specialCharacters.length)
specialCharacters[randomSpecialCharacter]
console.log(randomSpecialCharacters)


// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Code to generate a random number
let randomNumber = Math.floor(Math.random*numericCharacters.length)
numericCharacters[randomNumber]
console.log(randomNumber)

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
// Code to generate a random lower cased character
let randomLowerCasedCharacter = Math.floor(Math.random*lowerCasedCharacters.length)
lowerCasedCharacters[randomLowerCasedCharacter]
console.log(randomLowerCasedCharacter)

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

// Code to generate random upper cased character
let randomUpperCasedCharacter = Math.floor(Math.random*upperCasedCharacters.length)
upperCasedCharacters[randomUpperCasedCharacter]
console.log(randomUpperCasedCharacter)


// Function to prompt user for password options
function getPasswordOptions() {
alert "What is the length of the password you require?"
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  let password = "";
  for (let i = 0; i < 65; i++) {
password += randomSpecialCharacter + randomNumber + randomLowerCasedCharacter + randomUpperCasedCharacter
  }
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);