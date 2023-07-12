import React from 'react'
import { Link } from 'react-router-dom'
import Clock from './Clock'
import { FaGithub } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav className='Nav-bar' >
        <div style={{display:'flex'}}>
        <h1 style={{font: '1.2em "Fira Sans", sans-serif'}}>Grinkevich A. <span style={{color:'yellow'}}>TMS</span></h1>
        <Link className='Nav-bar__link' style={{color:'white'}} to='https://24timezones.com/map_ru.php#/map'>
    <span style={{color:'white'}}><Clock/></span>
    </Link>
        </div>
       
        
        <span>
            <Link className='Nav-bar__link' to='/' style={{margin:'0 8px'}}>Description</Link>
            <Link className='Nav-bar__link' to='/git' style={{margin:'0 8px'}}><FaGithub /> GitSearch</Link>
            <Link className='Nav-bar__link' to='/page' style={{margin:'0 8px'}}>&#123;JSON&#125;Posts</Link>
        </span>
    </nav>
  )
}

export default Navigation