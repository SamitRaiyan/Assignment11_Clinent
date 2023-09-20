import { useEffect } from "react"

const useTitle =(title)=>{
    useEffect(()=>{
        document.title=`${title} - Sports Vally`
    },[title])
}
export default useTitle