import React, { useState } from 'react'
import { IRepo } from '../models/models'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import Button from './Button'



const RepoCard = ({repo}:{repo:IRepo}) => {

const {addFavorite,removeFavorite} = useActions()
const {favorites} = useAppSelector(state => state.github)
const [isFav,setIsFav] = useState(favorites.includes(repo.html_url))

const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
}


 const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFav(false)
}

  return (
    <div className='repo-card' >
        <a className='a-link'  href={repo.html_url} target='_blank' rel="noopener noreferrer">
        <h2 style={{font: '1em "Fira Sans", sans-serif'}}>{repo.full_name}</h2>
        RepoCard
        <p>
            Forks:<span style={{font: '0.8em "Fira Sans", sans-serif',marginBottom:'2px'}}>{repo.forks}</span>
            Watchers:<span style={{font: '0.5em "Fira Sans", sans-serif'}}>{repo.watchers}</span>
        </p>
        <p style={{font: '0.5em "Fira Sans", sans-serif'}}>{repo?.description}</p>

        { !isFav && <Button 
        onClick={addToFavorite}
        style={{ backgroundColor: 'green' }}
        >
            Add
        </Button>}
        { isFav && <Button 
        onClick={removeFromFavorite}
        style={{ backgroundColor: 'red' }}
        >
            Remove
        </Button>}
        </a>
        
    </div>
  )
}

export default RepoCard
