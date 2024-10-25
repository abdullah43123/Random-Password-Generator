// // RANDOM PASSWORD GENERATOR

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-_=+[]{};:,.<>?";

var allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

var passwordOne = "";
var passwordTwo = "";
var passwordThree = "";
var passwordFour = "";
var password = "";
var passwordLength = 8;


for(i = 0; i < passwordLength; i++){
    var randomGenerator = Math.floor(Math.random() * allCharacters.length);
    passwordOne = passwordOne + allCharacters[randomGenerator];
}

console.log(passwordOne)



for(i = 0; i < passwordLength; i++){
    var randomGenerator = Math.floor(Math.random() * uppercaseLetters.length);
    passwordTwo = passwordTwo + uppercaseLetters[randomGenerator];
}

console.log(passwordTwo)


for(i = 0; i < passwordLength; i++){
    var randomGenerator = Math.floor(Math.random() * lowercaseLetters.length);
    passwordThree = passwordThree + lowercaseLetters[randomGenerator];
}
    
console.log(passwordThree)


for(i = 0; i < passwordLength; i++){
    var randomGenerator = Math.floor(Math.random() * specialCharacters.length);
    passwordFour = passwordFour + specialCharacters[randomGenerator];
}
console.log(passwordFour)



for(i = 0; i < passwordLength; i++){
    var randomGenerator = Math.floor(Math.random() * numbers.length);
    password = password + numbers[randomGenerator];
}
console.log(password)
    


