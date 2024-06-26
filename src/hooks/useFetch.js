import axios from "axios"
import { useState } from "react"



const useFetch = (url) => { 
    
    const [response, setResponse] = useState() 
    const [hasError, setHasError] = useState(false)

    const getApi= () => {
        axios.get(url)
        .then((result) => {
            setResponse(result.data)
            setHasError(false)
        }).catch((err) => { 
            setHasError(true);
        });
    }
     
        return [ response, getApi, hasError ]

}

export default useFetch