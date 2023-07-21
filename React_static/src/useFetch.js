import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState(null);
    const [error,setError]= useState(null);

    useEffect(()=>{

        const abortControl = new AbortController();

        fetch(url,{signal:abortControl.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error("Could not fetch data from resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
            })

            .catch(err => {
                if(err.name == "AbortError"){
                    console.log("aborted");
                }
                else{
                    setError(err.message);
                }
                
            })
            return () => abortControl.abort();
    },[url])

    return ( 
        {data,error}
    );
}
 
export default UseFetch;