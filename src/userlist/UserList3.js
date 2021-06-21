import React from 'react' 
// CreateUser 배열에 항목 삭제하기

function User({user, onRemove, onToggle}){
    const {username, email, id, active}=user
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
            {/* 
            만약 함수를 따로 만들지 않고, ()=> onRemove(id) 대신 onRemove(id)만 쓴다면,
                랜더링 되자마자 적용되기 때문에 페이지 새로고침(?) 시 적용되어 전부 삭제됨
                    onRemove(id)는 함수 호출이기 때문!
                    ()=>onRemove(id)는 함수를 만들어 넣어준 것
            버튼이 눌렸을 때 onRemove함수를 호출, onRemove는 User(,)안에서 받아옴 */} 
        </div>
    )
}

function UserList3({users, onRemove, onToggle}){
    
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
export default UserList3