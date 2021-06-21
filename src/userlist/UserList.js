import React,{useEffect} from 'react' 
// CreateUser 배열에 항목 삭제하기

const User=React.memo(function User({user, onRemove, onToggle}){
    const {username, email, id, active}=user
    
    useEffect(()=>{
        console.log(user)   //특정 값이 업데이트 된 이후의 user정보를 보여줌
        return ()=>{        //특정 값이 업데이트 되기 전의 user정보를 보여줌
            console.log(user)  
        }
    },[user])   
    return (
        <div>
            <b style={{
                color: active?'green':'black',
                cursor: 'pointer'
                }}
                onClick={()=>onToggle(id)}
            >{username}</b>
            &nbsp;
            <span>({email})</span>
            <button onClick={()=> onRemove(id)}>삭제</button>
        </div>
    )
})

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {   
                users.map(
                   ( user )=>(
                   <User 
                    user={user} 
                    key={user.id} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                    />
                   )
                )
            }
        </div>
    )
}
//컴포넌트 최적화
// ### 렌더링 된 결과물 재사용
export default React.memo(UserList,(prevProps,nextProps)=>nextProps.users===prevProps.users)