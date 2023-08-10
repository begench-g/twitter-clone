import axios from "axios"
import { error } from "console"

export const getTweets = async () => {
    try{
        const res = await axios.get('/api/tweets')
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const postTweets = async ({image,title}:{image:string,title:string}) =>{
        return axios({
            method: 'post',
            url: '/api/tweets',
            data: {
                name:"dddddd",
                username:"ddddddd",
                date:"ddd",
                imageUrl:image,
                title,
                avatar:"/Tweets/profile3.png",
            }
          }).then(()=>console.log('ishledi'))
    
}
