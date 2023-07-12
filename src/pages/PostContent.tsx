import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import { IPost } from '../models/models'
import { RotatingLines } from 'react-loader-spinner'



const PostContent = () => {
    const params = useParams<'id'>()
    const [post,setPost] = useState<IPost | null>(null)
    const [loading,setLoading] = useState(true)
async function fetchPostContent() {
    const response = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    setPost(response.data)
    setLoading(false)
}
useEffect(()=>{
    fetchPostContent()
},[])

    if (loading) return <p style={{textAlign:'center'}}>
        <div style={{padding:'2rem'}}>
        <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
        </div>
  </p>
  return (
    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
         <h1>
        <span style={{color:'rgba(0, 0, 0, 0.604)',font: '1.1em "Fira Sans", sans-serif',lineHeight: '1.5'}}>PostContent: {params.id}</span>
        <hr style={{margin:'1rem'}}/>
        <span style={{color:'rgba(0, 0, 0, 0.604)',font: '1.1em "Fira Sans", sans-serif',lineHeight: '1.5'}}>{post?.body}</span>
        
    </h1>
    </div>
   
  )
}

export default PostContent




