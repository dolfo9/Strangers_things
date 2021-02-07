import React, { useState } from 'react'

const PostAdd = (props) => {
    const {token, post, setPost} = props
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')

 const onSubmit = async (event) => {
     event.preventDefault()
     const response = await fetch ('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts',
     {
         method: 'POST',
         headers: {
             'Content-type':'application/json',
             'Authorization': `Bearer ${token}`
         },
         body: JSON.stringify ({
             post: {
                 title: title,
                 description: description,
                 price: price
             }
         })
     })

     const {data} = await response.json()
     setPost([data.post, ...post])
     setTitle('')
     setDescription('')
     setPrice('')
}

return <>
<h2>Add Post</h2>
<form onSubmit={onSubmit}>
<input type="text" value={title} placeholder="title" onChange={(event) => {setTitle(event.target.value)}}></input>
<input type="text" value={description} placeholder="description" onChange={(event) => {setDescription(event.target.value)}}></input>
<input type="text" value={price} placeholder="price" onChange={(event) => {setPrice(event.target.value)}}></input>
<button type="button" class="btn btn-success">Submit Post</button>
</form></>
}

export default PostAdd; 