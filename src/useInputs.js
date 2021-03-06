import { useState,useCallback } from "react"

// custom hook naming: use + 사용할 함수 이름
function useInputs(initialForm){
    const [form, setForm]=useState(initialForm)
    const onChange=useCallback(e=>{
        const {name,value}=e.target
        setForm(form=>({...form,[name]:value}))
    },[])
    const reset=useCallback(()=>setForm(initialForm),[initialForm])
    
    return [form, onChange, reset]
}
export default useInputs