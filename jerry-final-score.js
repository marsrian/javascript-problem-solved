// Answer: True(checked)

function finalScore ( scores ) {
    //Write your code here
    //Don't forget to return
    let final = 0;
    for(let i = 0; i < scores.length; i++){
        final += scores[i];
    }
    return final;
}

const input = [20, 13, 37];
const totalScore = finalScore(input);
console.log(totalScore);