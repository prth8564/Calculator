let str = "1+2+3+4";
let arr = Array.from(str);
let arr2 = ['1','+','2','+','3','+','6'];
console.log(arr2);
let sum = 0;
for(let i=0;i<=arr.length;i++){
    if(i == 0){sum=0;}

    if(sum == 0 && arr[i] == '+'){
        sum = operate(arr[i-1],arr[i+1],arr[i]);
    }
    else if(arr[i] == '+'){
        sum = operate(sum , arr[i+1],arr[i]);
    }
}
console.log("Th solution" + sum);
function operate(x,y,o){
    let first = parseInt(x);
    let second = parseInt(y);
    return add(first,second);

}
let inputString = document.querySelectorAll(".numbers , .operators");
for(let i = 0 ; i< inputString.length ; i++){
    inputString[i].addEventListener('click', (e)=>{
        console.log(e.target.textContent);
    })
}
function add(x,y){
    console.log(x+y);
    return x+y;
}