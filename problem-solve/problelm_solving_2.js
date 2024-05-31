// 1.. Problem 
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit
}
// console.log(celsiusToFahrenheit(4))

// 2. Problem

function isEven(num) {
     if(num % 2 == 0){
         return true;
     }
     else{
         return false;
     }
  }
//   console.log(isEven(10))

  // 3. Problem

  function sum(a, b) {
    return a+b;
  }
//   console.log(sum(10,20))

  // 4. Problem

  function findSmallestNum(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
//   console.log(findSmallestNum([1, 2, 3, 4, 5]))

// 5 - Problem

function countVowels(vowels) {
    let count = 0;
    for(let i = 0; i < vowels.length; i++)
        {
            if(vowels[i] === 'A' || vowels[i] === 'E' || vowels[i] ===   'I' || vowels[i] === 'O' || vowels[i] === 'U')
                {
                    count++;
                }
        }
    return count;
  }
//   console.log(countVowels('aeiouAEIOU'))

// 6. Problem

function getFirstElement(arr) {
    return arr[0];
}
//   console.log(getFirstElement([1, 2, 3])); // 1
//   console.log(getFirstElement(["a", "b", "c"])); // "a"

// 7. Problem

function isArrayEmpty(arr) {
    if(arr.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  
//   console.log(isArrayEmpty([])); // true
//   console.log(isArrayEmpty([1, 2, 3])); // false

// 8. Problem
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
  }
  
//   console.log(factorialize(5)); // 120
//   console.log(factorialize(7)); // 5040
  
// 9. Problem

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
//   console.log(reverseString("hello")); // "olleh"
//   console.log(reverseString("world")); // "dlrow"
  

// 10. Problem

function toLowerCase(str) {
    return str.toLowerCase();
  }
  
//   console.log(toLowerCase("HELLO WORLD")); // "hello world"
//   console.log(toLowerCase("JavaScript")); // "javascript"

// 11. Problem
function stringLength(str) {
    return str.length;
  }
  
//   console.log(stringLength("hello")); // 5
//   console.log(stringLength("world")); // 5

// 12. Problem

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
//   console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// 13. Problem
function getLastElement(arr) {
    return arr[arr.length - 1];
    
  }
  
//   console.log(getLastElement([1, 2, 3])); // 3
//   console.log(getLastElement(["a", "b", "c"])); // "c"
  
// 14. Problem
function getFirstCharacter(str) {
    return str.charAt(0);
  }
  
//   console.log(getFirstCharacter("hello")); // "h"
//   console.log(getFirstCharacter("world")); // "w"

// 15. Problem
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  
//   console.log(sumArray([1, 2, 3, 4])); // 10
//   console.log(sumArray([-1, -2, -3, -4])); // -10
//   console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
