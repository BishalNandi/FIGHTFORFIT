// import React from 'react';
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../App';
// import thapapic from "../images/thapa1.png";
import aboutpic from "../images/aboutpic.png";
// import {UserContext} from "../App";
import { Link, useHistory } from "react-router-dom";
import "./Project.css";

const ProjectSection = () => {

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
       {/* PROJECT SECTION STARTED HERE */}
  
       <section className="mt-4 underline">
        <div className="">
          <div className="">
            <h2 className="text-lg underline underline-offset-1 text-indigo-500 tracking-widest font-large title-font mb-1 text-center">POPULAR PROJECTS</h2>
            <p className=" text-xl text-center  ">HTML✅CSS✅TAILWINDCSS✅FIGMA✅JAVASCRIPT✅REACT✅NODEJS✅ MONGODB✅EXPRESSJS✅</p>
            

            <marquee className='text-danger mt-2 '>SC STANDS FOR SOURCE-CODE -- FIND THE NOTES WITH THE SOURCE CODE FILE PROVIDED IN A .PDF  <a className="btn btn-light btn-lg" href="#" role="button">Learn more</a></marquee>

            <h3 className='changingtwo text-center'> Get access to mini projects like : <span className="change_content"></span></h3>
            
          </div>
          

          <div className="card-columns mt-5 overflow-hidden">

          <div className="card  p-4 overflow-hidden border border-secondary rounded ">
            <img className="px-20" src="./images/autorefresh.png" alt="Card image cap" />  
             <div className="card-body">
             <h5 className="card card-title">Auto refresher </h5>
             <p className="card-text">This is a auto refresher project. Technologies used : HTML✅</p>

              <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/autorefresh.git">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="www.google.com" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/clockr.jpg" alt="Card image cap" />  
             <div className="card-body">
             <h5 className="card card-title">Digital Clock</h5>
             <p className="card-text">This is a digital clock project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>
             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="#">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>

            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/calc.jpg" alt="Card image cap" />  
             <div className="card-body">
             <h5 className="card card-title">Digital Calculator</h5>
                <p className="card-text">This is a digital Calculator project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
              <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="#">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>

          

            
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className='px-20' src="./images/snake.jpg" alt='error loading' />
            <div className="card-body">
            <h5 className=" card card-title">Snake Game</h5>
              <p className="card-text">This is a snake game. I know you like playing so I have created  with the use of these Technologies Used : HTML✅CSS✅JAVASCRIPT✅</p>
<p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/snake_game">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/tempcv.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title">Temperature Converter</h5>
               <p className="card-text">This is a Temperature Converter project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
            <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="#">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


        <div className="card  p-4 overflow-hidden border border-secondary rounded">
        <img className="px-20" src="./images/form.jpg" alt="Card image cap" />  
        <div className="card-body">
           <h5 className="card card-title">Form with validation</h5>
           <p className="card-text">TThis is a Form with validation project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
           <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="#">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


          <div className="card  p-4 overflow-hidden border border-secondary rounded">
          <img className='px-20' src="./images/battleship.jpg" alt='error loading' />
          <div className="card-body">
                  <h5 className="card card-title">Battleship Game</h5>
                  <p className="card-text">This is Battleship Game project which is perfectly working. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
                    <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>


             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}


    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/table_">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/nuber.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title">Number Gussing</h5>
               <p className="card-text">This is a Number Gussing project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
            <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/Number_gussing_game">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


        <div className="card  p-4 overflow-hidden border border-secondary rounded">
        <img className="px-20" src="./images/happybirthday.png" alt="Card image cap" />  
        <div className="card-body">
           <h5 className="card card-title">Happy birthday</h5>
           <p className="card-text">This is a happy birthday project this is  a mini project. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
           <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/happybirthday">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


          <div className="card  p-4 overflow-hidden border border-secondary rounded">
          <img className='px-20' src="./images/imagefloat.png" alt='error loading' />
          <div className="card-body">
                  <h5 className="card card-title">Image Floating</h5>
                  <p className="card-text">This is a Image floating project which is perfectly working. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
                    <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/imagefloat">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>

            
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/weather.jpg" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title">Weather App</h5>
                <p className="card-text"> This is a weather app project. Technologies used :HTML✅CSS✅JAVASCRIPT✅</p>
            <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/weather_app">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>

            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/quotes.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title"><button>Quotes website</button></h5>
               <p className="card-text"> This is a Quotes website you can read and tweet number of quotes. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
           <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/quotes_website">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/movingcar.PNG" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title"><button>Moving Car</button></h5>
                <p className="card-text"> This is a Moving Car , this is a mini project . It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
         
             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/Moving_car">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>
          

            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/slotmachine.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title"><button>Slot Machine Game</button></h5>
               <p className="card-text"> This is a Slot Machine Game. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
           <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="#">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/age.PNG" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title"><button>Age Calculator</button></h5>
                <p className="card-text"> This is a Age Calculator project. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
         
             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/Age_calculator">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>
          

           
            
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/boookmark.png" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title"><button>Book mark</button></h5>
                <p className="card-text"> This is a bookmark website.this is very easy.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅</p>
            <p className='text-primary font-weight-bold '>HTML✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/bookmark">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>

            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/list.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title"><button>diffrent types of list</button></h5>
               <p className="card-text"> This is a list website. Technologies used : HTML✅</p>
           <p className='text-primary font-weight-bold '>HTML✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/list">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


         <div className="card  p-4 overflow-hidden border border-secondary rounded">
         <img className="px-20" src="./images/animated.png" alt="Card image cap" />  
         <div className="card-body">
            <h5 className="card card-title"><button>Animated clothing website</button></h5>
            <p className="card-text"> This is a Animated clothing. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
         <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/Animated_shoppingcard">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


           
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/tictac.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title"><button>Tic tac Game</button></h5>
               <p className="card-text"> This is a Tic tac Game. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
           <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/tic_tac_game">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>
            
            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/todolist.png" alt="Card image cap" />  
             <div className="card-body">
                <h5 className="card card-title"><button>To do List</button></h5>
                <p className="card-text"> This is a to do list. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
            <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅Nodejs✅Mongodb✅</p>

             <hr className='bg-warning'/>

             {/* button work started here  */}
                
             <div class="btn-group dropright">
  <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    SC/NOTES
  </button>
  <div class="dropdown-menu border-info rounded">
    {/* <!-- Dropdown menu links --> */}
    <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/todo_list_with-node-js">SourceCode+Notes</a></li>
    <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
    
    {/* <li>SourceCode+Notes</li> */}
    
  </div>
  <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
</div>
              </div>

            </div>


            <div className="card  p-4 overflow-hidden border border-secondary rounded">
            <img className="px-20" src="./images/search.png" alt="Card image cap" />  
            <div className="card-body">
               <h5 className="card card-title"><button>Photo search</button></h5>
               <p className="card-text"> This is a Image search website you can find any images through this website. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : ReactJs✅CSS✅JAVASCRIPT
               ✅</p>
            <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>
   
                <hr className='bg-warning'/>
   
                {/* button work started here  */}
                   
                <div class="btn-group dropright">
     <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       SC/NOTES
     </button>
     <div class="dropdown-menu border-info rounded">
       {/* <!-- Dropdown menu links --> */}
       <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/image_search">SourceCode+Notes</a></li>
       <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
       
       {/* <li>SourceCode+Notes</li> */}
       
     </div>
     <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
   </div>
                 </div>
   
               </div>
   
   
              
               <div className="card  p-4 overflow-hidden border border-secondary rounded">
               <img className="px-20" src="./incre.png" alt="Card image cap" />  
               <div className="card-body">
                  <h5 className="card card-title"><button>Increament & Decreament operator</button></h5>
                  <p className="card-text"> This is a Increament & Decreament operator. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : ReactJS✅CSS✅JAVASCRIPT✅</p>
              <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅</p>
   
                <hr className='bg-warning'/>
   
                {/* button work started here  */}
                   
                <div class="btn-group dropright">
     <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       SC/NOTES
     </button>
     <div class="dropdown-menu border-info rounded">
       {/* <!-- Dropdown menu links --> */}
       <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/Increment-decrement">SourceCode+Notes</a></li>
       <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
       
       {/* <li>SourceCode+Notes</li> */}
       
     </div>
     <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
   </div>
                 </div>
   
               </div>
               
               <div className="card  p-4 overflow-hidden border border-secondary rounded">
               <img className="px-20" src="./images/todolist.png" alt="Card image cap" />  
                <div className="card-body">
                   <h5 className="card card-title"><button>Digital Clock</button></h5>
                   <p className="card-text"> This is a to do list. It looks hard to build but not at all hard.Explore the notes/video to understand the topics in depth.Also enroll for the doubt clearing session for live demonstration by our experts. Technologies used : HTML✅CSS✅JAVASCRIPT✅</p>
               <p className='text-primary font-weight-bold '>HTML✅CSS✅JAVASCRIPT✅Nodejs✅Mongodb✅</p>
   
                <hr className='bg-warning'/>
   
                {/* button work started here  */}
                   
                <div class="btn-group dropright">
     <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       SC/NOTES
     </button>
     <div class="dropdown-menu border-info rounded">
       {/* <!-- Dropdown menu links --> */}
       <li className='bg-light border border-secondary rounded'><a href="https://github.com/PUSHPAGHJH/todo_list_with-node-js">SourceCode+Notes</a></li>
       <li className='bg-light overflow-hidden border border-secondary rounded '><a className='' href="#">Video Tutorial</a></li>
       
       {/* <li>SourceCode+Notes</li> */}
       
     </div>
     <button type="button" class="cursor-na btn btn-secondary space-x-2 ml-3"><a href="#" class="badge badge-danger">Available Soon</a>Virtual Meet</button>
   </div>
                 </div>
   
               </div>
   
   
             
   
          
            </div>


            
            </div>
            
            
      </section>
      </>
  )
}
export default ProjectSection;
