
// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  let newString = '';
  let puncArr = ['!','@','#','$','%','^','&','*','(',')',',','.'];
  let editedString = '';
  for (let i = 0; i < array.length; i++) {
    if(array[i] == array.length - 1 || puncArr.includes(array[i+1])){
      newString += array[i]
    }else{
      newString += array[i] + separator
    }
    
    
  }
  editedString = newString.slice(0, -1)
  return editedString;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
