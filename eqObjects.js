const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed : ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 in object1) {
      
      if (Array.isArray(object1[key1])) {
        if (!eqArrays(object1[key1], object2[key1])) {
          return false;
        }
      }
    }
  } else {return false;}

  return true;

};

const eqArrays = function(array1, array2) {

  if (array1.length === array2.length) 
  {
    for (let i = 0 ; i < array1.length ; i++ ) 
    {
      if (array1[i] !== array2[i]) 
      {
        return false;
      }
    }
  } else {return false;}

  return true;


};
    

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

assertEqual(cd,dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

assertEqual(cd,cd2);