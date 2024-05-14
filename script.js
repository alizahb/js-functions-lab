//Exercise 1

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  console.log('Exercise 1 Results:', maxOfTwoNumbers(3, 9));

  //Exercise 2

const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}
console.log('Exercise 2 Result:', isAdult(21)); 

//Exercise 3

const isCharAVowel = (char) => {
    if (char === 'a') {
    return true;
     } else if (char === 'e') {
        return true; 
    } else if (char === 'i') {
        return true; 
    } else if (char === 'o') {
        return true; 
    } else if (char === 'u') {
        return true;
    } else if (char === 'w') {
        return true;
    } else {
        return false; 
    }    

    }   
console.log('Exercise 3 Result:', isCharAVowel('a'));


//Exercise 4

const generateEmail = (name,domain) => {
    return name + domain;   
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'));

//Exercise 5

const greetUser = (name,time) => {
    return ("Good" + time + "," + name + "!");
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//Exercise 6

const reverseString = (str) => {
    let splitString = str.split('');
    let reverseArray = splitString.reverse('');
    let joinArray = reverseArray.join(''); 
    return joinArray; 
}
console.log('Exercise 6 Result:', reverseString("rockstar"));

//Exercise 7

const checkPalindrome = (str) => {
    let splitString = str.split(''); 
    console.log(splitString); 
    let reverseArray = splitString.reverse(''); 
    let joinArray = reverseArray.join('');
    console.log(joinArray);
   if (str === joinArray) {
    return true;
   } else {
    return false; 
   }
}
console.log('Exercise 7 Result:', checkPalindrome('radar'));

//Exercise 8

const maxOfThree = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3); {
    return max;
    }
}
console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));

//Exercise 9

const calculateTip = (bill, percentage) => {
    percentage = (percentage / 100); {
    return bill * percentage;
    }
}
console.log('Exercise 9 Result:', calculateTip(50, 20)); 

//Exercise 10

const convertTemperature = (temp,scale) => {
    if (scale === 'C') {
        return ((temp * 9/5) + 32);
    } else {
        return ((temp - 32) * 5/9);
    }
}
console.log('Exercise 10 Result:', convertTemperature(32, "C"));

//Exercise 11

const basicCalculator = (num1, num2, str) => {
    if (str === 'subtract') {
        return (num1 - num2);
    }  else if (str === 'add') {
        return (num1 + num2);
    } else if (str === 'multiply') {
        return (num1 * num2);
    } else {
        return (num1 / num2);
        }  
    }    
console.log('Exercise 11 Result:', basicCalculator(11, 5,'multiply'));

//Exercise 12

const calculateGrade = (score) => {
    if (score < 60) {
        return 'F'; 
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 90) {
        return 'A';
    }
    }
console.log('Exercise 12 Result:', calculateGrade(85));

//Exercise 13
    /*username= first 3 letters of firstName, first 3 letters of lastName, 
    and total character count of first and last name combined  */

const createUsername = (firstName, lastName) => { 
const fnArr = firstName; 
const fnNum = fnArr.length;
const firstThreeFn = fnArr.slice(0, 3);
const lnArr = lastName;
const lnNum = lnArr.length; 
const firstThreeLn = lnArr.slice(0, 3); {
return ((firstThreeFn + firstThreeLn) + (fnNum + lnNum));
    }
}
console.log('Exercise 13 Result:', createUsername("Samantha", "Green"));

//Exercise 14
    //should return count of arguments passed to it when asked 

    const numArgs = (...args) => {
        const argsList = []; 
        const count = argsList.push(...args); 
        return argsList.length;
        } 
    

    console.log('Exercise 14 Result:', numArgs(1, 2, 3, 4)); 
    


