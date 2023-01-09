

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
///let randomSpecialCharacter = Math.floor(Math.random()*specialCharacters.length);

//specialCharacters[randomSpecialCharacter];

//console.log("This is a random special character" + randomSpecialCharacter);

///let randomIndexSpecialCharacter = Math.floor(Math.random()*specialCharacters.length);

///specialCharacters[randomIndexSpecialCharacter];
///console.log(randomIndexSpecialCharacter);


// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Function expression to generate a random number
///let randomNumber = Math.floor(Math.random()*numericCharacters.length);
///numericCharacters[randomNumber];
///console.log("This is a random number" +randomNumber);

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
///let randomLowerCasedCharacter = Math.floor(Math.random()*lowerCasedCharacters.length);

///lowerCasedCharacters[randomLowerCasedCharacter];

///console.log("This is a random lower cased character" + randomLowerCasedCharacter);

///let randomLowerCasedIndex = Math.floor(Math.random()*lowerCasedCharacters.length);

///lowerCasedCharacters[randomLowerCasedIndex];

///console.log(randomLowerCasedIndex);

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

///let randomUpperCasedCharacter = Math.floor(Math.random()*upperCasedCharacters.length);
///upperCasedCharacters[randomUpperCasedCharacter];
///console.log("This is a random uppercased character" +randomUpperCasedCharacter);


// Function to prompt user for password options
function getPasswordOptions() {
  alert("Welcome to the Random Password Generator!");
}
  // This is created from user entering how many characters they want in the password from the prompt
  let myCharacters = 0;
  let answer = prompt("How many characters would you like your password to be (please choose a number between 10 and 64 characters)?"); 
  console.log(answer);
  if (answer = true) {
  prompt ("Would you like lowercase characters as part of your password?")
}

// Function for getting a random element from an array


// Function to generate password with user input
//function generatePassword() {

 ///let password = "";
  ///for (let i = 0; i <= myCharacters; i++) {

 // }
  ///for (let i = 0; (i <= 64)+10; i++) {
    //password where users select all characters and numbers
//return password += (randomSpecialCharacter + randomNumber + randomLowerCasedCharacter + randomUpperCasedCharacter)*answer
  }
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
