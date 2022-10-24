const tail = function(array) {
  let lclTail = [];

  for (let i = 1; i < array.length; i++) {
    lclTail[i - 1] = array[i];
  }
  return lclTail;
};

module.exports = tail;
