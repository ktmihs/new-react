import React, {useState} from 'react'
function Counter(){
    const [number, setNumber]=useState(0)
    {/*number라는 수를 0부터 시작해서 변경시킴/ setNumber는 상태를 변경해주는 함수 */}

    const onIncrease=()=>{
        setNumber(prevNumber=>prevNumber+1) //update function(함수형 업데이트)
    }   
    const onDecrease=()=>{
        setNumber(number-1)     //값 자체를 넣어줌
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/*이 위치에서 함수를 넣어주는 것이지 함수를 호출해주는 것이 아니기 때문에 onIncrease()처럼 ()쓰면 안 됨! */}
        </div>
    )
}
export default Counter