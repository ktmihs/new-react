import React from 'react'
function Hello2({name, color, isSpecial}){
    return (
    <div style={{color}}>
        {isSpecial ? '스페셜하다': '낫스페셜'}    {/*isSpecial 값이 true면 *표, 아니면 null값(삼항연산자 이용) */}
                                        {/* 단순히 숨기고 보여줄 때는 &&연산자 사용 */}
        Hi~ {name}
    </div> 
    );}
/*
function Hello2(props){
    console.log(props)
    return <div style={{
        color: props.color
    }}>Hi~ {props.name}</div>    
}

function Hello2({name, color}){     {name, color}=> props라는 값
    console.log(props)
    return <div style={{
        color: color    => color로 써도 됨
    }}>Hi~ {name}</div>    
}
*/
Hello2.defaultProps={   //기본값이 없을 때를 대비해 설정해주는 값
    name:'이름없음'
}

export default Hello2
//style={{객체}객체를 감싸는 중괄호}