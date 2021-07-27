import React,{useMemo, useReducer, createContext} from 'react'
import './App.css'
import produce from 'immer'
import CreateUser from './CreateUser'
import UserList from './userlist/UserList'

/* ex1.
  const state={
    number:1,
    dontChangeMe:2
  }
  // {number:1, dontChangeMe:2}
  const nextState=produce(state, draft={
    draft.number+=1
  })
  // {number:2, dontChangeMe:2}
*/

/* ex2.
  const array=[
    {id:1,text:'hello'},
    {id:2,text:'bye'},
    {id:3,text:'lalala'}
  ]

  const nextArray=produce(array,draft=>{
    draft.push({id:4, text:'blabla'})   // 배열 추가
    draft[0].text=draft[0].text+' world'  // 특정값 직접 바꿔줌
  })

*/

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...')
  return users.filter(user=>user.active).length
}

const initialState={
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
    case 'CREATE_USER':  // create_user작업으로 input과 user작업을 동시에 할 수 있음
    return produce(state,draft=>{
      draft.users.push(action.user)
    })  
    // return {
      //   inputs:initialState.inputs,
      //   users:state.users.concat(action.user)
      // }
    case 'TOGGLE_USER':
      return produce(state, draft=>{
        const user=draft.users.find(user=>user.id===action.id)
        user.active=!user.active
      })  
    // return {
      //   ...state,
      //   users:state.users.map(user=>
      //     user.id===action.id
      //     ?{...user, active: !user.active}
      //     :user
      //     )
      // }
    case 'REMOVE_USER':
      return produce(state,draft=>{
        const index=draft.users.findIndex(user=>user.id===action.id)
        draft.users.splice(index,1)
      })
      // return{
      //   ...state,
      //   users:state.users.filter(user=>user.id!==action.id)
      // }
      default:
        throw new Error('inhandled')
  }
}

export const UserDispatch=createContext(null)
  // App에서 useReducer를 통해 받아온 dispatch를 value로 넣어준 상태

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
 
  const {users}=state

  const count=useMemo(()=>countActiveUsers(users),[users])
  
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />  
      <UserList users={users} />    
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}
export default App;