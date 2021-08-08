// #1
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

function reverseArray(arr) {
  const result = [ ];
  for (let i=arr.length - 1; i >= 0; i --) {
    result.push(arr[i]);
  }
    return result;
}

//////////// The above was too long...


// # 2
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
  //your awesome code here
}

function number(arr) {
  const result = [];

  arr.forEach(function(item, index){
    result.push(`${index + 1}: ${item}`)
  });

  // second option to solve
//   arr.forEach(function(item, index){
//     result = [`${index + 1}: ${item}`];
//   });
//   return result;
//
//   //third option- creates new array
//   return arr.map(function(item, index){
//     return `${index + 1}: ${item}`;
//   });
//
//   //4th option- mutates the original array
//  arr.forEach(function(item, index, array){
//     array[index] = `${index + 1}: ${item}`;
//   });
//   return arr;
// }



// # 3
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
// We want an array, but not just any old array, an array with contents!
//
// Write a function that produces an array with the numbers 0 to N-1 in it.
//
// For example, the following code will result in an array containing the numbers 0 to 4:
//
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


function arr(N){
  const result = [];

  if(N !== undefined){
    for(let i = 0; i < N; i++){
      result.push(i);
    }
  }
  return result;
}

arr(5) // => [0,1,2,3,4]
arr() // => []

// i < N (if no paramaters are passed in): i < undefined = false
function arr(N){
  const result = [];
    // i < undefined = false
    for(let i = 0; i < N; i++){
      result.push(i);
    }
  return result;
}
//this will return an empty array, because when i < undefined the loop never runs.

// OTHER SOLUTION:

//one liner:
const arr = N => N ? [...Array(N).keys()]: [];

//same as above-
// function declaration:
function arr(N) {
  return N ? [...Array(N).keys()] : [];
}
//if N is true, return: spread operator & keys targets the indexes and spreads them into a new array.
//if N is false, return an empty array.
//implicit return b/c you're not saying return
// you can make all fat arrows have explicit returns, you can't make all have implicit returns.
// the value of "this" in a fat arrow is the outer value- may be global or an event listener, depends where you are when its called.
///////////////////////

// # 4
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
  // can't use const when creating a variable for a string who's value will change. Can use const for empty array, bc values are pushed into array, but array is still the same.
  let result = '';

    for(let i = 0; i < lamps.length; i++) {
      if(drone[i] === '=' || drone[i] === 'T') {
        result += 'o';
      } else {
        result += 'x';
      }

    }

  return result;
}




// # 5
// Get the mean of an array:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// reduce is an array iterator, based on the value that you give it
// arr.reduce is a callback method- so if you pass in an optional argument (starting value), you would add it at the end like you would normally do for a method.
//acc- accumlated value.
// if you don't give I a default starting value, the first time the callback function runs it will grab the first value as the acc value and the second as the i.
//need to reduce array down to a single value
//array.reduce returns a new array, doesn't mutate.

// example array: Test.assertEquals(getAverage([1,2,3,4,5,]),3);


function getAverage(arr) {
  const total = arr.reduce(function(acc, i) {
    return acc + i;
  });
    const average = Math.floor(total / arr.length);

    return average;

    // to refactor w/ a fat arrow:
    // return Math.floor((arr.reduce((acc, i) => acc + i)) / arr.length);
}
















asdf
