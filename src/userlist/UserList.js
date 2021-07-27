import React,{useContext} from 'react' 
import { UserDispatch } from '../App'

// props로 넘겨주지 않고 context로 바로 넘겨주기

const User=React.memo(function User({user}){
    const dispatch = useContext(UserDispatch)

    return (
        <div>
            <b style={{
                color: user.active?'green':'black',
                cursor: 'pointer'
                }}
                onClick={()=>dispatch({
                    type: 'TOGGLE_USER',
                    id:user.id
                })}
                //onClick={()=>onToggle(id)}
            >{user.username}</b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={()=> dispatch({
                type: 'REMOVE_USER',
                id:user.id
            })}>삭제</button>
        </div>
    )
})

function UserList({users}){
    return(
        <div>
            {   
                users.map(
                   ( user )=>(
                   <User 
                    user={user} 
                    key={user.id} 
                    />
                   )
                )
            }
        </div>
    )
}
//컴포넌트 최적화
// ### 렌더링 된 결과물 재사용
export default React.memo(UserList)