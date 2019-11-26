function outputValue(result){
    console.log(result);

    if (result == 'Heads') {
        document.querySelector('.target').innerHTML = result
        document.querySelector('.target').style = 'background: linear-gradient(to right, #ff8c19, #ffe259); -webkit-background-clip:text; -webkit-text-fill-color:transparent;'
    } else {
        document.querySelector('.target').innerHTML = result
        document.querySelector('.target').style = 'background: linear-gradient(to right, #ee0979, #ff6a00); -webkit-background-clip:text; -webkit-text-fill-color:transparent;'
    }
    
}

function coinFlip(){
    let result =  Math.floor(Math.random() * 2);
    
    if (result === 1) {
        outputValue('Heads')
    } else {
        outputValue('Tails')
    }
}

coinFlip()

document.getElementById('body').addEventListener('click', function(){
    coinFlip()
})
