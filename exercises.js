// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------



// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];

// window.alert("hi");

function newArray(str, i) {
  var myArray = [];

  for (let j = 1; j <= i ; j++){
    // for (let j = 0; j < i ; j++){
    myArray.push(str);
  }
  return myArray;
}

// console.log(newArray("hi", 3));

// function myFunction(str,i) {
//   const result = [];
//   for (let j = 0; j <i; j++) {
//     result.push(str);
//   }
//   return result;
// }

// *****Another way to solve

const myFunction = function(str, i) {
  return Array.from({length: i}), function() {
    return str;
  });
}
// to call function needs myfunction()
const myFunction() = function(str, i) {
  return Array.from({length: i}), function() {
    return str;
  });
}


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(arr) {
  const result = [ ];
  for (let i=arr.length - 1; i >= 0; i --) {
    result.push(arr[i]);
  }
    return result;
}
// console.log(reverseArray(['k', 'a','t', 'e']));
    // arr.length = 4
    // i = 3   first iteration
    // result = [ 'e', 't', 'a', 'k' ]
// console.log(reverseArray([1,2,3,4,5]));
//The push() method adds one or more elements to the end of an array and returns the new length of the array.


// ******another solution
function reverseArray(arr){
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
}
// The unshift method inserts the given values to the beginning of an array-like object.

// unshift gets added to font of array



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------


function byeFalsy(arr) {
  return arr.filter(function(value){
    if (value){
      return (value);
    }
  });
}
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// refactor using => sytax:

// refactor
function byeFelicia(arr) {
  return arr.filter(value => value);
}
// console.log(byeFelicia([2, 3, 0, NaN, 4, false, 5]));

// ****another solution

function removeFalsyValues(arr) {
  const result = [];
  for(let i=0; i <arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(byeFalsy([2, 3, 0, NaN, 4, false, 5]));

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

// const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
// const obj = Object.fromEntries(arr);
// console.log(obj); // { 0: "a", 1: "b", 2: "c" }


// person[] = arr[]; // {0: ['name', 'kate']}
//   const key = arr[i][0];
//   const value = arr[i][1];


function objCreator(arr) {
  var person = Object.fromEntries(arr);
  for (let i = 0; i < arr.length; i++) {

  }

  return person;
}
//The Object.fromEntries() method transforms a list of key-value pairs into an object.
// console.log(objCreator([['name', 'kate'] , ['age','33'], ['pet', 'Dulce']]));

// ******another solution

function createObj1(arr) {
  const result = {};

  for(let i = 0; i<arr.length; i++) {
    result[arr[i][0]] = arr[[i][1]];

// ******below breaks out the above to make it easier to read, but is the same
    // let arr = arr[i]; // ['name', 'Charlie']
    // let key = nestedArr[0];
    // let value = nestedArray [1];
    //
    // result[key] = value;

    // result ['name'] = 'charlie';
  }
  return result;
}


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


 // USING A SET********

     // Use to remove duplicate elements from the array:

    // const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
    //
    // console.log([...new Set(numbers)])

    // [2, 3, 4, 5, 6, 7, 32]

function removeDuplicates(arr) {

// ****or could do below to write it out
// const set = new Set (arr);
// return [...set];

  return [...new Set(arr)];
}


// ******another solution



function removeDuplicates(arr) {
  const obj = {};

  for(let i=0; i< arr.length; i++) {
    obj [arr[i]] = arr[i];
  }
  return Array.from(Object.values(obj));
}

// *******NEED TO COME BACK TO THIS ONE!!****

// function noDuplicates(arr) {
//   const values = new Set();
//   {
//     return values;
//   }
// }
//
// console.log(noDuplicates([1,2,3,4,5,4,3]));

// function noDuplicates(arr) {
//
//   let chars = [ ];
//   let uniqueChars = [...new Set(chars)];
//   for (let i = 0; i < arr.length; i++) {
//     return uniqueChars;
//   }
// }
//
//
// console.log(noDuplicates([1,2,3,4,5,4,3]));


// function noDuplicates(arr) {
// let myArray = [ ];
// let newArray = Array.from(new Set(myArray));
// for (let i = 0; i < arr.length; i++) {
//   newArray.add(myArray[i])
// }
//   return newArray;
// }
//
//
// console.log(noDuplicates([1,2,3,4,5,4,3]));

// *******NEED TO COME BACK TO THIS ONE!! - this is returning an empty array
// function noDuplicates(){
//   let myArray = [ ];
//   let orderedArray = Array.from(new Set(myArray)); {
//     return orderedArray;
//   }
// }

// console.log(noDuplicates([1,2,3,4,5,4,3]));



// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

//The sort() method sorts the elements of an array in place and returns the sorted array.

function compareArrays (arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort(function(a, b) {
    return a-b;
  });
  arr2.sort(function(a, b){
    return a-b;
  });

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

// Call back function needs to be passed in in order to sort values as numbers and not as strings:

function compareArrays (arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

arr1.sort();
arr2.sort();

  // arr1.sort(function(a, b) {
  //   return a-b;
  // });
  // arr2.sort(function(a, b){
  //   return a-b;
  // });

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}



// ******NEED TO COME BACK TO THIS ONE-IN 1ST ATTEMPT ALL RETURN FALSE, IN LAST ATTEMPT, ALL RETURN TRUE.

// function identicalArrs(arr1, arr2){
//   let array1= [ ];
//   let array2= [ ];
//
//   if (arr1 === arr2) {
//     return true;
//   }
//
// }
//
// // console.log(identicalArrs([1,2,3,4] ,[1,2,3,4]));
// console.log(identicalArrs([1,2,3,4,5] ,[1,2,3,4]));



// function identicalArrs(arr1, arr2){
//   var array1 = [];
//   var array2 = [];
//
//   if(array1.sort().join(',')=== array2.sort().join(',')){
//       return true;
//   }
//   else {
//     return false;
//   }
//
// }
//
// console.log(identicalArrs([1,2,3,4] ,[1,2,3,4]));
// console.log(identicalArrs([1,2,3,4,5] ,[1,2,3,4]));
// console.log(identicalArrs([1,2,3,4] ,[1,2,3,4,4]));
// console.log(identicalArrs([1,2,3,4] ,[1,4,3,2]));







// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
