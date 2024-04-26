let num1;
let num2;
let inputString = document.querySelectorAll(".numbers");
let inputfield = document.querySelector("input");
let operator;
for(let i = 0 ; i< inputString.length ; i++){
    inputString[i].addEventListener('click', (e)=>{
        inputfield.value = inputfield.value +e.target.textContent;
        
        if(num1 != null){
            num2 = e.target.id;
            
        }
        else{
            num1 = e.target.id;
            
            console.log("num1" + num1);
        }
        console.log(e.target.textContent);
    })
}

let addNumbers = document.querySelectorAll(".operators");
for(let i = 0 ;i<addNumbers.length ; i++){
    addNumbers[i].addEventListener('click' ,(e)=>{
        inputfield.value="";
        console.log("num2 from evetn" + num2);
        if(num1 != null && num2 != null){
            operate(num1 , num2 , operator);
            console.log("num2 "+num2);
            console.log("num1" +" "+ num1);
        }
        operator = e.target.textContent;
    } )
}

function operate(x, y,operator){
    x = parseInt(x);
    y = parseInt(y);
    console.log("from operator function " +x +" "+ y +" " +operator);
    if(operator == '+'){
        add(x,y)
    }
    if(operator == '-'){
        sub(x,y);
    }
    if(operator == '*'){
        multiply(x,y);
    }
    if(operator == '/'){
        divide(x,y);
    }
    
}
let deleteButton = document.querySelector("#del");
deleteButton.addEventListener('click' , (e) => {
    if(num2 == null){
        operator=null;
        num1 = null;
        inputfield.value ="";
    }
    else{
        inputfield.value ="";
        num2 = null;
    }
})


let equalButton = document.querySelector("#equals");
function add(x,y){
    let addRes = x+y;
    inputfield.value = addRes;
    console.log( "answer",addRes +" ");
    num1 = addRes;
    num2=null;
    return addRes;
}
function sub(x,y){
    let subRes = x-y;
    inputfield.value = subRes;
    num1 = subRes;
    num2=null;
    console.log("subtract "+subRes);
    return subRes;
}
function divide(x,y){
    let divRes = x/y;
    inputfield.value = divRes;
    num1 = divRes;
    num2=null;
    console.log("divide" + divRes);
    return divRes;
}
function multiply(x,y){
    let multiRes = x*y;
    inputfield.value = multiRes;
    num1 = multiRes;
    num2=null;
    console.log("multiply" + multiRes);
    return multiRes;
}