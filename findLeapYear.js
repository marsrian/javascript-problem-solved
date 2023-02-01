// Answer: True(Check)

function findLeapYear(year){
    const leapYearStore = [];
    for(let i = 0; i < year.length; i++){
        const index = i;
        const element = year[index];
        if(element % 4 === 0 && element % 100 != 0 || element % 400 === 0){
            leapYearStore.push(element);
        }
    }
    return leapYearStore;
}

const year = [2023,2024,2025,2028,2030];
const leapYearStores = findLeapYear(year);
console.log(leapYearStores);