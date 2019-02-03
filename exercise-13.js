// Logic Challenge - X dan O

function xo(str) {
    // you can only write your code here!
    var x=str.match(/x/g);
    var o=str.match(/o/g);
    if (x.length === o.length) {
      return true
    } else {
      return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true