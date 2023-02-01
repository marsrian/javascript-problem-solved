// Answer True(checked)

function checkTriangle(side1, side2, side3){
    //write your code here
    //don't forget to write return
    if(side1 === side2 && side1 === side3){
        return "No"
    }
    else if(side1 === side2 || side1 === side3){
        return "Yes";
    }
    else if(side2 === side3){
        return  "Yes";
    }
    return "No";
}


const isIsosceles = checkTriangle(9, 8, 9);
console.log(isIsosceles);
const isIsosceles2 = checkTriangle(8, 8, 8);
console.log(isIsosceles2);