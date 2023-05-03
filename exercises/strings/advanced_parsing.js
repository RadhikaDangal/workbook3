"use string"

function parseAndDisplayName(name) {
    let positionOfFirstSpace = name.indexOf(" ");
    let possitionOfLastSpace =name.lastIndexOf(" ");
    console.log(positionOfSpace);

    //let full name = first + last
    
    let first = name.substring(0, positionOfFirstSpace);
  
    let middle =name.substring(0,positionOfFirstSpace);
    
    let last = name.substring(positionOfFirstSpace + 1);
    
    let output =`
    ${name}
    ${first}
    ${last}
    `;

    console.log(output);
    
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");