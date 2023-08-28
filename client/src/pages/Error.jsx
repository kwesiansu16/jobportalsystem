import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    if(error.status=404){
return <Wrapper>
    <div>
        <img src={img} alt="not found"/>
        <h3>Page Not found</h3>
        <p>This page does not exist</p>
kaboraa        <Link to="/dashboard">Dashboard</Link>
    </div>
</Wrapper>
    }
  return (
    <Wrapper>
    <div>
        <h1>Something went wrong</h1>
        
   
    </div>
    </Wrapper>
  )
}

export default Error