import React,{useRef, useMemo, useCallback, useReducer} from 'react'
import './App.css'
import CreateUser from './CreateUser'
import UserList from './userlist/UserList'
import useInputs from './useInputs'

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user=>user.active).length
}

const initialState={
  // hook으로 불러올 것이기 때문에 더이상 관리할 필요가 없음
  // inputs:{
  //   username:'',
  //   email:''
  // },
  users:[
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
  ]
}

function reducer(state,action){
  switch (action.type){
    // hook으로 불러올 것이기 때문에 더이상 관리할 필요가 없음
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs:{
    //       ...state.inputs,
    //       [action.name]:action.value
    //     }
    //   }
    case 'CREATE_USER':  // create_user작업으로 input과 user작업을 동시에 할 수 있음
      return {
        inputs:initialState.inputs,
        users:state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users:state.users.map(user=>
          user.id===action.id
          ?{...user, active: !user.active}
          :user
          )
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users:state.users.filter(user=>user.id!==action.id)
      }
      default:
        throw new Error('inhandled')
  }
}
function AppReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nextId=useRef(4)
  // 비구조 할당
  const {users}=state
  //  const {username,email}=state.inputs
  const [form, onChange,reset]=useInputs({
    username:'',
    email:''
  })
  const {username,email}=form

  // const onChange=useCallback(e=>{
  //   const {name,value}=e.target
  //   dispatch({
  //     type:'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // },[])

  const onCreate=useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user:{
        id:nextId.current,
        username,
        email
      }
    })
    nextId.current+=1
    reset()
  },[username,email,reset]) //useCallback에서 기존 상태를 의존하고 있는 것을 사용하기 위해 []deps에 적어줌
  
  const onToggle=useCallback(id=>{  // 처음 만든 것을 계속 재사용
    dispatch({
      type:'TOGGLE_USER',
      id
    })
  },[])

  const onRemove=useCallback(id=>{
    dispatch({
      type:'REMOVE_USER',
      id
    })
  },[])

  const count=useMemo(()=>countActiveUsers(users),[users])
  
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />  
      <UserList users={users}
      onToggle={onToggle}
      onRemove={onRemove}
      />    
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}
export default AppReducer;


/**
  component를 관리하는 값이 하나고 문자, 숫자일 경우 useState가 편리
  component를 관리하는 값이 여러개여서 상태의 구조가 복잡해지거나 배열 내부 상태가 변경될 때에는 useReducer가 편리할 수 있음
    여러번 사용할 경우에는 useReducer가 편할 수 있음
      ex {
          setUsers(users=>users.concat(user))
          setInput({
            username:'',
            email:''
          })
      }
 */