var globalVariable = 1; 

function myFirstFunction(){
    let functionVariable = 'function var';
    console.log(`Global ${globalVariable}`);
    console.log(`function ${functionVariable}`);


    if true {
        let blovvkVariable = 'block var';
        console.log(`Block ${blockVariable}`);

    }
}

function mySecondFunction(){
    let secondFunctionVariable = 'function var';
   console.log(`Global ${globalVariable}`); 
   //console.log(`Function ${functionVariable}`); //not defined
    console.log(`function ${secondFunctionVariable}`);
}

myFirstFunction();
mySecondFunction();

console.log(globalVariable);