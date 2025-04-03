/**
 * // EXERCISE 1: Guess the random number

Create a function guessNumberGame that generates a random number between 1 and 10.

The function should repeatedly prompt the user to guess the number until the correct number is guessed.

Use a while loop to keep asking the user for input until they guess correctly.

Provide feedback if the guess is too high or too low.
/*

// EXERCISE 2: Create an array of random numbers

Create a function generateRandomArray that accepts one argument: length (the length of the array).

Inside the function, use a for loop to generate an array of random numbers between 1 and 100.

Return the array from the function.

*/

/** // EXERCISE 3: Calculate the sum of even numbers in the array

Create a function sumEvenNumbers that accepts an array as an argument.

Use a for loop to iterate through the array and calculate the sum of the even numbers.

Return the sum of the even numbers.*/


function guessNumberGame() {
    let targetNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Target Number : " + targetNumber);
    let guessedNumber;

    while (targetNumber !== guessedNumber) {
        guessedNumber = parseFloat(prompt("Guess a number between 1-10 : "));
        // Check if input is valid number between 1-10
        if (!isNaN(guessedNumber) && guessedNumber > 1 && guessedNumber <= 10) {
            console.log("Target Number : " + targetNumber + " Guessed Number : " + guessedNumber);
            if (targetNumber == guessedNumber) {
                console.log("Yay!!!! You guessed it right!!!");
                break;
            }
            else if (targetNumber <= guessedNumber) {
                console.log("Your guess is a bit high");
                continue;
            }
            else if (targetNumber >= guessedNumber) {
                console.log("Your guess is a bit low");
                continue;
            }
            else {
                continue;
            }
        }
        else {
            console.log("Not a valid input");
        }
    }
}

function generateArray() {
    //console.log(generateRandomArray());
    generateRandomArray();
}
function generateRandomArray() {

    let length = prompt("Enter the length of array : ");
    if (length >= 1) {
        console.log("The length of the random array is : " + length);
        let randomArray = [];
        // Check if input is valid number between 1-100
        if (!isNaN(length) && length >= 1 && length <= 100) {
            for (let i = 1; i <= length; i++) {
                randomArray.unshift(Math.floor(Math.random() * 100) + 1);
            }
            console.log("The random array of " + length + " numbers is : " + randomArray);
            return randomArray;

        } else {
            console.log("Not a valid input");
        }
    }
    else {
        console.log("Please provide a length to generate random array.");
        return -1;
    }
}

function calculateSum(array) {
    let sum = 0;
    array.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

function sumEvenNumbers() {
    let randomArray = [];
    let evenNumbers = [];
    let sum = 0;
    while (randomArray != -1) {
        randomArray = generateRandomArray();
        if (randomArray.length >= 1) {
            randomArray.forEach(element => {
                if (element % 2 == 0) {
                    evenNumbers.push(element);
                }
            });
            if (evenNumbers.length >= 1) {
                console.log("The even numbers in the random array are : " + evenNumbers);
                sum = calculateSum(evenNumbers);
                console.log("The sum of the even numbers is : " + sum);
                return sum;
            }
            else {
                console.log("No even numbers in the array, Try again!");
                sumEvenNumbers();
            }
        }
    }
}

function sum() {
    sumEvenNumbers();
}

function stringProperties() {
    console.log("Basic string manipulation");
    let myString = "   Hello World   ";
    console.log("let myString ='" + myString + "'");
    console.log("length :" + myString.length);
    console.log("at() property : handles negative indices and out-of-range indices ");
    console.log("myString.at(0) :" + myString.at(4));
    console.log("myString.at(-6) :" + myString.at(-6));
    console.log("myString.at(20) :" + myString.at(20));
    console.log("charAt() property : does not handles negative indices and out-of-range indices returns an empty string ");
    console.log("myString.charAt(0) : " + myString.charAt(4));
    console.log("myString.charAt(-6) :" + myString.charAt(-6));
    console.log("myString.charAt(20) :" + myString.charAt(20));
    console.log("slice() and substring() property : extract portions of a string based on start and end indices. slice() handles negative indices more consistently");
    console.log("myString.slice(3, 8) :" + myString.slice(3, 8)); // Output: "Hello"
    console.log("myString.slice(9) :" + myString.slice(9)); // Output: "World"
    console.log("myString.slice(-8) :" + myString.slice(-8)); // Output: "World"
    console.log("myString.slice(7, 5) :" + myString.slice(7, 5)); //output: ""
    console.log("myString.substring(3, 8) :" + myString.substring(3, 8)); // Output: "Hello"
    console.log("myString.substring(9) :" + myString.substring(9)); // Output: "World"
    console.log("myString.substring(-8) :" + myString.substring(-8)); // (treats -8 as 0) Output: "   Hello  World   "
    console.log("myString.substring(7, 5) :" + myString.substring(7, 5)); //(swaps the arguments) Output: "ll"
    console.log("replace(searchValue, replaceValue) property : Only replaces the first occurrence of the searchValue (unless a global regular expression is used).Does not modify the original string; it returns a new string.");
    let str = "Hello World Hello";
    console.log("Before replace()  => str = " + str);
    console.log("str.replace('Hello', 'Goodbye') :" + str.replace("Hello", "Goodbye")); // Output: "Goodbye World Hello"
    console.log("str.replace(/Hello/g, 'Goodbye') :" + str.replace(/Hello/g, "Goodbye")); // Output: "Goodbye World Goodbye" (global replace using regex)
    console.log("After replace()  => str = " + str);
}

function variableDeclarationKeywords() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("var a  : " + a);
    console.log("let b : " + b);
    console.log("const c : " + c);
    console.log("Value of 'a' after defined as number : " + a);
    console.log("Value of 'b' after defined as number : " + b);
    console.log("Value of 'c' after defined as number : " + c);
    function foo() {
        console.log("Value of 'a' inside the function will be UNDEFINED as its not initialized within function : " + a);
        try {
            console.log("Value of 'b' inside the function before initialization gives REFERENCE ERROR as its not initialized within function: " + b);
        } catch (error) {
            console.log("Error :  " + error);
        }
        try {
            console.log("Value of 'c' inside the function : " + c);
        } catch (error) {
            console.log("Error :  " + error);
        }
        var a = "hi a";
        let b = "hello b";
        const c = "hi hello c";
        console.log("Value of 'a' inside the function and defined as string : " + a);
        console.log("Value of 'b' inside the function and defined as string : " + b);
        console.log("Value of 'c' inside the function and defined as string : " + c);
        var a = 100;

        console.log("Value of 'a' inside the function after redeclared as number : " + a);
        // let b = 200;    IF UNCOMMENTED IT SHOWS "Syntax error" AS ITS ALREADY DECLARED
        b = 200;
        console.log("Value of 'b' inside the function after REDECLARING will cause SYNTAX ERROR but reassigning as number works : " + b);
        /* c = 400;       IF UNCOMMENTED IT SHOWS "Uncaught TypeError: Assignment to constant variable."
        console.log("Value of 'c' inside the function after REASSIGNING as number throws TypeError : " + c);*/
        console.log("Value of 'c' inside the function after REASSIGNING as number throws Uncaught TypeError: Assignment to constant variable. ");
    }
    foo();
}