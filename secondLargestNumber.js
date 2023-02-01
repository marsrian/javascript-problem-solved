// Answer: True(checked)

function secondLargest(numbers){
    let first = -1 , second = -1;
    for(let i = 0; i <= numbers.length-1; i++){
        if(numbers[i] > first){
            second = first;
            first = numbers[i];
        }
        else if( numbers[i] > second && numbers[i] != first){
            second = numbers[i];
        }
    }
    return second;
}
let numbers = [12, 35, 1, 10, 34, 1];
const findSecondLargestNumber =  secondLargest(numbers);
console.log(findSecondLargestNumber);