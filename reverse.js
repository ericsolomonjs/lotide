// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

const reverse = function(string) {
  
};


let i = 0 ;
let currentString = '';
let stringSection = '';
let inputString = '';

//while not end of string
while (i < inputString.length) {
  //check for space
  if (inputString[i] === ' ') {
    //assign the argument to a local variable
    stringSection = inputString.slice(0, i);
    //remove the grabbed characters
    currentString = inputString.slice(i+1, inputString.length - i);
    i = 0;
  }

  i++;
}