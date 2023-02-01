// Answer: True(checked)

function findingSmallest ( numbers ) {
    //Write your code here
    //Don't forget to return
    let small =  numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < small){
            small = element;
        }
    }
    return small;
}

const input = [10,33,5,99,6];
const smaller = findingSmallest(input);
console.log(smaller);