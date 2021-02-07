import React, {useState} from 'react';

const Message = (props) => {

    const {token, id} = props

    
    const [message, setMessage] = useState('')
    

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}/messages`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            body: JSON.stringify({
                message: {
                    content: message
                }
            })
        })
        console.log('message', response)
        setMessage('')
    }

    
    return <form onSubmit={handleSubmit}>
        <input type='text' value={message} onChange={(event) => {
            setMessage(event.target.value)
        }}></input>
        <button type="button" class="btn btn-dark">Send</button>
    </form>
}

export default Message