numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
}


const btnNumbers = Array.from(document.getElementsByClassName("btn number"));
const btnClear = document.getElementById("ac");
const btnPercent = document.getElementById("percentage");
const btnSign = document.getElementById("sign");
const result = document.getElementById("result");
const btnPoint = document.getElementById("point");
const btnOperators = Array.from(document.getElementsByClassName("btn operator"));
const btnEqual = document.getElementById("equal");


finalResult = 0;
currentOperator = '';
activeOperator = false;
operatorCheck = false;
result.value = 0;
function checkEmpty(){
    if(result.innerText === "") {
        return true;
    }else return false;
};


function clear() {
    result.innerHTML = '0';
    result.value = 0
    activeOperator = false;
};

function clearDisplay(){
    if(operatorCheck){
        result.innerHTML = "";
        operatorCheck = false;
    };

};

function emptyCheck(){
    if(parseFloat(result.innerText) == 0 && result.innerText != '0.'){
        return true;
    }else return false;
    
};

function decimalCheck(num){
    if(num % 1 != 0){
        return true;
    }else return false;
};

function inputNumber(input){
    if(emptyCheck() && result.innerText != '.'){
        result.value = numbers[input.id];
        result.innerHTML = result.value.toString();
    }else{
        result.value = numbers[input.id];
        result.innerHTML += result.value.toString();
    };
};


btnClear.addEventListener("click", clear);

btnNumbers.forEach(btnNumber => {
    btnNumber.addEventListener("click", function(){
        if(activeOperator){ 
            clearDisplay();
            inputNumber(btnNumber);
        }else{
            inputNumber(btnNumber);
        };
    });
});

btnOperators.forEach(btnOperator => {
    btnOperator.addEventListener("click", function(){
        finalResult = parseFloat(result.innerText);
        currentOperator = btnOperator.id;
        activeOperator = true;
        operatorCheck = true;
        });
});

btnEqual.addEventListener("click", function(){
    actResult = parseFloat(result.innerText)
    switch(currentOperator){
        case 'plus':
            finalResult += actResult;
            break;
        case 'minus':
            finalResult -= actResult;
            break;
        case 'times':
            finalResult *= actResult;
            break;
        case 'divide':
            finalResult /= actResult;
            break;
    }
    result.innerHTML = finalResult;
});

btnPercent.addEventListener("click",function(){
    finalResult = parseFloat(result.innerText) / 100;
    result.innerText = finalResult;
});

btnPoint.addEventListener("click",function(){
    check = decimalCheck(parseFloat(result.innerText))
    if(!check && result.innerHTML != '0.'){
        result.innerHTML += '.';
    };
});

btnSign.addEventListener("click",function(){
    if((result.innerHTML).substring(0,1) != "-"){
        result.innerHTML = "-" + result.innerHTML;
    }else{
        result.innerHTML = (result.innerText).slice(1);
    }
})