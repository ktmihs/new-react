import React from 'react'

function User({user}){
    //if(!user) return null
    //props로 넘겨주지 않았을 때를 위해 error처리
    return(
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
        
    )
}
export default User