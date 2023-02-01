// Answer: True(Checked)

function tallestFriend(height){
    let tallest = height[0];
    for (let i = 0; i < height.length; i++) {
        if (tallest < height[i] ) {
            tallest = height[i];
        }
    }
    return tallest;
}

const input = [157, 134, 188];
const taller = tallestFriend(input);
console.log(taller, 'cm');