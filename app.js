// chapter 21 to 25
// question no 1

var FirstName =prompt("Enter your First name","First Name");
var LasttName =prompt("Enter your Last name","Last Name");
var Fullname = FirstName+LasttName;
alert("Hello "+ Fullname+ " welcome!"); 


// question no 2

var MobilePhone=prompt("Enter your favourite mobile phone model","Enter mobile phone model");
document.write("My favourite mobile phone model is :"+ MobilePhone);
var size= MobilePhone.length;
document.write("<br>the size of string is: "+size);

// question no 3

var str="pakistan";
var length=str.indexOf("n");
document.write("string is: "+str);
document.write("<br>the index of n is: "+length);

// question no 4

var hello= "Hello world";
var last=hello.lastIndexOf("l");
document.write("<br>the index of l is: "+last);

// question no 5

var char ="pakistani";
var third=char.slice(2,3);
document.write("<br> strnig is: "+char);
document.write("<br> the char on third index is: "+third);

// question no 7

var city="hyderabad";
document.write(city);
city=city.replace("hyder","islam")
document.write("<br>"+city);

// queation no 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<br>"+message); 
message=message.replace(/and/g,"&");
document.write("<br>"+message);

// question no 9

var string="472";
document.write("value: "+string+"<br>Type :string");
var num=Number(string);
document.write("<br>value: "+num+"<br>Type :number");

// question no 10

var input=prompt("enter something");
document.write("<br>user input :"+input);
var upper=input.toUpperCase();
document.write("<br>uppercase: "+upper);

// quesion no 11
var inputl=prompt("enter something");
document.write("<br>user input :"+inputl);
var lower=input.toLowerCase();
document.write("<br>uppercase: "+lower);

// question no 12   to be watched

var num=35.36;
document.write("value: "+num+"<br>Type :number");
var st=num.toString();
document.write("<br>value: "+st+"<br>Type :string");

// question no 13

var userName=prompt("enter a user name");
for (var i = 0; i < userName.length; i++) { 
if (userName.charAt(i)==="@") 
{
  alert("invalid");
}
elseif (userName.charAt(i)===".") 
{
  alert("invalid");
}
elseif (userName.charAt(i)===",")
 {
  alert("invalid");

}
elseif (userName.charAt(i)==="!") 
{
  alert("invalid");
}
elseif()
 {
  alert("valid");
}
}


// question no 14

var ser=prompt("enter to search");
ser= ser.toLowerCase();
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
for (let i = 0; i< a.length; i++) {
  if (ser === "cake")
   { 
   alert("cake is available at index 0 in our bakery"); 
   break;
    } 
  
   else if (ser === "apple pie")
    { 
  alert("apple pie is available at index 1 in our bakery"); 
  break;
  } 
  else if (ser === "cookies")
   { 
   alert("cookies are available at index 2 in our bakery"); 
   break;
  } 
   else if (ser === "chips") 
  {
   alert("chips are available at index 3 in our bakery");
   break;
  } 
   else if(ser === "patties") 
    { 
      alert("patties are available at index 4 in our bakery");
      break;
    }
    else 
    { 
      alert(ser +" is not available in our bakery");
      break;
    }
  
}

// question no 15   to be checked

// var pass= prompt("Enter your password");
// for(i=0;i<=pass.lenght;i++)
// {
// if (pass.charAt(0)=== 0-9) {
//   alert("enter a valid password");
//   break
// }
// }


// question no 16

 var university = "University of Karachi";
 res= university.split("");
 document.write("<br>"res);

// question no 17
var name= "pakistan";
var lastChar = name.charAt(name.lenght-1);
document.write("last character of pakistan is: "+lastChar);

// queston no 18
var letter_count=0;
var count="The quick brown fox jumps over the lazy dog";

for (let i = 0; i < count.length; i++) {
  
  if (count.charAt(i) === "the")
   { 
   letter_count +=1;
   
     } 
}
document.write(letter_count);
