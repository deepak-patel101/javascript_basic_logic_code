// ------ duplicate elements in a given array-------
const a = [1, 2, 3, 2, 3, 2, 1, 2, 3, 4, 5, 6, 34, 88];
// console.log(a.indexOf(5));  ye us element ka endex no return karta hai "DHYAN de -" yadi element repeat huaa to first wale element ka hi index sho karega
const duplicate = a.filter((ele, index, array) => {
  return array.indexOf(ele) !== index;
});
console.log(a);
console.log(`the dupicate number = ${duplicate}`);
const uniValue = new Set([...duplicate]);

console.log(`the set of duplicate no  = ${[...uniValue]}`);
// yaha pe array.indexOf  se apn array ke ek ek element kaindex nikal rae h fir yadi koi element repeat hua to uska index first element ka index hoga joki loop ke according "index"(filter method wale index ) se match ni hoga aur wo use return kar degaa
console.log("--------// maximum and minimum in array //-----------");

// --------------------------------------------------------------------------------------
// ------ find a maximum and a minium value in a given array-------

const max = a.reduce((previousValue, currentValue) => {
  return previousValue > currentValue ? previousValue : currentValue;
});
const min = a.reduce((previousValue, currentValue) => {
  return previousValue < currentValue ? previousValue : currentValue;
});
console.log(`the maximum value = ${max}`);
console.log(`the minimum value = ${min}`);

// const max1 = Math.max(...a);
// console.log(max1);
// const min1 = Math.min(...a);
// console.log(min1);

// --------------------------------------------------------------------------------------
console.log("--------// delete the maximum and a minium value //-----------");

// ------ find and delete the maximum and a minium value in a given array-------

const max1 = Math.max(...a);
const indexOfMax = a.indexOf(max1);
a.splice(indexOfMax, 1);
console.log(
  `after deleting the maximum value of array ${max1} the array is =[ ${a}]`
);
const min1 = Math.min(...a);
const indexOfMin = a.indexOf(min1);
a.splice(indexOfMin, 1);
console.log(
  `after deleting the minimum value of array ${min1} the array is =[ ${a}]`
);

console.log("----------// find the missing elements //---------------");
// --------------------------------------------------------------------------------------
// ------ find the missing element in a given array-------
// --------------------------------------------------------------------------------------
// console.log(a.indexOf(999)); => outpot = -1 agar element us array me naho to index -1 return karta h

const b = [1, 2, 3, 4, 5, 6, 11, 12, 20];
console.log(`so the new given array  = [${b}]`);
const missingValue = [];
const findMissingValue = (array) => {
  const max = Math.max(...array);
  const min = Math.min(...array);
  // max aur min se ye pata chal jaega ki array kaha tak jara h
  for (let i = min; i < max; i++) {
    if (array.indexOf(i) < 0) {
      // console.log(a.indexOf(999)); => outpot = -1 agar element us array me naho to index -1 return karta h
      missingValue.push(i);
    }
  }
  return console.log(`here are missing numbers = [${missingValue}]`);
};

findMissingValue(b);

console.log("------------// find the even and odd //----------------");
// --------------------------------------------------------------------------------------
// ------ find the even and odd in a given array-------
// --------------------------------------------------------------------------------------

const arrayOfEven = [];
const arrayOfOdd = [];
const evenOdd = (array) => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayOfEven.push(array[i]);
    } else {
      arrayOfOdd.push(array[i]);
    }
  }
  const result = `here is the array of odd = [${arrayOfOdd}]
  here is the array of even = [${arrayOfEven}]`;
  return console.log(result);
};
evenOdd(a);

console.log("-----------// sum of in a given array //-------------");
// --------------------------------------------------------------------------------------
// ------ find the sum of in a given array-------
// --------------------------------------------------------------------------------------

let sumOfTheArray = a.reduce((pre, cur) => {
  return pre + cur;
});
console.log(`so the sum of the givin array = ${sumOfTheArray}`);

// --------------------------------------------------------------------------------------
console.log("");
console.log("------------// find  vowels  //----------------");
// ------ find  vowels in a string-------
// --------------------------------------------------------------------------------------
let string = "hello deepak patel how are you";
const vowels = ["a", "e", "i", "o", "u"];
let vowelsInIt = [];
const findVowels = (string) => {
  let count = 0;
  for (let letters of string.toLowerCase()) {
    if (vowels.includes(letters)) {
      count++;
      vowelsInIt.push(letters);
    }
  }

  const setOfVowels = new Set([...vowelsInIt]);
  console.log(
    `the string is ### ${string} ### and no of vowels in it is = ${count} and thay are ${[
      ...setOfVowels,
    ]}`
  );
};
findVowels(string);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-----------// reverseing an string/// ----------");
// ------ reverseing an string-------
// --------------------------------------------------------------------------------------

const reverseAString = (stringA) => {
  console.log(stringA);
  const stringToArray = stringA.split(""); // ye string ko array me badal dega letter by letter ("") ye he to ("")yadi yaha kucah bhi likha to array banegapar ek hi element ka =.[to kesen hai aap]")
  const arrayReverse = stringToArray.reverse();
  const reverseString = arrayReverse.join("");
  console.log(reverseString);
};
reverseAString("to kesen hain aap");

// --------------------------------------------------------------------------------------
console.log("");
console.log("-----------// PALINDROME //-------------");
// ------ reverseing an string-------
// --------------------------------------------------------------------------------------

const palindrome = (input) => {
  input = input.toLowerCase();
  let reverseString = input.split("").reverse().join("");
  if (input === reverseString) {
    console.log(`yes ${input} is palindrome`);
  } else {
    console.log(`no ${input} not a palindrome`);
  }
};
palindrome("1221");
palindrome("madam");

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// FACTORIAL //-------------");
// ------ FACTORIAL-------
//
let fact = 1;
const factorial = (number) => {
  if (number <= 0) {
    return console.log(`there is no factorial of ${number}`);
  } else {
    for (let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    console.log(`factorial of ${number} is = ${fact}`);
  }
};
factorial(-10);
factorial(0);
factorial(10);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// FACTORS //-------------");
// ------------------ FACTORIAL---------------

const factorsArray = [];
const factors = (number) => {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factorsArray.push(i);
    }
  }
  const result = `here are the factors of ${number} = [${factorsArray}]`;
  return console.log(result);
};
factors(7);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// reverse palindrome using for of //-------------");
// ------------------ reverse and palindrome using for of------------

const reverseFunctionAA = (str) => {
  let reversStr = "";
  for (let char of str) {
    reversStr = char + reversStr;
  }

  if (reversStr == str) {
    console.log(`${str} "its a palindrome"`);
  } else {
    console.log(`${str} "its not a palindrome"`);
  }
};
reverseFunctionAA("12321");

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// reverse number  //-------------");
// ------------------- reverse number-------------------------

const revFunction = (num) => {
  console.log(typeof num, num);
  result = num.toString().split("").reverse().join("");

  result2 = parseInt(num.toString().split("").reverse().join("")); //to convert it again a nomber
  // ab yadi no -ve ho
  if (num < 0) {
    return console.log(typeof result2, result2 * -1);
  }
  return console.log(typeof result2, result2);
};
revFunction(123);
revFunction(-123);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// max char in string //-------------");
console.log("--// any thing related counting char in a string //--");

// -------------------max char in string-------------------------

// to apn ek ojct banating ek ek char ka aur note karinge ki wo char kitni bar repete hora h

const stringForMaxChar = "Hello my name is deepak!";
const charsCount = {};
for (let char of stringForMaxChar) {
  if (!charsCount[char]) {
    charsCount[char] = 1; // dyanamic asainment yadi wo char object me ni ho to add akro aur value 1 do
  } else {
    charsCount[char]++; // yadi char he to uski value +1 kar do
  }
}
console.log(stringForMaxChar, charsCount);
// to run a loop over an array also on string we use "for of"
// but to run a loop over an object we use "for in"

let mostRpChar = "";
let mostRepCharCount = 0;
for (let char in charsCount) {
  if (charsCount[char] > mostRepCharCount) {
    mostRpChar = char;
    mostRepCharCount = charsCount[char];
  }
}
// const result = `most rep char is "${mostRpChar}" comes for ${mostRepCharCount} times`;

// console.log(result);
console.log(
  `most rep char is "${mostRpChar}" comes for ${mostRepCharCount} times`
);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------//FizzBuzz //-------------");

// -------------------fizzBuzz-------------------------

const fizzBuzz = (number) => {
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      if (number % 3 === 0 && number % 5 === 0) {
        console.log("fizzBuzz");
      } else if (number % 3 === 0) {
        console.log("fizz");
      } else if (number % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(":p");
      }
    }
  } else {
    console.log("pleas enter a positive no");
  }
};
fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(50);
fizzBuzz(44);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// array chunking //-------------");

// -------------------array chunking-------------------------
// ex chunk([2,3,4,5,6,7,8],2)
// out [[2,3][4,5][6,7][8]]

const chunk = (array, size) => {
  const chunked = [];
  for (let ele of array) {
    const last = chunked[chunked.length - 1]; //last me apne array save kar diya last wala jo chunked me hoga starting me kuch ni h to last undifinde ho jaega
    // console.log(last);
    if (!last || last.length === size) {
      // yadi last[ [iski baat ho rahi h]   ] hogahi ni hi suruaat me to aage ka task auryadi last[array] ka size givien size kw barabar ho jae to  naya array bana ke data push kar do
      chunked.push([ele]);
    } else {
      last.push(ele);
    }
  }
  console.log(array);
  console.log(chunked);
};
chunk([2, 3, 4, 5, 6, 7, 8], 2);
chunk([2, 3, 4, 5, 4, 5, 6, 7, 8], 3);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// array chunking using slice//-------------");

// -------------------array chunking-------------------------
// ex chunk([2,3,4,5,6,7,8],2)
// out [[2,3][4,5][6,7][8]]

const chunkSlice = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return console.log(array, chunked);
};
chunkSlice([2, 3, 4, 5, 6, 7, 8], 2);

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// anagrams (words wahi ho)//-------------");

// -------------------anagrams-------------------------

const anagrams = (strA, strB) => {
  console.log(`"${strA}" & "${strB}"`);
  strAtoArray = strA.split("").sort();
  strBtoArray = strB.split("").sort();

  let result = false;
  if (strAtoArray.length === strBtoArray.length) {
    for (let i = 0; i < strAtoArray.length; i++) {
      if (strBtoArray[i] === strAtoArray[i]) {
        result = true;
        continue;
      } else {
        result = false;
        break;
      }
    }

    console.log(result ? "its a anagram" : "not a anagram");
  } else {
    console.log("not a anagram");
  }
};

anagrams("deepak patel", "pakdee patel");
anagrams("deepak 212", "pakdee 222");

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// capitalization //-------------");

// -------------------capitalization -------------------------

const capitalization = (str) => {
  console.log(str);
  const capitalized = [];
  for (let word of str.split(" ")) {
    capitalized.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(capitalized.join(" "));
};
capitalization("hello there its me deepak patel");

// --------------------------------------------------------------------------------------
console.log("");
console.log("-------------// capitalization using for loop//-------------");

// -------------------capitalization using for loop-------------------------

const capitalizationTWO = (str) => {
  let capitalized = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i];
    }
  }
  console.log(capitalized);
};
capitalizationTWO("to kese hai aap log");
