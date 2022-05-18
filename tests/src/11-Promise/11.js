import axios from 'axios'
const promise = axios.get("https://github.com/Katrin3536")

promise.then((data)=>{
    console.log(data);
})