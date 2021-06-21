/**
 * 컴포넌트 최적화
 * 
 * useMemo 연산된 값 재사용
 * useCallback 특정함수 재사용
 * React.memo 렌더링 된 결과 재사용
 */

import React,{useRef, useState, useMemo, useCallback} from 'react';
import './App.css'
import CreateUser from './CreateUser';
import UserList from './userlist/UserList';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user=>user.active).length
}
function App() {

  const [inputs,setInputs]=useState({
    username:'',
    email:''
  })
  const {username, email}=inputs
  //username과 email을 inputs에서 미리 추출
  const onChange=useCallback(e=>{
    const {name,value}=e.target
    setInputs({
      ...inputs,
      [name]:value
    })
  },[inputs]) //inputs가 바뀔 때에만 함수를 새로 만들어주고, 그렇지 않다면 기존의 함수를 재사용하게 됨

  const [users,setUsers]=useState([
    {
      id: 1,
      username:'a',
      email:'first@example.com',
      active: true
    },
    {
      id: 2,
      username:'b',
      email:'second@example.com',
      active: false
    },
    {
      id: 3,
      username:'c',
      email:'third@example.com',
      active:false
    }
  ])
  const nextId=useRef(4)
  //굳이 리랜더링할 필요가 없기 때문에 변수를 기억하고 싶을 때 useRef를 사용할 수 있음
  //값이 바뀐다고 해서 컴포넌트가 리랜더링 되는 것음 아님!!!!!!

  const onCreate=useCallback(()=>{
    const user={
      id:nextId.current,
      username,
      email
    }
    setUsers(users=>users.concat(user));  //이 setUsers의 파라미터의 users에서 최신 파라미터를 조회하기 때문에 아래 deps에서 users를 작성해줄 필요가 없음
    // 위 아래 같은 코드 (spread로 복사하거나 concat으로 추가해서 이어주거나)
    // setUsers([...users,user]);  //기존 배열은 복사해서 넣으면서 user을 추가함
    // users.push로는 업데이트가 되지 않음!
    setInputs({
      username:'',
      email:''
    })

    console.log(nextId.current)
    nextId.current+=1
    //다음 값을 계속해서 1씩 업 시켜줌
  },[username,email])    //의존하고 있는 값을 deps로 넣어주어야 업데이트 된 최신 값을 참조함(그렇지 않다면 기존 있는 값을 참조하기 때문)

  const onRemove=useCallback(id=>{
    setUsers(users=>users.filter(user=>user.id !==id))
  },[]) //component가 처음 만들어질 때 딱 한 번 렌더링 된 후 그 다음부터는 계속 재사용됨

// ### 특정함수 재사용
  const onToggle=useCallback(id=>{
    setUsers(users=>users.map(
      user=>user.id===id?{...user,active: !user.active}:user
    ))
  },[]) //id 일치여부에 따라서만 업데이트(전체 업데이트가 아닌)
    //기존의 user를 수정하는 것이 아니라 새로운 user를 만들어서 특정 값을 덮어씌워주는 형태로 구현
    //222마찬가지


// ### 연산된 값 재사용
  const count=useMemo(()=>countActiveUsers(users),[users])
    //deps([]안에 값)이 바뀔 때에만 활성화 됨(그 이외에는 이미 저장된 값 그대로 사용, 연산된 결과값을 재사용)
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />  
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>    
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}
export default App;
