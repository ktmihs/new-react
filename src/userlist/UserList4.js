import React,{useEffect} from 'react' 
// useEffect

function User({user, onRemove, onToggle}){
    const {username, email, id, active}=user
    
    useEffect(()=>{
        console.log(user)   //특정 값이 업데이트 된 이후의 user정보를 보여줌
        return ()=>{        //특정 값이 업데이트 되기 전의 user정보를 보여줌
            console.log(user)  
        }
    },[user])   //deps부분에 넣는 값에 따라 그 값이 수정되면 함수가 호출됨(만약 deps가 없다면, 기본적으로 생성 삭제 시에만 호출됨)
                //useEffet안에서 사용하려면 deps부분에 사용할 것을 명시해주어야 함
    

    {/* 기본 useEffect 
        첫 파라미터는 함수, 두번째는 deps
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남')
        //update는 상관없음(처음 화면에 랜더링될 때와 생성 시에만 )
            //props-> state
            //REST API
            //D3 Video.js
            //setInterval, setTimeout
        return ()=>{    //cleaner함수
            console.log('컴포넌트가 화면에서 사라짐')
            //삭제 시에만 사용됨
            //clearInterval, clearTimeout(setInterval등 삭제)
            //라이브러리 인스턴스 제거(ex. D3, Video.js)
        }
    },[])   => []는 dependency(deps)
    */}

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
}

function UserList4({users, onRemove, onToggle}){
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
export default UserList4