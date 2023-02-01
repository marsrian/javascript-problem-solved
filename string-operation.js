//Answer: True(Checked)

function stringConcat(str1, str2){
    //write your code here
    //don't forget to write return
    const added2Line = str1 + " " + str2;
    return added2Line;
}

const firstLine = "I am going to be";
const secondLine = "an awesome web developer";
const connect2Line = stringConcat(firstLine, secondLine);
console.log(connect2Line);