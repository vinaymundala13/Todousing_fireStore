import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className='header-box'>
    <div className='leftside'>
       <div className='img_tag'>
        <img src='https://media.istockphoto.com/id/1384700413/vector/to-do-list-with-clipboard.jpg?s=612x612&w=0&k=20&c=naH67PLQVD5JuC9Z96DFTw8gZT3waRNOgOL23UyHRFw='></img>
       </div>
       <div className='content'>
        <div className='big_heading'>
        Task Tornado
        </div>
        <div className='s_heading'>
        Your ultimate productivity companion, simplifying your life with intuitive task management, seamless organization, and effortless prioritization. Streamline your workflow and conquer your to-do list with ease
        </div>
       </div>
    </div>
    <div className='rightside'>
           <Link to="/LoginForm">      
           <button varient="primary" type="submit">Login</button>
           </Link>
           <Link to="/SignUpForm">
           <button varient="secondary" type="submit">Signup</button>           
           </Link>

    </div>

   </div>
  )
}

export default Header