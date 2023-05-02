function convertCtoF(celciusTempreture) {
  let fahrenheitTempreture = (celciusTempreture * 9) / 5 + 32;
  return fahrenheitTempreture;
}

let currentTemp = 0;
let fahrenheitTempreture = convertCtoF(currentTemp);
console.log(fahrenheitTempreture.toFixed(2));


