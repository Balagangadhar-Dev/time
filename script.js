/* Don't panic by looking at the code, It's just a JavaScript function
   You already know how to create function in JavaScript function
   If you forgot, look at the 6th line that's how we create the function in JS
   follow line by line you will be able to understand it.
*/
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    

    // Conditional (ternary) operator
    // condition ? exprIfTrue : exprIfFalse
    // learn more about Conditional (ternary) operator here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    // It's easy if you don't understand i will explain don't worry
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

// Here we are just calling the above function 
showTime();