import React from 'react'

function Wrapper({children}){
    const style={
        border: '2px solid black',
        padding: 16
    }
    return <div style={style}>{children}</div>
}
export default Wrapper
//props.children
// 태그가 아닌 컴포넌트일 때(<Wrapper></Wrapper>같은) 안에 넣는 값을 조회하기 위해 사용하는 값