// Answer true(checked)

function subtraction (num1, num2){
    //write your code here
    //don't forget to write return
    const shopKeeperReturn = num1 - num2;
    return shopKeeperReturn; 
}

const momGiven = 1000;
const applePrice = 400;
const orangePrice = 300;
const totalPrice = applePrice + orangePrice;
const cost = subtraction(momGiven, totalPrice);
console.log(cost);
