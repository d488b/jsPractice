// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22

var date = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = date.getDay();
day = days[day];

var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = (hour >= 12) ? "PM" : "AM";
var time = hour + " " + ampm + " : " + min + " : " + sec;

document.querySelector("#day").textContent = "Today is : " + day;
document.querySelector("#time").textContent = "Current time is : " + time;


// Write a JavaScript program to print the contents of the current window.

function print_current_page(){
    window.print();
}

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function findArea(l,w,h){
    var area1 = (l + w + h) / 2;
    var area2 = Math.sqrt(area1 * ((area1 - l) * (area1 - w) * (area1 - h)));
    document.querySelector("#area").innerHTML = "The area of a triangle with side lengths of 5,6,7 is: " + area2;
}

findArea(5,6,7);

// Write a JavaScript program to rotate the string 'Circling Text' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function animate_string(id)
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval(function ()
    {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.

function numGuess(){
    var randomNum = Math.floor(Math.random() * 10) + 1;
    var num = prompt("Guess a number between 1 and 10");
    num = parseInt(num);
    if(num == randomNum){
        document.querySelector("#randomNum").innerText = "You got it!";
    } else if(num > randomNum){
        document.querySelector("#randomNum").innerText = "Your guess is higher. Number was " + randomNum;
    } else {
        document.querySelector("#randomNum").innerText = "Your guess is lower. Number was " + randomNum;
    }
}

// Write a JavaScript program to get the website URL (loading page)

document.querySelector("#currentURL").innerHTML = "Current URL = " + document.URL;

// Write a JavaScript function that reverse a number.

function reverseNum(num){
    num = num + "";
    return num.split("").reverse().join("");
}

console.log(reverseNum(123));

// Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabetize(string){
    string = string.toString();
    return string.split("").sort().join("");
}

console.log(alphabetize(2323232242));

// 