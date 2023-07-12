import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

import LanguageChange from '../components/LanguageChange'
const Git = () => {
  return (
    <>
    <nav className='Nav-bar-git' style={{marginBottom:'2.5rem'}} >
    <h1 style={{ font: '1.3em "Fira Sans", sans-serif' }}>
          <Link className='link' to='https://github.com/'>
            Git<span style={{ font: '1.1em "Fira Sans", sans-serif', fontWeight: '700' }}>Hub<FaGithub /></span>
            </Link>
          </h1>
          
        <span >
            <Link className='Nav-bar__link-git'  to='/search' style={{marginRight:'20px',fontSize:'20px',borderBottom:'1px solid'}}>Git-search</Link>
            
            <Link className='Nav-bar__link-git'  to='/favorites' style={{fontSize:'20px',borderBottom:'1px solid'}}>Favorites</Link>
            
        </span>
        
    </nav>
    <LanguageChange  russianText="Тут можно искать репозитории юзеров & размещать их в любимые." englishText="Here you can search user repos & push it to favorites." />
    
    </>
    
  )
}

export default Git