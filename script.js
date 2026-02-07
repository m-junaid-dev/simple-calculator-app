let displayvalue = '' ;

var display_screen =document.querySelector('.display-screen');

// for buttons access 0 to 9
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
let btn7 = document.querySelector('.btn7');
let btn8 = document.querySelector('.btn8');
let btn9 = document.querySelector('.btn9');
let btn0 = document.querySelector('.btn0');

// for clear button access 
let clear = document.querySelector('.clear');

// for dot button access
let dot = document.querySelector('.dot');

// fot calcultion buttons acces like +,-,*,/
let addition = document.querySelector('.addition');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let division = document.querySelector('.division');

// for equal button access 
let equal = document.querySelector('.equal');


// to add click event in 0 to 9 buttons
btn1.addEventListener('click',()=>{
    displayvalue += "1";
    document.querySelector('.display-screen').value = displayvalue;
})

btn2.addEventListener('click',()=>{
    displayvalue += "2";
    document.querySelector('.display-screen').value = displayvalue;
})

btn3.addEventListener('click',()=>{
    displayvalue += "3";
    document.querySelector('.display-screen').value = displayvalue;
})

btn4.addEventListener('click',()=>{
    displayvalue += "4";
    document.querySelector('.display-screen').value = displayvalue;
})

btn5.addEventListener('click',()=>{
    displayvalue += "5";
    document.querySelector('.display-screen').value = displayvalue;
})

btn6.addEventListener('click',()=>{
    displayvalue += "6";
    document.querySelector('.display-screen').value = displayvalue;
})

btn7.addEventListener('click',()=>{
    displayvalue += "7";
    document.querySelector('.display-screen').value = displayvalue;
})

btn8.addEventListener('click',()=>{
    displayvalue += "8";
    document.querySelector('.display-screen').value = displayvalue;
})

btn9.addEventListener('click',()=>{
    displayvalue += "9";
    document.querySelector('.display-screen').value = displayvalue;
})

btn0.addEventListener('click',()=>{
    displayvalue += "0";
    document.querySelector('.display-screen').value = displayvalue;
})

// for clear button event/function
clear.addEventListener('click',()=>{
    displayvalue = '';
    document.querySelector('.display-screen').value = displayvalue;
})

// for dot button event/function 
dot.addEventListener('click',()=>{
    displayvalue += ".";
    document.querySelector('.display-screen').value = displayvalue;
})

// for calculation button +,-,*,/ events  
// for addition
addition.addEventListener('click',()=>{
    displayvalue += "+";
    document.querySelector('.display-screen').value = displayvalue;
})

// for subtraction
subtract.addEventListener('click',()=>{
    displayvalue += "-";
    document.querySelector('.display-screen').value = displayvalue;
})

// for multiplication
multiply.addEventListener('click',()=>{
    displayvalue += "*";
    document.querySelector('.display-screen').value = displayvalue;
})

// for division
division.addEventListener('click',()=>{
    displayvalue += "/";
    document.querySelector('.display-screen').value = displayvalue;
})

// for equal button events 
equal.addEventListener('click',()=>{
    displayvalue = eval(displayvalue);
    // document.querySelector('.display-screen').value = displayvalue;
    display_screen.value = displayvalue;

})