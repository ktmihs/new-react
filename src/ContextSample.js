import React, {createContext, useContext, useState} from 'react'

const MyContext=createContext('defaultValue')
// context만들 때는 createContext라는 함수를 사용(기본값)

function Child(){
    const text=useContext(MyContext)
    return <div>안녕하세요? {text}</div>
}
function Parent({text}){
    return <Child text={text}/>
}
function GrandParent({text}){
    return <Parent text={text}/>
}
function ContextSample(){
    const [value, setValue]=useState(true)
    return (
        <MyContext.Provider value={value?'good':'bad'}>
            {/* Provider를 통해 값을 지정해줄 수 있음 */}
            <GrandParent/>
            <button onClick={()=>setValue(!value)}>Click me!</button>
            {/* state로 값을 변경할 수도 있음 */}
        </MyContext.Provider>
    )
}
export default ContextSample