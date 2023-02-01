// Answer: True(checked)

// Process: c = (F-32)/1.8
function temperatureConverter(valNum) {
    const celsius = parseFloat(((valNum - 32) / 1.8).toFixed(2));
    return celsius; 
}

const checkTemperature50 = temperatureConverter(50);
console.log(checkTemperature50);

const checkTemperature103 = temperatureConverter(103);
console.log(checkTemperature103);
