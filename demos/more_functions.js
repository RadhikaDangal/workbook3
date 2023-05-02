"use strict";
function displayMailingLabel(name, address, city, state, zip) {
  let addressLabel = `
    ${name}
    ${address}
    ${city}, ${state} ${zip}`;

  console.log(addressLabel);
}

let name = "Radhika Dangal";
let address = "123 Sleepy Hollow Rd";
let city = "Pittsburgh";
let state = "PA";
let zip = "15216";

displayMailingLabel(name, address, city, state, zip);
