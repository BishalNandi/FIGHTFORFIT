// import React from 'react'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../App';
// import thapapic from "../images/thapa1.png";
import aboutpic from "../images/aboutpic.png";
// import {UserContext} from "../App";
import { Link, useHistory } from "react-router-dom";
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';

const Internship = () => {

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

          {/* INTERNSHIP/COURSES SECTION STARTED HERE  */}
           
 

 <div className='internship mt-2 rounded-xl p-4 border border-success rounded'>
 <p class=" text-success ml-1"><span className='font-weight-bold ml-1 text-dark'>✅Get your offer Letter<sup><LooksOneIcon/> </sup></span><br/>
 After the interview process, selected <br/> candidates are onboarded.<br/><br/><span className='text-dark font-weight-bold'>✅Internship Perks :</span> Completion<br/>
 certificate, LOR , Offer Letter, etc </p><br/>
 
   <p class=" text-dark ml-5"> <span className='font-weight-bold ml-1 text-dark'>✅Fill the Form </span><sup><LooksTwoIcon/></sup><br/><span className='mt-3'>First you have to fill the opportunity form.<br/> You can fill it by simply clicking on<br/> the heading. </span>
 </p>
 
   <p class=" text-dark ml-4"><span className="font-weight-bold ml-1 text-dark">✅Shortlisting & Interview Scheduling<sup><Looks3Icon/></sup> </span><br/> 
 <span className="mt-4">After the form  is received by the <br/>organization they will shortlist<br/>  the worthy  candidate & then <br/> the selected candidate has <br/> to go through an interview process.</span></p>
 
   
 
 
 
 </div> 

 <h1 className=" text-xl text-center mt-5 ">⭐ Current Internship Opportunities/courses❕  <hr className='bg-warning ml-5 mr-5'/></h1>
 
 <marquee className='text-info mt-2 '>PLEASE NOTE: INTERNSHIP PERKS DIFFER AS PER COMPANY/ORGANIZATION NORMS.  <a className="btn btn-light btn-lg" href="#" role="button">Learn more</a></marquee>
 
 <div className='ml-5 mr-5 '>
 
   <ul class="list-group ml-5 mr-5">
 <button><li class="list-group-item text-primary ">⭐Internship at Aashman Foundation</li></button>
 
 <button><li class="list-group-item text-primary "><a className="li-ic " href='hr-interns@thegaogroup.com'>⭐Internship at Gao Tek Inc</a></li></button>
 <button><li class="list-group-item text-primary "><a className="li-ic " href=' https://docs.google.com/forms/d/e/1FAIpQLSf-DFhuVEE2iaSHp_d3r7bf2NNX9vG_1MOi9c_-KMYZpPxtBA/viewform'>⭐Free Internships from Zomato: Anyone Can Apply </a></li></button>
 <button><li class="list-group-item text-primary "><a className="li-ic " href='https://bit.ly/3Jw5uMY'>⭐Nesternships Online Internships by Nestle </a></li></button>
 <button><li class="list-group-item text-primary "><a className="li-ic " href='https://lnkd.in/g2Krkkc2'>⭐FREE OFFLINE INTERNSHIPS AND PROJECTS FROM CAMINO INFOTECH (online available)
FREE 3 MONTHS INTERNSHIP PROGRAM
 </a></li></button>
 <button><li class="list-group-item text-primary "><a className="li-ic " href=' https://futuremug.co.in/job_listing/workintegratedlearningprogrammehr'>⭐Futuremug internship</a></li></button>

 <button><li class="list-group-item text-primary ">⭐Internship at TopTroveFoundation</li></button>
 
 
 <button><li class="list-group-item text-primary ">⭐Accenture Free Developer Certified Course</li></button>
 
 <button><li class="list-group-item text-primary ">⭐Top 5 Internship In Govt Sector for Indian Students <span class="badge badge-pill badge-danger">AvailableForLimitedTime</span></li></button>
 
 <button><li class="list-group-item text-primary ">⭐Top 5 Internship In Govt Sector for Indian Students <span class="badge badge-pill badge-danger">AvailableForLimitedTime</span></li></button>
 
 <button><li class="list-group-item text-primary ">⭐Top 5 Internship In Govt Sector for Indian Students <span class="badge badge-pill badge-danger">AvailableForLimitedTime</span></li></button>
 
 <button><li class="list-group-item text-primary ">⭐Top 5 Internship In Govt Sector for Indian Students <span class="badge badge-pill badge-danger">AvailableForLimitedTime</span></li></button>
 
 
 <button type="button" class="btn btn-outline-secondary mt-4 mb-4">MoreOpportunities <span class="badge badge-pill badge-danger">AvailableSoon</span></button>

 
 </ul>
 </div>
 
             
 
 
 
               {/* INTERNSHIP/CERTIFICATE SECTION ENDED HERE */}
    
    
    
    </>
  )
}

export default Internship;