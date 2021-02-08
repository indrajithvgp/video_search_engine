
import {useState, useEffect} from 'react'

import youtube from '../api/youtube'

const useVideos=(defaultSearchTerm)=>{
    const[videos, setVideos] = useState([])

    useEffect(()=>{
        search(defaultSearchTerm)
    },[])
    
    const search=async(term) => {
        const response = await youtube('./search',{ 
            params:{
                q:term
            } 
        })
        setVideos(response.data.items)
    }
    return [videos, search]
    // return {videos, search}

}

export default useVideos