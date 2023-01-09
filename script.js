

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
// Function expression to generate a random special character
let randomSpecialCharacter = Math.floor(Math.random*specialCharacters.length);
specialCharacters[randomSpecialCharacter];
console.log("This is a random special character" + randomSpecialCharacter);


// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Function expression to generate a random number
let randomNumber = Math.floor(Math.random*numericCharacters.length);
numericCharacters[randomNumber];
console.log("This is a random number" +randomNumber);

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
// Function expression to generate a random lower cased character
let randomLowerCasedCharacter = Math.floor(Math.random*lowerCasedCharacters.length);
lowerCasedCharacters[randomLowerCasedCharacter];
console.log("This is a random lower cased character" + randomLowerCasedCharacter);

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

// Function expression to generate random upper cased character

let randomUpperCasedCharacter = Math.floor(Math.random*upperCasedCharacters.length)
upperCasedCharacters[randomUpperCasedCharacter]
console.log("This is a random uppercased character" +randomUpperCasedCharacter)


// Function to prompt user for password options
function getPasswordOptions() {
  let answer = prompt("How many characters would you like your password to be (please choose a number between 10 and 64 characters)?"); 
  console.log(answer);
  if (answer = true) {
  prompt ("Would you like lowercase characters as part of your password?")
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(math.random()*arr.length)]

};

// Function to generate password with user input
function generatePassword() {

  let password = "";
  for (let i = 0; (i <= 64)+10; i++) {
    //password where users select all characters and numbers
return password += (randomSpecialCharacter + randomNumber + randomLowerCasedCharacter + randomUpperCasedCharacter)*answer
  }
  //password where users only selects lowercase characters
  //password where users only selects uppercase characters
  //password where user only selects special characters
  //password where user selects lowercase and uppercase characters
  //password where user selects lowercase and numerica characters
  //password where user selects lowercase and special characters
  //password where user selects uppercase and numerci characters
  //password where user selects uppercase and special characters
  //password where user selects lowercase, uppercase and numeric characters
  //password where user selects lowercase, uppercase and special characters
  //password where user selects lowercase, numeric and special characters
  //password where user selects uppercase, numeric and special characters
  //void if user doesnts select a character type 
  
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
}
