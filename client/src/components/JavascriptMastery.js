import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../App';
// import thapapic from "../images/thapa1.png";
import aboutpic from "../images/aboutpic.png";
// import {UserContext} from "../App";
import { Link, useHistory } from "react-router-dom";
import "./Javascriptmastery.css";


const JavascriptMastery = () => {

  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [show, setShow] = useState(false);
  const prevDate = new Date();

  const callAboutPage = async () => {
      try {
          const res = await fetch('/api/about', {
              method: "POST",
              headers: {
                  Accept: "appllication/json",
                  "Content-Type": "application/json"
              },
              credentials: "include"
          });

          const data = await res.json();
          setUserData(data);
          const newDate = new Date();
          if ((newDate - prevDate) < 1000) {
              setTimeout(() => {
                  setShow(true);
              }, (1000 - (newDate - prevDate)));
          } else {
              setShow(true);
          }
          // / update **/ 
          dispatch({ type: 'USER', payload: true });

          if (!res.status === 200) {
              const error = new Error(res.error);
              const newDate = new Date();
              if ((newDate - prevDate) < 1000) {
                  setTimeout(() => {
                      setShow(true);
                  }, (1000 - (newDate - prevDate)));
              } else {
                  setShow(true);
              }
              throw error;
          }

      } catch (err) {
          console.log(err);
          history.push('/login');
      }
  }

  useEffect(() => {
      callAboutPage();
  }, []);

  if (!show) {
      return (
          <div className="loader-holder">
              <div className="lds-ripple">
                  <div></div>
                  <div></div>
              </div>
          </div>
      )
}
  return (
    <>
<div className="javascriptmastery">
  <img src="./images/ja.png" className="jm1" alt="..."/>
  <div className="media-body">
    <h2 className=" fs-1">Javascript Mastery</h2>
    <h5 className=" fs-6 text-justify ml-4">Complete Path to JavaScript Mastery.
The only JavaScript Course you'll ever need! </h5>
<hr className='bg-success'/>

  </div>
</div>

<marquee  scrolldelay="200" className='text-dark mt-3 text-warning '>⭐Learn the concepts from Javascript Mastery course and practice the projects provided on the project section.<br/><span className='mq'> Keep Learning Keep Growing 🌱</span>  </marquee>

<div className="jm2">
  <img src="./images/ja.png" className="jm1" alt="..."/>
  <div className="media-body">
    <h5 className="mt-0">⭐ The first <b>character</b> must be a <b>letter</b> or an <b>underscore</b> or an <b>dollar</b>. You can't use a <b>number</b> as the <b>first character</b></h5>
    <h5 className="mt-0">⭐ The rest of the variable name can include any <b>ByteLengthQueuingStrategy</b>, any <b>number</b>, or the <b>underscore</b>. Can't use any other characters, including spaces.</h5>
    <h5 className="mt-0">⭐ Variable names are <b>case sensitive.</b></h5>
    <h5 className="mt-0">⭐  <b>No limit</b> to the name of the variable names.</h5>
  </div>

  <h2 className='javascriptmastery mt-5 fs-6'>⭐Data types in Javascript :</h2>
  <hr className='bg-success'/>

<div className='datatypes'>
  

  <ul className=" ">
  <li className="list-group-item ">String </li>
  <li className="list-group-item ">Number</li>
  <li className="list-group-item ">Boolean</li>
  <li className="list-group-item ">Undefined </li>
  <li className="list-group-item ">Symbol</li>
  <li className="list-group-item ">Bigint</li>
</ul>
</div>
</div>

<ul className="list-group list-group-horizontal ml-5 d-flex flex-wrap">
  <li className="list-group-item">var myName = 'Bishal Nandi';<br/>
console.log (myName);<br/>
 console.log(typeof(myName));<br/>output:(Bishal Nandi,string)</li>
  <li className="list-group-item">var myage = 15;<br/>
console.log (myage);<br/>
console.log(typeof(myage));<br/>output:(15,number)</li>
  <li className="list-group-item">var iAmMeet = false;<br/>
 console.log (iAmMeet);<br/>
 console.log(typeof(iAmMeet));<br/>output:(false , boolean)</li>
</ul>

<h2 className='javascriptmastery ml-4 mt-5 '>⭐DataTypes Practice :</h2>

<ul className="list-group list-group-horizontal ml-5 d-flex flex-wrap mt-5">
  <li className="list-group-item">console.log( 10 + "5");<br/>ouput :105</li>
  <li className="list-group-item">console.log( 9 - "4");<br/>ouput :5</li>
  <li className="list-group-item">console.log("Java" + "Script");<br/>ouput :JavaScript</li>
  <li className="list-group-item">console.log(" " + " ");<br/>ouput :</li>
</ul>

<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">

<li className="list-group-item"> console.log(true + true);<br/>ouput :2</li>
<li className="list-group-item"> console.log(true + false);<br/>ouput :1</li>
<li className="list-group-item"> console.log(false + true);<br/>ouput :1</li>
<li className="list-group-item"> console.log(false - true);<br/>ouput :-1</li>

</ul>

<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">

<li className="list-group-item"> 0 stands for zero</li>
<li className="list-group-item"> 1 stands for 1</li>

</ul>

<h2 className='javascriptmastery ml-4 mt-4 fs-6'>⭐Difference between Null VS Undefined ?
</h2>

<ul className="list-group list-group-horizontal ml-5 mt-4 d-flex flex-wrap">
<li className="list-group-item"> var iAmUsefull = null;<br/>
 console.log(iAmUsefull);<br/>
console.log(typeof(iAmUsefull));<br/>ouput :(null,object)</li>
<li className="list-group-item"> var iAmStandby;<br/>
console.log(iAmStandby);<br/>
console.log(typeof(iAmStandby));<br/>output:(undefined,undefined)</li>
</ul>

<h2 className='javascriptmastery ml-4 mt-3'>⭐What is NaN ? ?
<h5 className='fs-5 ml-5 mt-1'>🔸NaN is a property of the global object.
In other words, it is a variable in global scope.<br/>🔸The initial value of NaN is Not-A-Number</h5>
</h2>
<br/>

 <h2 className='javascriptmastery ml-4 mt-4 fs-1 list-group-item '>⭐Different types of operators in Javascript : <br/>
 <h5 className='ml-5'>There are 6 types of operators in Javascript</h5>
</h2><br/>
<h3 className='ml-5 mt-3 text-info fs-6'> 1️⃣ Assignment operators :
</h3>
<li className="list-group-item p-4">
An assignment operator assigns a value of its left operand based on the value of its right operand.
 The simple assignment operator is equal (=).</li><br/>
 <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item"> var x = 10;<br/>
 </li>
<li className="list-group-item"> var y = 13;<br/>
</li></ul>
<br/>
<h3 className='ml-5 mt-3 text-info fs-6'> 2️⃣ Arithmetic operators :<br/>
</h3>
<li className="list-group-item p-4">
An arithmetic operator takes numerical values (either literals or variables) as their operand and return a single numerical value.</li>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item"> console.log(4+6);<br/>ouput:10
 </li>
<li className="list-group-item"> console.log(10*2);<br/>ouput:20
</li>
<li className="list-group-item">console.log(40/5);<br/>ouput:8
</li>
<li className="list-group-item">console.log(10-5);<br/>ouput:5
</li></ul><br/>
<h3 className='ml-5 mt-3 text-info fs-6'> 3️⃣ Increment and Decrement operator :
</h3>
<li className="list-group-item p-4">
operator: x++ OR ++x OR x-- OR --x
If used postfix, with operator after operand ( for example, x++), the increment operator increments and returns the value before incrementing.</li>
<br/>
<h3 className='ml-5 mt-2 text-info fs-6'> 4️⃣ Comparison Operators:
</h3>
<li className="list-group-item p-4">
A Comparison operator compares its operands and returns a logical value based on whether the comparison is true.</li><br/>

<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item"> var a = 30; <br/>
var b = 10;<br/>
 </li>
<li className="list-group-item"> console.log(a === b );<br/>ouput: false
</li>
<li className="list-group-item">console.log(a != b);<br/>ouput: true
</li></ul><br/>
<h3 className='ml-5 mt-3 text-info fs-6'> 5️⃣ Logical operators:
</h3>
<li className="list-group-item p-4">
Logical operators are typically used with boolean (logical) values when they are, they return a boolean value.</li><br/>

<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item"> var a = 30; <br/>
var b = -20;<br/>
 </li>
<li className="list-group-item"> Logical AND (&&)<br/>
 The logical AND (&&) operator (logical conjuction) for a set of operands is true if and only if all of its operands are true.<br/>
</li>
<li className="list-group-item">console.log(a greater_than b && b greater_than 0);
</li></ul><br/>
<h3 className='ml-5 mt-3 text-info fs-6'> 6️⃣ String operators:
</h3><br/>
 <li className="list-group-item p-4">
 The concatenation operator (+) concatenates two string values together,
  returning another string that is the union of the two operand strings.</li>
 <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">  console.log("Meet " + "Bishal");
 <br/>
 var myName = "Bishal";<br/>console.log(myName + " console.log(myName +  'Chothani')");
 <br/>output : (Meet Bishal , Bishal console.log(myName +  'Chothani')  )
 </li>

</ul>
<br/>
<h2 className='javascriptmastery list-group-item ml-4 mt-4'>⭐What is the difference between == and === ?
</h2>
 <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item p-4"> var num1 = 5;<br/>
var num2 = "5";.</li>
<li className="list-group-item"> console.log(num1 == num2);<br/> Output : True
 </li>
<li className="list-group-item"> console.log(num1 === num2);
<br/> Output :False
</li>
</ul>
<h2 className='javascriptmastery  list-group-items ml-4 mt-4'>⭐CONTROL STATEMENTS & LOOPS
<h2 className='ml-5 mt-2'>🔸 IF..ELSE STATEMENT</h2>
<h5 className='ml-5 mt-2'>🔸The IF statement executes a statement if a specified condition is truthy.
<br/>  🔸If the condition is falsy, another statement can be executed.</h5></h2>

{/* pushpa code started here */}
{/* if else statement */}
<br />
   <h2 className= "  ml-4">Example </h2>    
       <h3 className="ml-5">🔸if raining = raincoat</h3>
            <h3 className="ml-5">🔸else no raincoat </h3>    
 

{/* end if else statement */}
{/* start es6 */}
<h2 className='javascriptmastery list-group-item ml-4 mt-4'>⭐Now it's time for modern javascript
<h3 className='ml-4 mt-4'>🔸Features of ECMAscript 2015 also known as ES6</h3>
<h3 className="javascriptmastery">⭐Let Variable
<br />
<h4>🔸let is a keyword that is used to declare a block scoped variable,  which is introduced in Es6.</h4>
</h3></h2>
<br/>
<h3 className= "  ml-4">Example:</h3>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">let myName = 'Meet Chothani';
<br/>console.log(myName);<br/>Output:Meet Chothani</li>
<li  className="list-group-item">myName = 'Chothani Meet';
<br/>console.log(myName); <br/>Output:Chothani Meet </li>
 </ul>
 <h2 className='javascriptmastery  ml-4 mt-4'>⭐Different between let and var </h2>
 <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">var variable <br/>var myName = 'Dev_Get';
<br/>console.log(myName); <br />myName = 'Dev_Get';
<br/>console.log(myName);<br/>Output :(Dev_Get , Dev_Get)</li>
<br/><br/>
<li className="list-group-item">let variable<br/>let myName = 'Dev_Get';
<br/>console.log(myName); <br />myName = 'Dev_Get';
<br/>console.log(myName);</li>
 </ul><br/>
 <h2 className='javascriptmastery  ml-4 mt-4 fs-1 border border-white '>⭐Template literals (Template Strings)
 <h4 className=''>🔸Template literals provide an easy way to interpolate variables 
and expressions into strings.
<br/>🔸we use this with the help of back tic(``)</h4>
 </h2>
<br/>
{/* start array */}
<h2 className='javascriptmastery list-group-item ml-2'>⭐Array in javascript 
<br/><h5>🔸When we feel like storing multiple values in one variable then instead of var, we will use an array.
In javascript, we have an array class, and arrays are the prototype of this class.</h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">var variable <br/>var myFriends = [' Ramesh',' Arjun',' Vishal'];
<br/>console.log(myFriends); <br /> Output :[ ' Ramesh', ' Arjun', ' Vishal' ]</li>
<br/><br/>
<li className="list-group-item">let myFriends = ['ramesh','arjun','vishal'];
<br/>console.log(myFriends[1]);<br />myName = 'Dev_Get';
<br/>console.log(myName); 
<br/>Output:arjun , Dev_Get</li>
 </ul><br/>
 <h2 className='javascriptmastery list-group-item ml-3 text-wrap mt-2 fs-1'>⭐if we want to get the single data at a time and also if we want to change the data.</h2>
 <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">var myFriends = [' Ramesh',' Arjun',' Vishal'];
 <br/>console.log('One of my friend' + myFriends);
 <br/> Output: One of my friend Ramesh, Arjun, Vishal
 </li>
 </ul>
<br/><br/>
<h2  className='javascriptmastery ml-3 mt-2 fs-1 list-group-item'>⭐ if we want to check the length of elements of an array</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">var brothers = [' Ramesh',' Arjun',' Vishal','Eshan'];
 <br/>console.log(brothers.length);<br/>Output : 4
 </li>
 </ul>
<br/><br/>
<h2  className='javascriptmastery list-group-item ml-3 mt-2 fs-1'>⭐Array․prototype․indexOf()</h2>
<h5  className='ml-3 mt-2 fs-1'>🔸Returns the first (least) index of an element within the array equal to an 
elememt, <br/>or -1 if none is found. It search the element from the 0th index number.
</h5>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">var Socialmedia = ["facebook","telegram","Instragram","Whatsapp","Linkedin"];
 <br/>console.log(Socialmedia.indexOf("Instragram", 1)); <br/>Output :2
 </li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery ml-3 mt-2 fs-1 list-group-item'>⭐Array․prototype․lastIndexOf() <br/>
 <p className='ml-3 mt-2 fs-1 text-dark'>🔸Returns the last (greatest) index of an element within the array equal to an element, or -1 none is found. It search the element last to first.</p>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">var Socialmedia = ["facebook","telegram","Instragram","Whatsapp","Linkedin"];
 <br/>console.log(Socialmedia.lastIndexOf("Instragram", 0));
 </li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery list-group-item ml-3'>⭐Array․prototype․includes() <br/>
 <h5 className='ml-3 mt-2 fs-1'>🔸Determines whether the array contains a value, returning true or false as appropriate.</h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">myFriendsNames = ["meet","chothani","kumar","youtuber","blogger"];
 <br/>console.log(myFriendsNames.includes("kumar"));
 </li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery p-4 list-group-item ml-3'>⭐Array․prototype․find()<br/>
 <h5 className='ml-3 mt-2 fs-1'>🔸arr․find(callback(element[, index[, array]])[, thisArg]) </h5>
</h2>
<br/><br/>
<h2 className='ml-3 mt-2 fs-1'>⭐we can write this in just two lines too<br/>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">const findElem =  prices.find((currVal)  400);
 <br/>console.log(findElem);
 </li>
 </ul>
<br/>
<h2 className='javascriptmastery list-group-item ml-3'>⭐ Array․prototype․sort()<br/>
 <h5 className='ml-3 mt-2 fs-1'>🔸The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
 </h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">const months = ['March', 'Jan', 'April' ,'Feb', 'Dec', 'Nov'];
 <br/>console.log(months.sort());
 </li>
 <li className="list-group-item">const array1 = [1, 30, 4, 21, 100000, 99]; <br/>console.log(array1.sort());</li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery list-group-item ml-3'>⭐Array․prototype․push() <br/>
 <h5 className='ml-3 mt-2 fs-1'>🔸The push() method adds one or more elements to the end of an array and returns the new length of the array.
 </h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">const animals = ['pigs', 'goats', 'sheep']; <br/>console.log(animals);
 <br/></li>
 <li  className="list-group-item">const count = animals.push('chicken', 'cats', 'cows');
 <br/> console.log(count);</li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery list-group-item ml-3'>⭐Array․prototype․unshift()<br/>
 <h5>🔸The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.</h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">myFriendsNames = ["meet","chothani","kumar","youtuber","blogger"];
 <br/>console.log(myFriendsNames);

 </li>
 <li className="list-group-item">myFriends = myFriendsNames .unshift('sita');
 <br/>console.log(myFriends);</li>
 <li className="list-group-item">const myNumbers = [1,2,3,5];<br/>myNumbers.unshift(4,6);
 <br/>console.log(myNumbers);</li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery list-group-item ml-3'>⭐Array․prototype․shift()<br/>
 <h5>🔸The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
 </h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">const plants = ['broccoli','cauliflower','kale','tomato','cabbage'];
   <br/>console.log(plants);<br/>console.log(plants.shift());<br/>console.log(plants);
 </li>
 </ul>
<br/><br/>
<h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐Array․prototype․splice() <br/>
 <h3>🔸Adds and/or removes elemets from an array</h3>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
 <li className="list-group-item">1] Add Dec at the end of an array<br/>const months = ['Jan','march','April','June','July'];
 <br/>const newMonth = months.splice(months.length,0,"Dec");
  <br/>console.log(months);
 </li>
 <li className="list-group-item"> 2] What is the return value of splice method ?<br/>const months = ['Jan','march','April','June','July'];
 <br/>const updateMonth = months.splice(1,1,'March');
  <br/>console.log(months);
 </li>
 <li className="list-group-item"> 3] update march to March (update) ?<br/>const months = ['Jan','march','April','June','July'];
 <br/>const newMonth = months.splice(months.length,0,"Dec");
  <br/>console.log(months);
 </li>
 </ul>
<br/><br/>
 
 {/* end array */}
  {/* start string */}
  <h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐Strings in javascript
  <br/>
  <h4>🔸A Javascript is zero or more characters written inside quotes.
  <br/>🔸 you can use single or double quotes.
  <br/> 🔸Strings can be created as primites, from sting literals, or as objects, using the string() constructor.</h4>
  </h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">let myName = "Meet Chothani"; <br/>onsole.log(myName);
  <br/>Output:Meet Chothani
  </li>
  <li className="list-group-item">let myChannelName = 'Meet Chothani';<br/>let ytName = new String("Meetu Gyan");
  <br/>console.log(ytName);<br/>
  </li>
  </ul><br/><br/>
  <h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐How to find the length of a string ?
  <br/><h5>🔸String.prototype.length</h5><h5>🔸Reflects the length of the string.</h5></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">let myName = "Meet Chothani";<br/>console.log(myName.length);
  </li></ul>
  <h2 className='javascriptmastery  ml-3 mt-2 fs-1'>⭐Escape Character</h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">let anySentence = "We are called the \"vikings\" from the north.";
  <br/>console.log(anySentence);</li></ul><br/><br/>
  <h2 className='javascriptmastery  ml-3 mt-2 fs-1'>⭐ If you don't want to mess simply use alternative quoates.</h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">let anySentence = 'We are called the "vikings" from the north.';
  <br/>console.log(anySentence);</li></ul><br/><br/>
  <h2 className='javascriptmastery  ml-3 mt-2 fs-1'>⭐Finding a string in an string
  <h5>🔸String․prototype․indexOf(searchvalue [, fromIndex])</h5><h5>🔸The indexOf() method returns the index of (the position of)
   the first occurence of a specified text in a string.</h5></h2><br/>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">const myBioData = "I am Meet Chothani";<br/>console.log(myBioData.indexOf('a'));
  <br/>ouput : 2</li></ul><br/><br/>
  <h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐Seaching for a string in a string
  <h5>🔸 String.prototype.search()</h5><h5>🔸The search() method searches a string for a specified value and returns the position of the match.
  </h5></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">const myBioData = "I am Meet Chothani";<br/>let sData = myBioData.search("Meet");
  <br/>console.log(sData);<br/>ouput :5</li></ul><br/><br/>
  <h2 className=' javascriptmastery ml-3 mt-2 fs-1'>⭐The search() method cannot take a second start positioning argument.
 </h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">There are three method for extracting a part of a  string :<br/>✅ slice(start, end) <br/>✅ substring(start, end)<br/>✅ substr(start, length)</li></ul><br/><br/>
  <h2 className=' javascriptmastery ml-3 list-group-item p-4'>⭐The slice() Method <h5>🔸The method takes 2 parameters: the start position and the end position ( end not included).</h5>
  <h5>🔸The slice() method selects the elements at the given start arguement and ends at, but does not include, the given end arguement.
  </h5></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">var str = "Apple, Banana, Kiwi";<br/>let res = str.slice(0,4);
  <br/>console.log(res);<br/>ouput :Appl</li>
 </ul><br/><br/>
  <h2 className='javascriptmastery list-group-item ml-3 p-4'>⭐Display only 280 characters of a string like the one used in twitter and instagram.
 <h5>🔸The search() method searches a string for a specified value and returns the position of the match.
  </h5></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">let myTweets = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
   pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
  <br/>let myActualTweet = myTweets.slice(0, 280);<br/>console.log(myActualTweet);<br/>
  console.log(myTweets.length);<br/>output :Lorem ipsum dolor sit amet............Nulla consequat mas,293</li>
  </ul><br/><br/>
  <h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐The substring() method
  <h5>🔸substring() is similiar to slice</h5><h5>🔸The difference is that substring() cannot except negative indexes.
  </h5></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">var str = "Apple, Banana, Kiwi";<br/>let res = str.substring(0,4);
  <br/>output :App</li>
  <li className="list-group-item">If we give negative values then the characters are counted from the 0th position.
  <br/>var str = "Apple, Banana, Kiwi";<br/>let res = str.substring(8, -2);<br/>console.log(res); <br/>ouput :Apple, B  </li>
</ul><br/><br/>
<h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐The substr() Method<h5>🔸substr() is similiar to slice()</h5><h5>🔸The difference is that the second parameter specifies the length of the extracted part.
</h5></h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">var str = "Apple, Banana, Kiwi";<br/>let res = str.substr(-4);<br/>console.log(res);
output:Kiwi</li></ul><br/><br/>
<h2 className='javascriptmastery list-group-item ml-3 p-4'>⭐The replace() method replaces a specified value with another value in a string
<h5>🔸String․prototype․replace(searchFor, ReplaceWith)</h5></h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">🔸Importance points of Replace method
<br/>✅ The replace() method does not change the string it is called on. It returns a new string.
<br/>✔By default, the replace() method replaces only the first match.<br/>✅ By deafult, the replace() method is case sensitive.</li></ul><br/><br/>
<h2 className='javascriptmastery list-group-item ml-3 p-4'>⭐String Characters<h5> ✅ charAt(position)</h5><h5>✅ charCodeAt(position).
<h5> ✅ Property access [ ]</h5>
</h5></h2>
<ul className="list-group list-group-horizontal ml-3 mt-2 d-flex flex-wrap">
<li className="list-group-item"> 1.charAt(position):<br/>The charAt() method returns the characters at a specified index(position) in a string.
<br/>let str = "HELLO WORLD";<br/>console.log(str.charAt(0));<br/>ouput : H</li><br/>
<li className="list-group-item"> 2.The charAtCode() mthod:<br/>The charAtCode() method returns the unicode of the character at a specified index in a string:
<br/>The method returns a UTF-16 code (an integer between 0 and 65535)<br/>
<br/>The unicode Standard provides a unique number for every character, no matter the platforms, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.
var str = "HELLO WORLD";<br/>console.log(str.charCodeAt(0));<br/>ouput : 72</li>
<li className="list-group-item"> 3.Property Access:<br/>ECMAscript 5 (2009) allows property access [] string.
<br/>let str = "HELLO WORLD";<br/>console.log(str[0]);<br/>output : H</li></ul>
<h2 className='javascriptmastery  ml-3 list-group-item p-4'>⭐Some usefull and Importance methods
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">toUpperCase:<br/>Using toUpperCase method all the words will be capital letter<br/>let myName = "vinod ";<br/>console.log(myName.toUpperCase());<br/>
output :VINOD </li>
<li className="list-group-item">toLowerCase:<br/>Using toLowerCase method all the words will be small letter<br/>let myName = "VINOD ";<br/>console.log(myName.toLowerCase());<br/>
output :vinod</li>
<li className="list-group-item">The concat() method:<br/>concat() joins two or more strings
<br/>let fName = "Meet";<br/>let lName = "Chothani";<br/>console.log(fName.concat(lName));
<br/> console.log(fName.concat(" " ,lName));<br/>output :MeetChothani , Meet Chothani
</li>
<li className="list-group-item">String․trim() <br/>
The trim() method removes whitespaces from both sides of a string.<br/>var str = "       HELLO WORLD      ";<br/>
<br/>console.log(str.trim());<br/>output :HELLO WORLD
</li>
<li className="list-group-item">Converting a string to an array<br/> A string can be converted to an array with the split() method.
<br/>var txt = "a,b,c,d,e"; <br/>console.log(txt.split(",")); (split on commas)
<br/>console.log(txt.split(" "));  (split on spaces)<br/>
console.log(txt.split("|")); (split on pipe) <br/>output :[ 'a', 'b', 'c', 'd', 'e' ],[ 'a,b,c,d,e' ],[ 'a,b,c,d,e' ]</li>
</ul><br/><br/>
<h2 className='javascriptmastery  ml-3 list-group-item p-4'>⭐Date and Time in javascript
<h5>🔸Javascript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 january 1970 UTC.
</h5><h5>🔸Creating Date objects:
<h5>🔸new Date(year, month, day, hours, minutes, seconds, milliseconds)</h5>
<h5>🔸There are 4 ways to create new date object</h5></h5></h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">1.let currDate = new Date(); <br/> console.log(currDate);<br/>output :2022-02-15T06:43:06.984Z</li>
<li className="list-group-item">2.console.log(new Date().toLocaleString());<br/>output :15/2/2022, 12:14:43 pm</li>
<li className="list-group-item">3console.log(new Date().toString());<br/>output :Tue Feb 15 2022 12:16:29 GMT+0530 (India Standard Time)
</li><li className="list-group-item">4. console.log(new Date());<br/>output :2022-02-15T06:47:35.574Z
</li><li className="list-group-item">Note :- Javascript counts month from 0 to 11.
<br/> January is 0 and december is 11.</li></ul><br/><br/>

<h2  className=" javascriptmastery ml-3  list-group-item">⭐Date.now()
<h5 className="  list-group-item">🔸Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since january 1, 1970 00:00:00 UTC.
</h5></h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item"> console.log(Date.now());<br/>output :1644908417589</li>
</ul><br/><br/>
<h2 className=' javascriptmastery ml-3 mt-2 fs-1'>⭐ How to get the individual Time
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">
const currDate = new Date();<br/>console.log(curTime.getTime());</li>
<li className="list-group-item">const curTime = new Date();<br/>console.log(curTime.getHours());
</li>
<li className="list-group-item">const curTime = new Date();<br/> console.log(curTime.getMinutes());</li>
<li className="list-group-item">const curTime = new Date();<br/>console.log(curTime.getSeconds());
</li></ul><br/><br/>
<h2 className='javascriptmastery ml-3 mt-2 fs-1'>⭐ How to get the individual Date
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">
const curTime = new Date();<br/>console.log(currDate.toLocaleString());</li>
<li className="list-group-item">const currDate = new Date();
</li>
<li className="list-group-item">const currDate = new Date();<br/>console.log(currDate.getFullYear()); </li>
<li className="list-group-item">const currDate = new Date();<br/> console.log(currDate.getMonth());</li>
<li className="list-group-item">const currDate = new Date();<br/> console.log(curDate.getDay());</li>

<li className="list-group-item">const currDate = new Date();<br/>console.log(currDate.getDate());
</li></ul><br/><br/>
<h2 className='javascriptmastery list-group-item  ml-3 mt-2 fs-1'>⭐Math Object in Javascript
<h5>🔸The javascript math object allows you to perform mathematical tasks on numbers.</h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">console.log(Math.PI);<br/></li>
<li className="list-group-item">Math․round();<br/>returns the value of x rounded to its nearest integer.
<br/>let num = 10.50;<br/>console․log(Math․round(num));<br/></li>
<li className="list-group-item">Math․pow()
<br/> Math․pow(x,y) returns the value of x to the power of y.
<br/>console.log(Math․pow(2,3));<br/></li>
<li className="list-group-item">Math․sqrt()
<br/>Math․sqrt(x) returns the square root of x.
<br/>console.log(Math.sqrt(25));
</li>
<li className="list-group-item">Math․abs()
<br/>Math.abs(x) returns the absolute (positive) value of  x.
<br/>console.log(Math.abs(-55));</li>
<li className="list-group-item">Math․ceil()<br/>
<br/> Math.ceil(x) returns the value of x rounded up to its nearest integer.
<br/> console.log(Math.ceil(99.1));</li>
<li className="list-group-item">Math․floor()
<br/> Math.floor(x) retuns the value of x rounded down to its nearest integer.
<br/>console.log(Math.floor(100.7));
</li>
<li className="list-group-item">Math․min()
<br/> Math.min() can be used to find the lowest value in a list of a program.
<br/>console.log(Math.min(0, 150, 30, 20, -8, -200));
</li>
<li className="list-group-item">Math․max()
<br/> Math.max() can be used to find the highest value in a list of program.
<br/> console.log(Math.max(0, 150, 30, 20, -8, -200));
</li>
<li className="list-group-item"> Math․random()
<br/> Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
<br/>console.log(Math.round(Math․random()*10));</li>
<li className="list-group-item">Math․trunc()
<br/> The trunc() method returns the integer part of a number.
<br/> console․log(Math․trunc(-99.9));</li></ul><br/><br/>
<h2 className='javascriptmastery list-group-item ml-3 p-4 text-black-100'>⭐ DOCUMENT OBJECT MODEL IN JAVASCRIPT
<p> 1] Window is the main container or we can say the global object and any opertations related to entire browser window can be a part of window object.

<br/> for example :- the history or to find the url etc.</p>
<p>
2] All the members like objects , methods or properties. If they are the part of the window object then we do not refer the window object. Since window is the global object so you do not have to write down window. It will be figured out by the runtime.

<br/>🔸Window has methods, properties and object.
<br/> ex :- setTimeout() or setInterval() are the methods where as document is the object of the window and it also has a screen object with properties describing the physical display.

<br/> 🔸Now, I know you have a doubt like we have seen the methods and object of the global object that is window. But what about the properties of the window object

<br/>🔸So exampl of window object properties are innerHeight, innerWidth and many more</p></h2>
<h2 className='javascriptmastery p-4 ml-3 text-black-100'>⭐ DOM VS BOM
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">For example :-
<br/> ✅Change the background color to red
<br/> ✅document․body․style.background = "red";</li>
<li className="list-group-item">✅The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some other that vary by browser). OR
<br/>✅In simple meaning all the window operations which comes under BOM are performed using BOM.
</li></ul><br/>
<h2 className='javascriptmastery ml-3 p-4 text-black-100'>⭐Navigate through DOM</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">1: document.documentElement
<br/>Returns the element that is the root element of the document.
</li>
<li className="list-group-item">1: document.documentElement
<br/>Returns the element that is the root element of the document.
</li>
<li className="list-group-item">2: document․head
</li>
<li className="list-group-item"> 3: document․body
</li>
<li className="list-group-item">4: document․body․chilNodes (include tab, enter and whitespaces)
</li>
<li className="list-group-item"> 5: document․children (without text nodes, only regular elements)
</li>
<li className="list-group-item">6: document․childNodes․length</li></ul><br/><br/>

  {/* end string */}
  { /* start EVENTS IN JAVASCRIPT*/}
  <h2 className='javascriptmastery list-group-item ml-3 mt-2 fs-1'>⭐Events in javascript
  <h5>🔸HTML events are "things" that happen to HTML elements.
  <br/>🔸An HTML event can be somthing the browser does, or something a user does.</h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item"> 🔺Here are some examples of HTML events :
<br/> ✅ An HTML web page has finished loading
<br/> ✅ An HTML input field was changed
<br/> ✅  An HTML button was clicked
<br/>✅  Often, when events happen, you may want to do something.
</li>
</ul><br/><br/>
<h2 className='javascriptmastery ml-3 p-4 text-black-100'>⭐ 4 ways of writing Events in Javascript
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">
1] usinjavascriptmastery  2] By calling a function ( we already seen and most common way of writing )
<br/> 3] Usinjavascriptmastery property and element.onclick )
<br/> 4] using Event Listeners ( addEventListener and IE's attachEvent )
</li></ul><br/><br/>

<h2 className=' javascriptmastery ml-3 list-group-item p-4 text-black-100'>⭐  What is Event Object ?
<p> 🔸Event Object is the parent object of the event object.
<br/>🔸For example MouseEvent, focusEvent, KeyboardEvent etc.

<br/>🔸 MouseEvent in Javascript
<br/> 🔸The MouseEvent Object is the events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.

<br/> 🔸KeyboardEvent in Javascript
<br/> 🔸Events that occur when user presses a key on the keyboard, belongs to the KeyboardEvent Object.

<br/> 🔸InputEvents in Javscript
<br/>🔸The onchange event occurs when the value of an element has been changed.

<br/>🔸 For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
</p></h2><br/>
{ /* end EVENTS IN JAVASCRIPT*/}
{ /* start JAVASCRIPT TIMING EVENTS*/}
<h2 className='javascriptmastery list-group-item p-4 ml-3 text-black-100'>⭐ JAVASCRIPT TIMING EVENTS
<br/><p>🔸The window object allows execution of code at specified time intervals. These time intervals are called timing events.

<br/> 🔸The two key methods to use with javascript are :

<br/> 🔸setTimeout(function, miiliseconds)
<br/> 🔸Executes a function, after waiting a specified number of milliseconds.

<br/> 🔸setInterval(function, milliseconds)
<br/> 🔸Same as setTimeOut(), but repeats the execution of the function continuously.

<br/> ✅ setTimeout()
<br/> ✅ clearTimeout()
<br/>✅ setInterval()
<br/> ✅ clearInterval()
</p>
</h2>

{ /* end JAVASCRIPT TIMING EVENTS*/}



{ /* start OBJECT ORIENTED JAVASCRIP*/}

<h2 className='javascriptmastery list-group-item p-4 ml-3 text-black-100'>⭐ OBJECT ORIENTED JavaScript
<br/><h5>🔸What is Object Literal ?

<br/> ✅Object Literal is simply a key: value pair data structure. Storing variables and functions together in one container, we can refer this as an object.

<br/> ✅object = schoolbag
</h5>
</h2>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
<li className="list-group-item">
🔸How to create an Object ?

console.log(myBioData.getData());</li>
</ul><br/>
<h2 className='javascriptmastery ml-3 list-group-item p-4 text-black-100'>⭐ What is THIS object ?
<br/><p>🔸The definition of "this" object is that it contain the current context. The This object can have different values depending on where it is placed.

<br/> For example 1
<br/>console.log(this);
<br/>🔸It refers to the current context and that is window global object.
</p>
</h2><br/>
{ /* end OBJECT ORIENTED JAVASCRIP*/}


{ /* DESTRUCTURING IN ES6 */}
<h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐ DESTRUCTURING IN ES6
  <h5>🔸The destructuring assignment syntax is a javascript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
  </h5></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">ARRAY DESTRUCTURING

 <br/> const myBioData = ['meet','chothani',26];
  
 <br/>let myFName = myBioData[0];
 <br/>let myLName = myBioData[1];
 <br/>let myAge = myBioData[2];
  
 <br/>console.log(myAge);
  </li>
  <li className="list-group-item">let [myFName, myLName, myAge] = myBioData;
  <br/>console.log(myLName);
  </li>
  <li className="list-group-item">We Can Add Values Too
  <br/>let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  <br/>console.log(myDegree);</li></ul><br/>
{ /* end DESTRUCTURING IN ES6 */}


{ /* start SPREAD OPERATOR */}
<h2 className='javascriptmastery ml-4 p-4'>⭐SPREAD OPERATOR</h2>
<hr className='bg-success'/><br/><br/><br/>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">const colors = ['red','green','blue','white','pink'];
  <br/> const myColors = ['red','green','blue','white','pink','yellow','black'];
  
  <br/>2nd time add one more color on top and tell we need to write it again on myColor array too.
  
  <br/>const MyFavColors = [ ...colors, 'yellow', 'black'];
  <br/>console.log(MyFavColors);</li></ul><br/><br/>
  <h2 className='javascriptmastery  p-4 ml-4'>⭐ES7 FEATURES</h2>
  <hr className='bg-success'/><br/><br/><br/>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">1: ARRAY INCLUDE
  <br/>const colors = ['red','green','blue','white','pink'];
  <br/>const isPresent = colors.includes('red');
  <br/>console.log(isPresent);</li>
  <li className="list-group-item">2: EXPONENTIAL OPERATOR (**)
  <br/>console.log(2**3);</li></ul><br/><br/>

  <h2 className='javascriptmastery  p-4 ml-4'>⭐ES8 FEATURES</h2>
  <hr className='bg-success'/><br/><br/><br/>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">1] String Padding
  <br/>padEnd() is a string method that is used to pad the end of a string with
   a specific string to a certain length</li>
  <li className="list-group-item">2] Object.values()</li>
  <li className="list-group-item">3] Object.entries</li></ul><br/><br/>
{ /* end SPREAD OPERATOR */}
{ /* start ES2020 */}
  <h2 className='javascriptmastery  p-4 ml-4'>⭐ES2020</h2>
  <hr className='bg-success'/><br/><br/><br/>
<ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
  <li className="list-group-item">BigInt
  <br/> let oldNum = Number.MAX_SAFE_INTEGER;
  <br/>console.log(oldNum);</li></ul><br/><br/>

{ /* end ES2020 */}
{ /* start ADVANCED JAVASCRIPT SECTION*/}

  <h2 className='javascriptmastery list-group-item p-4 ml-3'>⭐ADVANCED JAVASCRIPT SECTION
  <p>✅ Event Propagation (Event Bubbling and Event Capturing)
  <br/> check HTML file
  
  <br/>✅  Higher Order Function
  <br/> Function which takes another function as an arguements is called HOF. WO function jo dusre function ko as an argument accept karta hai.
  
  <br/> ✅  Callback Fucntion
  <br/> function which passed as an argument to another function is called CBF. A Callback function is a function that is passed as an argument to another function, to be called "call back" at a later time.</p></h2><br/><br/>
{ /* end ADVANCED JAVASCRIPT SECTION */}
{ /* start HOISTING IN JAVASCRIPT */}

  <h2 className='javascriptmastery list-group-item ml-3 p-4'>⭐HOISTING IN JAVASCRIPT
  <p>✅ Hoisting in javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code exceute.
  <br/>✅In ES2015 (a.k.a ES6), hoisting is avoided by using the let keyword instead of var. (The other difference is that variables declared with let are local to the surrounding block, not the entire function.)</p></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
    <li className="list-group-item">For example
    <br/> console.log(myName);</li>
    <li className="list-group-item">How it will be in output during creation phase
    <br/>var myName = undefined;
    <br/>console.log(myName);</li></ul><br/><br/>
    <h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐What is Scope Chain and Lexical Scoping in Javascript ?
    <p>✅The scope chain is used to resolve the value of variable names in JS.

    <br/>✅Scope chain in JS is lexically defined, which means that we can see what the scope chain will be by looking at the code.
    
    <br/> ✅At the top, we have the global scope, whuch is the window object in the browser.
    
    <br/> ✅Lexical scoping means Now, the inner function can get access to their parent functions variables but the vice-versa is not true.
    
     </p></h2>
    <br/><br/>
      <h2 className='javascriptmastery ml-3 list-group-item p-4'>⭐What is closure in Javascript ?
      <p>✅ A closure is the combination of a function bundled together (enclosed) with referances to its surrounding state (the lexical environment).

      <br/>✅ In other words,a closure gives you access to an outer function's scope from an inner function.
      
      <br/>✅ In javascript, closures are created every time a function is created, at function creation time.
      </p></h2>
      <br/><br/>
          
{ /* end HOISTING IN JAVASCRIPT */}
  { /* start JSON */}
  <h2 className='javascriptmastery ml-3'>⭐JSON
  <p className='ml-5'>✅ JSON.stringify turns a Javascript object into JSON text and stores that JSON text in a string, eg:
  </p></h2>
  <ul className="list-group list-group-horizontal ml-5 mt-2 d-flex flex-wrap">
    <li className="list-group-item">JSON.parse turns a string of JSON text into a Javascipt object, eg:

    <br/> var object_as_string_as_object = JSON.parse(object_as_string);
    <br/> typeof(object_as_string_as_object);</li></ul><br/><br/>
  { /* end JSON */}

            {/* pushpa code ended here */}



    </>
  )
}

export default JavascriptMastery;