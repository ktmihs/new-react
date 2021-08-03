import React,{Component} from 'react'
import * as Sentry from "@sentry/browser"

class ErrorBoundary extends Component{
    state={
        error:false
    }
    // error-> error에 대한 정보, info-> 에러가 어디서 발생했는지에 대한 정보
    // error가 발생한 상황에 먼저 호출
    componentDidCatch(error,info){
        console.log('error발생')
        console.log({
            error,
            info
        })
        this.setState({
            error:true
        })

        //production에서도 sentry로 잘 작동되는지 확인
        if (process.env.NODE_ENV==='production'){
            Sentry.captureException(error,{extra:info})
        }
    }

    render(){
        if(this.state.error){
            return <h1>에러 발생!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary