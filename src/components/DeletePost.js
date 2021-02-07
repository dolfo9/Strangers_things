import React from 'react'

const DeletePost = (props) => {

    const {id, fetchPosts, token} = (props)


    if (!token) {
      return
    }

    const handleDelete = async () => {
        const response = await fetch
        (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}`,
        {
          method: 'DELETE',
            headers:{
              'Content-type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }
        )
        
        console.log(response)
        fetchPosts()
    }

    return <button onClick={handleDelete}>Delete</button>
}

export default DeletePost