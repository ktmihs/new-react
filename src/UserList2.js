import React from 'react' 
// CreateUser 배열에 항목 추가하기

//  useRef쓰는 이유:
// setInterval,setTimeout의 id 기억할 때,
// 외부 라이브러리를 사용하여 생성된 인스턴스 담을 때,
// scroll위치

// 값이 바뀌어도 컴포넌트가 리랜더링 되지 않음!!

function User({user}){
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList2({users}){
    
    return(
        <div>
            {   //배열을 랜더링 할 때는 key를 설정해줘야 효율적으로 사용할 수 있다!
                users.map(
                    user=>(<User user={user} key={user.id}/>)
                )
            }
            {/*
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
            */}
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