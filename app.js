//Task#35-38

Q:1
function date(currentDate){
document.write(currentDate);
}
date(new Date);

Q:2
var a = prompt("Enter your first name");
var b =  prompt("Enter your last name");
function name(greet){
    alert("Hello " + a + " " + b); 
}
name();

Q:3
var input = +prompt("Enter first number");
var input1 = +prompt("Enter second number");
function sum(input,input2){
    alert(input+input1);
}
sum(input,input1)

Q:4
var num1 = prompt("Enter first value");
var oper = prompt("Enter your operator");
var num2 = prompt("Enter second value");
function calc(num1,oper,num2){
if(oper === "+"){
    return +num1 + +num2 
}
else if(oper === "-"){
    return num1 - num2
}
else if(oper === "*"){
    return num1 * num2
}

else if(oper === "/"){
    return num1 / num2
}

else if(oper === "%"){
   return num1 / num2*100
}
}
document.write("The output is: " + calc( num1 , oper , num2))

Q:5
function s(num) {
    for (i=0; i<=num; i++){
        var sum=0;
        var j = i*i;
        sum = j;
        document.write('<br>Squares Number : '+sum);
    }
    document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
}

var num = +prompt("Enter a number for Squares :");
s(num);

Q6
function factorial(x) { 
    if (x === 0) {
    return 1;
    }
    return x * factorial(x-1);
}
var factor = +prompt("Enter a Factorial Number ")
document.write("<br><br>" + factorial(factor) + "<br><br>");

Q:7
function counting (startnum,endnum){
    for (i=startnum; i <= endnum; i++){
        document.write("<br>" + i);
    }
}
var startnum = +prompt('Enter a number for Start Counting ');
var endnum = +prompt('Enter a number for End Counting ');
document.write("<h2>Counting</h2>");
document.write("Starting number : " + startnum +"Ending number is : "+endnum);
counting(startnum,endnum);

Q:10
var  word = prompt("Enter your word")
var drome = "";
function palindrome(palin,drome){
    for(var i = palin.length - 1;i <= 0;i--){
drome += [i]
    }
    if(word === drome){
        return word + " is palindrome word"
    }
    else{
        return "This is not a palindrome word"
    }
}
    alert(palindrome(word , drome ,i))

Q:11
function upper(string){
document.write("the quick brown fox".ucwords())
}
document.write(upper())