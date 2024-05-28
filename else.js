//1. Write a js program to find maximum between two numbers.
var num=parseInt(prompt("Enter the first value"))
var num1=parseInt(prompt("Enter the second value"))
if(num>num1){
    console.log('Maimum number is.'+num)
}
else if(num1>num){
    console.log("Maximum number is."+num1)
}
else {
    console.log("both number are equal.")
}
//2. Write a js program to find maximum between three numbers.
var a=parseFloat(prompt('Enter the first Value'))
var b=parseInt(prompt('Enetr the Second value'))
var c=parseInt(prompt('Enetr ths third Number'))
if(a >= b && a >= c){
  console.log(a+ ' is the Maximum number'  )
}
else if(b >= a && b >= c){
    console.log( b+ ' is the Maximum number')
}
else if(c >=a && c >= b){
    console.log(c+' is the Maximum number')
}else{
    console.log('All number is equal')
}
//.3 Write a js program to check whether a number is negative, positive or zero.
var number=parseInt(prompt('Enetr the Number'));
if(number > 0){
    console.log(number+' is positive');
}
else if(number < 0){
    console.log(number+' is Nagitive');
}
else {
    console.log('this number is Zero');
}
4 Write a js program to check whether a number is divisible by 5 and 11 or not.
var whether=parseInt(prompt('Enetr the Number'));
if (whether % 5 === 0 && whether % 11  === 0 ){
    console.log(whether+ 'is divisible by both 5 and 11 ');
     }
else{
    console.log(whether+" is not divisible ");
}
//5 Write a js program to check whether a number is even or odd.
var d=parseInt(prompt('Enetr the number'))
if (d % 2 === 0){
    console.log(d+ 'is even')
}
else{
    console.log(d+'is odd')
}
//6 Write a js program to check whether a year is leap year or not.
var year=parseInt(prompt('enter the year'))
  checking is the yeaer a leap yaer
    if ((year % 4 === 0 && year % 100 !== 0 )||(year % 400  === 0)) {
        console.log(year+ 'is a leap year.'  )
    }
 else {
    console.log(year+"is not a leap year.")
 }   
 //7 Write a js program to input week number and print week day.
 var week=parseInt(prompt('Enter tha week number'));
 if(week === 1)
    { 
       console.log('Monday')
    } else if (week === 2)
    {
        console.log('Tuesday')
    } else if (week === 3){
        console.log('Wednesday')
    } else if (week === 4){
       console.log('Thrueday')
    } else if (week === 5){
        console.log('Friday')
    } else if (week === 6){
        console.log('Saturday')
    } else if (week === 7){
        console.log('Sunday')
    } else{
        console.log('Invailda week number')
    }
 //7 Write a js program to input week number and print week day.
var weekinput=parseInt(prompt("Enter the week number"))
switch (weekinput) {
  case 1:
    console.log("Monday")
  break;
  case 2:
      console.log("Tuesday")
  break;
  case 3:
    console.log("Wednesday")
    break;
    case 4:
       console.log("Thruseday")
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
  default:
    console.log('Invaild a number')
       break;
} 
//Write a js program to input any alphabet and check whether it is vowel or consonant.
var vowel=parseInt(prompt('Enetr The Character'))
switch (vowel) {
    case 'a':
        console.log('This is a vowel alphabet')
        break;
    case 'e':
        console.log('This is a vowel alphabet')
        break;
    case 'i':
        console.log('This is a vowel alphabet')
    break;
    case 'o':
        console.log('This is a vowel alphabet')
    break;
    case 'u':
        console.log('This is a vowel alphabet')
    break;        
    default:
        console.log('This is a Constant Alphaqbet')
        break;
}
//9. Write a js program to input any character and check whether it is alphabet, digit or special character.
var character=parseInt(prompt('Enter the character'));
  if ((character >= 'a' && character <= 'z') || (character >= 'A'  && character <= 'Z')){
    console.log('This is a Alphabet')
   }
   else if(character >= 1 && character <=9){
    console.log('This is a Digit')
   } 
   else{
    console.log('This is a special character')
   }
 //Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
//For first 50 units Rs. 0.50/unit
//For next 100 units Rs. 0.75/unit
//For next 100 units Rs. 1.20/unit
//For unit above 250 Rs. 1.50/unit
var electricity=parseInt(prompt('Enter the unit'));
var totalbill=0;
var price = 0.50;
var price1= 0.75;
var price2 = 1.20;
var price3 = 1.50;
if(electricity <= 50){
  totalbill = electricity * price;
}
else if(electricity <= 100){
  totalbill = 50 * price + (electricity -50) * price1
}
 else if(electricity <= 150){
  totalbill = 50 * price + 50 * price1 + (electricity - 100) * price2
 }
 else if (electricity <= 250){
  totalbill = 50 * price + 50 * price1 + 50 * price2 + (electricity - 150) * price3
 }
 console.log('Total Eelecricity bill', totalbill)
