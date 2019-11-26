function outputValue(result){
    console.log(result);
    
}

function coinFlip(){
    let result =  Math.floor(Math.random() * 2);
    
    if (result === 1) {
        outputValue('heads')
    } else {
        outputValue('tails')
    }
}

coinFlip()

