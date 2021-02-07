const Profile = (props) => {

    const {user} = props
    console.log(user)

    const hasMessages = user.messages && user.messages.length > 0


    return <div class="container" className='profile'>
        
        <h2>Profile</h2>
        
        <h4>Messages</h4> 
        
        <div class="row"> {
            
            hasMessages? user.messages.map((message) => {
                return <div class="col-md-6">
                        
                        <div class="card"> 
                            
                            <div class="card-body" className='message'>
                                
                                <h3 class="card-title">{message.post.title}</h3>
                                
                                <p>Message: {message.content}</p>
                                <p>From: {message.fromUser.username}</p>
                            
                            </div>
                        </div>
                    </div>
                
            }) : ''
        }
        </div>
    </div>
}


export default Profile;