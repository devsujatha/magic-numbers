// Get an integer (whole number) from the user
var userInput = prompt("Choose any number:");

// Convert the input to an integer
var chosenNumber = parseInt(userInput);

// Step 1: Add 9 to the chosen number
var step1Result = chosenNumber + 9;

// Step 2: Multiply the result by 2
var step2Result = step1Result * 2;

// Step 3: Subtract 4
var step3Result = step2Result - 4;

// Step 4: Divide the result by 2
var step4Result = step3Result / 2;

// Step 5: Subtract the original number
var finalResult = step4Result - chosenNumber;

// Display the final result using alert()
alert("Your magic number is: " + finalResult);

// Display the output using document.write() with HTML formatting
document.write("<ul>");
document.write("<li>I added 9 to " + chosenNumber + ". The new number is " + step1Result + "</li>");
document.write("<li>I multiplied " + step1Result + " by 2. The new number is " + step2Result + "</li>");
document.write("<li>I substracted 4 from " + step2Result + ". The new number is " + step3Result + "</li>");
document.write("<li>I divided " + step3Result + " by 2. The new number is " + step4Result + "</li>");
document.write("<li>I subtracted your original number of " + chosenNumber + " from " + step4Result +  "</li>");
document.write("</ul>");

document.write("<h2>Your final number is: " + finalResult + "</h2>");
document.write('<h1>Thanks for playing. <a href="#">Play again?</a></h1>');