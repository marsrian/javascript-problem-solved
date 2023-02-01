// Answer: True(checked)

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const input1 = reverseString('hello');
console.log(input1);
const input2 = reverseString('GeeksforGeeks');
console.log(input2);