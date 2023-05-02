function convertFtoC (fahrenheitTempreture){
    let celciusTempreture = (fahrenheitTempreture -32)*(5/9);
    return celciusTempreture;
}

let currentTemp =92;
let celciusTempreture = convertFtoC(currentTemp);
console.log(celciusTempreture.toFixed(2));

