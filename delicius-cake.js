// Answer: True(checked)

function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
    //Write your code here
    //Don't forget to return
    if(marksOfJim > marksOfDela && marksOfJim && marksOfChinku){
        return "Jim";
    }
    else if(marksOfDela > marksOfChinku){
        return "Dela";
    }
    return "Chinku"
}


const topper = JimOrDelaOrChinku(84, 99, 77);
console.log(topper);