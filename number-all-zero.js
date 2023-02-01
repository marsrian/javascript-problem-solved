// Answer True(checked)

function countZeros ( binary_num ) {
    //Write your code here
    //Don't forget to return
    let countForZero = 0;
      
    for (let i = 0; i < binary_num.length; i++) {
      if ( binary_num [i] === '0') {
        countForZero++;
      }
    }
    return countForZero;
  }

const count0 = countZeros("10101");
console.log(count0);