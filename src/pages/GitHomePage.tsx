import React, { useEffect, useState } from 'react'
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/gitHub-slice-api/gitHub.api'
import { useDebounce } from '../hooks/debounce'
import RepoCard from '../components/RepoCard'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { RotatingLines } from 'react-loader-spinner'

const HomePage = () => {
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [search,setSearch]=useState('')
    const [dropdown,setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const {isLoading,isError,data} = useSearchUsersQuery(debounced,{
        skip: debounced.length<3,
        refetchOnFocus:true
    })
    const [fetchRepos, {isLoading:areReposLoading,data:repos}] = useLazyGetUserReposQuery()
    useEffect(()=>{
        setDropdown(debounced.length >3 && data?.length! >1)
    },[debounced,data])
    
    const clickHandler = (username:string) => {
        fetchRepos(username)
        setDropdown(false)
    }

    
      
  return (
  <>
   
     
   <nav className='Nav-bar-git' >
   <h1 style={{ font: '1.3em "Fira Sans", sans-serif' }}>
          <Link className='link' to='https://github.com/'>
            Git<span style={{ font: '1.1em "Fira Sans", sans-serif', fontWeight: '700' }}>Hub<FaGithub /></span>
            </Link>
          </h1>
        <span>
            <Link className='Nav-bar__link-git'  to='/search' style={{margin:'0 10px',borderBottom:'1px solid'}}>Git-search</Link>
            <Link className='Nav-bar__link-git'  to='/favorites' style={{borderBottom:'1px solid'}}>Favorites</Link>
        </span>
    </nav>
   
    
    <div className='home-container'>
        {isError && <p style={{textAlign:'center',color:'red'}}>ERROR!!!</p>}
        <div style={{position:'relative',width:'560px'}}>
            <input 
            type='text'
            style={{border:'1px solid lightGray',padding:'2px 4px',width:'100%',outline:'none',height:'42px', marginBottom:'2px'}}
            placeholder = 'Search for Github username...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
            {!data && <h1 style={{padding:'1rem',color:'rgba(0, 0, 0, 0.604)',font: '1.5em "Fira Sans", sans-serif',lineHeight: '1.5'}} >Here yoy can search github users/repos</h1>}
            {dropdown && <ul style={{listStyle:'none',maxHeight:'200px', position:'absolute',top:'42px',left:'0',right:'0',boxShadow:' 0px 8px 13px -7px rgba(0, 0, 0, 1)',background:'white',overflowY:'scroll'}}>
            {isLoading && <p style={{textAlign:'center'}}>
                <RotatingLines
        
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
    /></p>}
            {data?.map(user => (
                <li 
                className='li-login'
                key={user.id}
                onClick={()=>clickHandler(user.login)}>
                    {user.login}
                
                </li>
            ))}
            
        </ul>}
        <div className='container'>
            {areReposLoading && <p style={{textAlign:'center'}}>
            <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
    />
</p>}
            {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
        </div>
        </div>
        
        
    </div>
    
    </>
  )
}

export default HomePage



