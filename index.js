function onIncrement() {
    let counterElement = document.getElementById("counterValue");
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
    }
    else {
    counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
    let counterElement = document.getElementById("counterValue");
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
    }
    else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
    }
    else {
    counterElement.style.color = "black";
    }
    counterElement.textContent = updatedCounterValue;
}

function onReset() {
    let counterElement = document.getElementById("counterValue");
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
    }

    function onAdd(){
        let input1Element = document.getElementById("input1")
        let input2Element = document.getElementById("input2")
        let resultElement = document.getElementById("result")
        let firstNumberValue = input1Element.value 
        let secondNumberValue = input2Element.value
        let total = parseInt(firstNumberValue) + parseInt(secondNumberValue)
        resultElement.textContent = total
    }

function onSubtract(){
    let input1Element = document.getElementById("input1")
    let input2Element = document.getElementById("input2")
    let resultElement = document.getElementById("result")
    let firstNumberValue = input1Element.value 
    let secondNumberValue = input2Element.value
    let total = parseInt(firstNumberValue) - parseInt(secondNumberValue)
    resultElement.textContent = total
}

function onMultiply(){
    let input1Element = document.getElementById("input1")
    let input2Element = document.getElementById("input2")
    let resultElement = document.getElementById("result")
    let firstNumberValue = input1Element.value 
    let secondNumberValue = input2Element.value
    let total = parseInt(firstNumberValue) * parseInt(secondNumberValue)
    resultElement.textContent = total
}

function onDivide(){
    let input1Element = document.getElementById("input1")
    let input2Element = document.getElementById("input2")
    let resultElement = document.getElementById("result")
    let firstNumberValue = input1Element.value 
    let secondNumberValue = input2Element.value
    let total = parseInt(firstNumberValue) / parseInt(secondNumberValue)
    resultElement.textContent = total
}

function onPercentage(){
    let input1Element = document.getElementById("input1")
    let input2Element = document.getElementById("input2")
    let resultElement = document.getElementById("result")
    let firstNumberValue = input1Element.value 
    let secondNumberValue = input2Element.value
    let total = parseInt(firstNumberValue) % parseInt(secondNumberValue)
    resultElement.textContent = total
}

function onClear(){
    let resultElement = document.getElementById("result")
    resultElement.textContent = 0
}