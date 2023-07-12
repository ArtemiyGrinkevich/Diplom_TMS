import React from 'react'
import { IPost } from '../models/models'
import { useNavigate } from 'react-router-dom'




interface PostCardProps {
    post : IPost
}


const PostCard = ({post}:PostCardProps) => {
  const navigate = useNavigate()
  const clickHandler = () => navigate(`/post/${post.id}`)
  return (
    
    <div style={{cursor:'pointer'}}>
        <div className='postCard' onClick={clickHandler}><p style={{fontSize:'20px'}}>{post.id}:{post.title}</p></div>
    </div>
  )
}

export default PostCard

