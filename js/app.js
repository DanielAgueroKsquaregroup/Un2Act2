let inpTxt1 = document.getElementById('InputText1');
let inpTxt2 = document.getElementById('InputText2');
let actBtn1 = document.getElementById('ActionButton1');
let actBtn2 = document.getElementById('ActionButton2');
let actBtn3 = document.getElementById('ActionButton3');
let actBtn4 = document.getElementById('ActionButton4');
let actBtn5 = document.getElementById('ActionButton5');
let result = 0;

actBtn1.addEventListener('click', sum);
actBtn2.addEventListener('click', subtraction);
actBtn3.addEventListener('click', multi);
actBtn4.addEventListener('click', division);
actBtn5.addEventListener('click', factorial);

function sum(param){
    param =  inpTxt1.valueAsNumber + inpTxt2.valueAsNumber;
    console.log(`${inpTxt1.valueAsNumber}\n${inpTxt2.valueAsNumber}`);
    console.log(param);
}

function subtraction(param){
    param =  inpTxt1.valueAsNumber - inpTxt2.valueAsNumber;
    console.log(`${inpTxt1.valueAsNumber}\n${inpTxt2.valueAsNumber}`);
    console.log(param);
}

function multi(param){
    param =  inpTxt1.valueAsNumber*inpTxt2.valueAsNumber;
    console.log(`${inpTxt1.valueAsNumber}\n${inpTxt2.valueAsNumber}`);
    console.log(param);
}

function division(param){
    param =  inpTxt1.valueAsNumber/inpTxt2.valueAsNumber;
    console.log(`${inpTxt1.valueAsNumber}\n${inpTxt2.valueAsNumber}`);
    console.log(param);
}

function factorial(param){
    if(result === 0){
        param = inpTxt1.valueAsNumber;
        result = 1;
    }
    if(param === 0){
        console.log(`${inpTxt1.valueAsNumber}\n${result}`);
        result = 0;
    } else{
        result *= param;
        factorial(--param);
    }
}