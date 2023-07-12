import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    
    <div className='footer'><Link className='link' style={{color:'white'}} to='https://github.com/'>
    Git<span style={{ font: '1.1em "Fira Sans", sans-serif', fontWeight: '700' }}>Hub<FaGithub /></span>
    </Link>


    <Link className='link' style={{color:'white'}}  to='https://teachmeskills.by/'>
    &lt;TeachMeSkills/&gt; 
    </Link>

   <Link className='link' style={{color:'white'}} to='https://www.linkedin.com/in/artemiy-grinkevich-31976a266/'>
    <span style={{color:'white'}}>Linked</span><AiFillLinkedin/>
    </Link></div>
    
    
  )
}

export default Footer