// Answer: True(checked)

function findOddSum(arrOfNumbers){
    //write your code here
    //don't forget to write return
    let oddNumbers = [];
    for(let i = 0; i < arrOfNumbers.length; i++){
        const index = i;
        const element = arrOfNumbers[index];
        if(element % 2 === 1){
            oddNumbers.push(element);
        }
    }
    let oddSumResult = 0;
    for(let i = 0; i < oddNumbers.length; i++){
        oddSumResult += oddNumbers[i];
    }
    return oddSumResult;
}

const input = [5, 7, 8, 10, 45, 30];
const findOdd = findOddSum(input);
console.log(findOdd);
