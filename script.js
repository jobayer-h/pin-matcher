/// function for generate random pin
function generatePin() {
    let randomPin = Math.random()* 10000;
    randomPin = Math.ceil(randomPin)
    if (randomPin > 1000) {
        document.getElementById('pinDisplay').value = randomPin;
    } else {
        generatePin();
    }
    document.getElementById('try-left').innerText = 3;
    document.getElementById('submit-btn').disabled = false;
}

// pin input button function
function getBtnValue(id) {
    const btnValue = document.getElementById(id).innerText;
    document.getElementById('submitPinDisplay').value += btnValue;
}

// backspace and clear button function
function backspaceBtn(id) {
    if (id == true) {
        const pinDisplay = document.getElementById('submitPinDisplay').value;
        const newPinDisplay = pinDisplay.slice(0, -1);
        document.getElementById('submitPinDisplay').value = newPinDisplay;
    }
    if (id == false) {
        document.getElementById('submitPinDisplay').value = '';
    }    
}

// submit button function
function validatePin() {
    const givenPin = document.getElementById('pinDisplay').value;
    const submitedPin = document.getElementById('submitPinDisplay').value;

    if (givenPin == submitedPin) {
        document.getElementById('tick').style.display = 'block';
        document.getElementById('cross').style.display = 'none';
    } else {
        document.getElementById('tick').style.display = 'none';
        document.getElementById('cross').style.display = 'block';

        // try left
        var tryLeft = parseInt(document.getElementById('try-left').innerText);
        tryLeft = tryLeft - 1;
        document.getElementById('try-left').innerText = tryLeft;
        if (tryLeft == 0) {
            document.getElementById('submit-btn').disabled = true;
        }
    }
}