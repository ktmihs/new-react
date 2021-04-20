// 배열 항목 추가하기까지의 App.js

import React,{useRef, useState} from 'react';
import './App.css'
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import UserList from './UserList';
import UserList2 from './UserList2';
function App() {

  const [inputs,setInputs]=useState({
    username:'',
    email:''
  })
  const {username, email}=inputs
  //username과 email을 inputs에서 미리 추출
  const onChange=e=>{
    const {name,value}=e.target
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const [users,setUsers]=useState([
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
  ])
  {/*
  users를 컴포넌트의 상태로써 관리하려면 그냥 useState로 감싸면 됨!
  
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
    
  */}
  const nextId=useRef(4)
  //굳이 리랜더링할 필요가 없기 때문에 변수를 기억하고 싶을 때 useRef를 사용할 수 있음
  //값이 바뀐다고 해서 컴포넌트가 리랜더링 되는 것음 아님!!!!!!

  const onCreate=()=>{
    const user={
      id:nextId.current,
      username,
      email
    }
    setUsers(users.concat(user));
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
  }


  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />  
      <UserList2 users={users}/>    
    </>
  );
}
      //1. 태그는 모두 닫힌 태그여야 함
      //2. 2개 이상의 태그는 모두 하나의 태그로 감싸줘야 함
          //별도로 <></div>로 감싸면 불필요한 태그 없이 감쌀 수 있음
      //3. ()는 가독성을 위해 사용한 것(없어도 괜찮음)
      //4. 변수 사용 시(js 사용 시) {중괄호}로 감싼 후 사용
      //5. react에서 style 사용 시 객체를 만든 후 사용해야 함
      //6. css적용 시 css파일에서 작성 후 id를 이용해 적용
      //7. JSX에서 주석 사용 시 {/* 주석 */}
export default App;
