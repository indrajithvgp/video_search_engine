import axios from 'axios'


const KEY = "AIzaSyArEJFYlcKJczfzle-UQvJL52lGYP9BUp0"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})  