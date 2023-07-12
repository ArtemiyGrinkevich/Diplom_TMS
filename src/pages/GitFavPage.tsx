import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { useActions } from '../hooks/actions';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Button from '../components/Button';

const FavPage = () => {
  const { favorites } = useAppSelector((state) => state.github);
  const { removeFavorite } = useActions();
  const [selectedFavorites, setSelectedFavorites] = useState<string[]>([]);

  const toggleFavoriteSelection = (favorite: string) => {
    if (selectedFavorites.includes(favorite)) {
      setSelectedFavorites(selectedFavorites.filter(f => f !== favorite));
    } else {
      setSelectedFavorites([...selectedFavorites, favorite]);
    }
  };

  const removeSelectedFavorites = () => {
    selectedFavorites.forEach(favorite => removeFavorite(favorite));
    setSelectedFavorites([]);
  };

  if (favorites.length === 0) {
    return (
      <>
        <nav className='Nav-bar-git'>
          
          <h1 style={{ font: '1.3em "Fira Sans", sans-serif' }}>
          <Link className='link'  to='https://github.com/'>
            Git<span style={{ font: '1.1em "Fira Sans", sans-serif', fontWeight: '700' }}>Hub<FaGithub /></span>
            </Link>
          </h1>
          
          
          <span>
            <Link className='Nav-bar__link-git' to='/search' style={{ margin: '0 10px' ,borderBottom:'1px solid'}}>Git-search</Link>
            <Link className='Nav-bar__link-git' to='/favorites' style={{borderBottom:'1px solid'}}>Favorites</Link>
          </span>
        </nav>
        <p style={{color:'rgba(0, 0, 0, 0.604)',font: '1.3em "Fira Sans", sans-serif',lineHeight: '1.5',padding:'1rem'}}>Favorites is empty</p>
      </>
    );
  }

  return (
    <>
      <nav className='Nav-bar-git'>
      <h1 style={{ font: '1.3em "Fira Sans", sans-serif' }}>
          <Link className='link' to='https://github.com/'>
            Git<span style={{ font: '1.1em "Fira Sans", sans-serif', fontWeight: '700' }}>Hub<FaGithub /></span>
            </Link>
          </h1>
        <span>
          <Link className='Nav-bar__link-git' to='/search' style={{ margin: '0 10px' }}>Git-search</Link>
          <Link className='Nav-bar__link-git' to='/favorites'>FavPage</Link>
        </span>
      </nav>

      <div style={{ display:'flex',justifyContent:'center',textAlign: 'center', marginBottom: '10px' }}>
        <p>Total: {favorites.length}</p>
        {selectedFavorites.length > 0 && (
          <Button onClick={removeSelectedFavorites} style={{ background: 'salmon', width:'130px' }}>
            Remove Selected: {selectedFavorites.length}
          </Button>
        )}
        
      </div>

      <ul style={{ textDecoration: 'none' }}>
        {favorites.map(f => (
          <li
          className={selectedFavorites.includes(f) ? 'selected' : ''}
            style={{
              
              listStyleType: 'none',
              border: 'none',
              borderRadius:'10px',
              maxWidth: '560px',
              margin: '5px auto',
              padding: '3px 5px',
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: selectedFavorites.includes(f) ? 'mistyrose' : 'inherit',
              cursor:'pointer'
              
            }}
            key={f}
            onClick={() => window.open(f, '_blank')}
          >
            
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type='checkbox'
                checked={selectedFavorites.includes(f)}
                onChange={() => toggleFavoriteSelection(f)}
                onClick={e => e.stopPropagation()}
                
                className="checkbox-input"
              />
              <span style={{ marginLeft: '5px' }}>{f}</span>
            </label>
            <Button 
            onClick={(e) => {
              e.stopPropagation();
              removeFavorite(f); 
            }} 
            style={{ background: 'lightSalmon' }}

            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
     
    </>
  );
};

export default FavPage;