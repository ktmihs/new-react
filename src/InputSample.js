import React,{useState,useRef} from 'react'

function InputSample(){
    const [inputs,setInputs]=useState({
        name:'',
        nickname:''
    })

    const nameInput=useRef()
    //nameInput이라는 객체를 선택하고 싶은 dom에 ref={nameInput}이라고 넣어줌
    const {name, nickname}=inputs

    const onChange=(e)=>{
        const {name, value}=e.target
        
        setInputs({
            ...inputs,      //...(spread문법)으로 위의 setInputs 복사함
            [name]:value    //name은 name일 수도 nickname일 수도
        })

        //위와 아래 같은 코드
        //const nextInputs={
        //    ...inputs
        //}
        //nextInputs[name]=value
    }
    //<불변성을 지킴> 기존의 객체를 업데이트 할 때는 객체를 복사해줘야 함
    const onReset=()=>{
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus()   //직접 돔에 접근(nameInput에 focus를 둠)
    }
    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample

{/*
# practice input example 1

function InputSample(){
    const [text,setText]=useState('')
    const onChange=(e)=>{
        setText(e.target.value)
    }
    const onReset=()=>{
        setText('')
    }
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    )
}
*/}