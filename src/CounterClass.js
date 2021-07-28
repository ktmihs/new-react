import React, {Component, useReducer} from 'react'

class CounterClass extends Component{

    // 함수를 onClick에 연결해주었는데 그렇게 되면 만약 함수 내에서 this를 쓰면 컴포넌트 인스턴스, 자기 자신을 가리켜야 하지만 함수를 특정 이벤트에 연결시켜주는 순간 함수와 this와의 연결이 사라짐, 함수가 실행된 이후에는 this가 뭔지 모르게 됨
    // 만든 메소드를 이벤트로 등록하는 과정에서 메소드와 컴포넌트 인스턴스 사이의 관계가 끊기기 때문
    // 이를 해결하기 위한 3가지 방법
    // 1. constructor를 이용해 함수를 미리 bind 해줌
    // constructor(props){
    //     super(props)
    //     this.handleIncrease=this.handleIncrease.bind(this)
    //     this.handleDecrease=this.handleDecrease.bind(this)
    // }
    // 2. 화살표 함수를 사용해서 작성
    // handleIncrease=()=>{
    //     console.log("increase")
    // }
    // 3. babel plugin을 통해 쓸 수 있음
    // state={
    //     counter:0
    // }
    constructor(props){
        super(props)
        this.state={
            counter:0,
            fixed:1,
            updateMe:{
                toggleMe:false,
                dontChangeMe:1
            }
        }
        // state는 무조건 객체형태이어야 함!!!
    }

    
    handleIncrease=()=>{
        this.setState({ // setState를 사용해 this.state로 조회를 해야함
            counter:this.state.counter+1
        })  // state 안에 여러개가 있지만 스프레드 연산자를 사용하지 않아도 나머지 값들은 건드리지 않음
            // 하지만 state안에 또 객체로 이루어져 있으면, 불변성을 유지시켜주어야 함
        this.setState({ // setState를 사용해 this.state로 조회를 해야함
            counter:this.state.counter+1
        })
        this.setState({ // setState를 사용해 this.state로 조회를 해야함
            counter:this.state.counter+1
        })
        console.log("increase")
    }
    // setState는 변화를 준다고 바로 업데이트가 되는 것이 아니기 때문에 위처럼 여러번 부른다고 하더라도 1만 증가하는 결과가 나타남
    // 3을 증가시키고 싶으면 아래처럼 써줘야 함
    handleDecrease=()=>{
        // 함수형 업데이트
        this.setState(state=>({
            counter: state.counter-1
        }))
        this.setState(state=>({
            counter: state.counter-1
        }))
        this.setState(state=>({
            counter: state.counter-1
        }))
        console.log("decrease")
    }
    handleToggle=()=>{
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                    // 불변성 유지
                toggleMe: !this.state.updateMe.toggleMe
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleDecrease}>-1</button>
                <button onClick={this.handleIncrease}>+1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        )
    }
}
 
export default CounterClass