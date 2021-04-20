import React from 'react' 

function User({user}){
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList2(){
    const users=[
        {
            id: 1,
            username:'a',
            email:'first@example.com'
        },
        {
            id: 2,
            username:'b',
            email:'second@example.com'
        },
        {
            id: 3,
            username:'c',
            email:'third@example.com'
        }
    ]
    return(
        <div>
            {   //배열을 랜더링 할 때는 key를 설정해줘야 효율적으로 사용할 수 있다!
                users.map(
                    user=>(<User user={user} key={user.id}/>)
                )
            }

            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>
    )
}

{/*
 return(
        <div>
            <div>
                <b>{users[0].username}</b>
                <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>({users[2].email})</span>
            </div>
        </div>
    )

*/}
export default UserList2