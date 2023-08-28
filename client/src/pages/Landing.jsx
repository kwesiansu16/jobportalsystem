import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';



const Landing = () => {
  return (
    <div>
      <Wrapper>
 <nav>
<Logo/>
 </nav>
 <div className='container page'>
  <div className="info">
    <h1>Job Tracking</h1>
    <p>
    I'm baby jawn ugh tumeric pinterest, XOXO hashtag cupping mumblecore solarpunk. Jean shorts pop-up neutra hot chicken ethical hammock next level marxism banh mi keffiyeh tattooed cardigan narwhal. Thundercats hammock vinyl, bitters YOLO lyft banh mi same. Mumblecore you probably haven't heard of them organic mukbang sustainable. 
    </p>
   <Link to="/register" className='btn register-link'>
    Register
   </Link>
   <Link to="/register" className='btn register-link'>
    Login / Demo User
   </Link>
  </div>
  <img src={main} alt='main' className='img main-img'/>
 </div>
      </Wrapper>
      </div>
  )
};

// const Wrapper = styled.div`
// background:red;
// h1{
//   color:blue;
// }
// `

export default Landing