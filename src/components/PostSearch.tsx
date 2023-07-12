




import React, { useEffect, useState } from 'react';
import { useInput } from '../hooks/input';
import { useDebounce } from '../hooks/debounce';
// import axios from '../axios';
import axios from 'axios';
import { IPost } from '../models/models';
import { useNavigate } from 'react-router-dom';





export function PostSearch() {
    const navigate = useNavigate()
    const input = useInput('');
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(input.value);
    const [searchResults, setSearchResults] = useState<IPost[]>([]);
  
    async function searchPosts() {
      try {
        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
          params: {
            search: debounced,
          },
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  
    useEffect(() => {
      if (debounced.length > 3) {
        searchPosts().then(() => setDropdown(true));
      } else {
        setSearchResults([]);
        setDropdown(false) 
      }
    }, [debounced]);
  
    const filteredResults = searchResults.filter((post) => {
      const lowercasedTitle = post.title?.toLowerCase();
      const lowercasedQuery = debounced.toLowerCase();
      return lowercasedTitle && lowercasedTitle.includes(lowercasedQuery);
    });
  
    return (
        <div style={{ marginBottom: '4px', position: 'relative' }}>
        <input
          style={{ padding: '2px 4px', border: '', outline: 'none', width: '100%', height: '42px' }}
          type="text"
          placeholder="post search..."
          {...input}
        />
  
        {dropdown && (
          <ul style={{ position: 'absolute', left: '0', right: '0', top: '42px', height: '200px',listStyle: 'none', overflow: 'auto', padding: '0', background: 'white' }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((post) => (
                <li
                  className="li-login"
                  key={post.id}
                  onClick={() => navigate(`/post/${post.id}`)}
                >
                  <h3>{post.id}:{post.title}</h3>
                </li>
              ))
            ) : (
              <li style={{ padding: '10px',height:'200px',display:'flex' , alignItems:'center',justifyContent:'center'}}>No posts named:   <span style={{fontSize:'20px',color:'red'}}>{input.value}</span> !</li>
            )}
          </ul>
        )}
      </div>
    );
  }