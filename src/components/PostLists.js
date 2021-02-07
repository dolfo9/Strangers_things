import React, { useState, useEffect } from 'react';
import DeletePost from './DeletePost';
import PostAdd from './PostAdd';
import Message from './Message';


const PostList = ({token}) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`,
    {
      method: 'GET',
        headers:{
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }
    )
    
    const {data} = await response.json();
    //console.log (data.posts)
    setPosts (data.posts)

    }

    useEffect (async () => {
        fetchPosts()
      },[]);
      return <>
      
      {token? <PostAdd token={token} post={posts} setPost={setPosts}></PostAdd>: ''}
      <div class="container" className='postList'>
      <h2>Posts</h2>
      <div class="row">
      {
        posts.map ((post) => {    
          
          return  <div class="col-md-6" key={post._id}>
            <div class="card">
              
              <div class="card-body">
                
                <h3 class="card-title">{post.title}</h3>
                  
                  <p class="card-text">From: {post.author.username}</p>
                  
                  <p class="card-text">{post.price}</p>
                    
                    {post.isAuthor ? <DeletePost fetchPosts={fetchPosts} id={post._id} token={token}/> : ''}
                    {!post.isAuthor && token ? <Message id={post._id} token={token}/> : ''}
                
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div></>

}

export default PostList;