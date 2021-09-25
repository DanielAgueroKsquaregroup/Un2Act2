let inpTxt1 = document.getElementById('InputText1');
let inpTxt2 = document.getElementById('InputText2');
let actBtn1 = document.getElementById('ActionButton1');
let actBtn2 = document.getElementById('ActionButton2');
let actBtn3 = document.getElementById('ActionButton3');
let actBtn4 = document.getElementById('ActionButton4');
let actBtn5 = document.getElementById('ActionButton5');
let result = 0;
let naturalNum;

actBtn1.addEventListener('click', () =>{
    try {
        if(inpTxt1.value === "" || inpTxt2.value === "" || inpTxt1.value === "" && inpTxt2.value === "") throw 'Empty value(s)';
        sum(inpTxt1.valueAsNumber, inpTxt2.valueAsNumber);
    } catch (e) { console.log(e); }
});
actBtn2.addEventListener('click', () => {
    try {
        if(inpTxt1.value === "" || inpTxt2.value === "" || inpTxt1.value === "" && inpTxt2.value === "") throw 'Empty value(s)';
        subtraction(inpTxt1.valueAsNumber, inpTxt2.valueAsNumber);
    } catch (e) { console.log(e); }
});
actBtn3.addEventListener('click', () => {
    try {
        if(inpTxt1.value === "" || inpTxt2.value === "" || inpTxt1.value === "" && inpTxt2.value === "") throw 'Empty value(s)';
        multi(inpTxt1.valueAsNumber, inpTxt2.valueAsNumber);
    } catch (e) { console.log(e); }
});
actBtn4.addEventListener('click', () =>{
    try {
        if(inpTxt1.value === "" || inpTxt2.value === "" || inpTxt1.value === "" && inpTxt2.value === "") throw 'Empty value(s)';
        if(inpTxt2.valueAsNumber === 0) {
            throw `First value: ${inpTxt1.valueAsNumber} typeof: ${typeof inpTxt1.valueAsNumber}\nSecond number: ${inpTxt2.valueAsNumber} typeof(${inpTxt2.valueAsNumber})\nYou can't divide /0`;
        }
        division(inpTxt1.valueAsNumber, inpTxt2.valueAsNumber);
    } catch (e) { console.log(e); }
});
actBtn5.addEventListener('click', () =>{
    try {
        result = 0;
        if(inpTxt1.value === '') throw 'Empty value';
        if(inpTxt1.valueAsNumber < 0) throw `Natural number: ${inpTxt1.valueAsNumber}\nIt is undefined`;
        factorial(inpTxt1.valueAsNumber);
    } catch (e) { 
        if(result === Infinity || inpTxt1.valueAsNumber >= 1000) return console.log(e.message);
        console.log(e);
     }
});

function sum(a, b){
        result =  a + b;
        console.log(`First value: ${a} typeof(${typeof a})\nSecond value: ${b} typeof(${typeof b})\nResult: ${result} typeof(${typeof result})`);
}

function subtraction(a, b){
    result =  a - b;
    console.log(`First value: ${a} typeof(${typeof a})\nSecond value: ${b} typeof(${typeof b})\nResult: ${result} typeof(${typeof result})`);
}

function multi(a, b){
    result =  a * b;
    console.log(`First value: ${a} typeof(${typeof a})\nSecond value: ${b} typeof(${typeof b})\nResult: ${result} typeof(${typeof result})`);
}

function division(a, b){
    result =  a /b;
    console.log(`First value: ${a} typeof(${typeof a})\nSecond value: ${b} typeof(${typeof b})\nResult: ${result} typeof(${typeof result})`);
}

function factorial(a){
    if(result === 0) {
        naturalNum = a
        result++;
    }
    if(a === 0) {
        if(result === Infinity || inpTxt1.valueAsNumber >= 1000) throw new RangeError(`I can't show an appropiate result, it's very big`);

        console.log(`First value: ${naturalNum} typeof(${typeof naturalNum})\nResult: ${result} typeof(${typeof result})`);
    }
    else{
        result *= a;
        factorial(--a);
    }
}