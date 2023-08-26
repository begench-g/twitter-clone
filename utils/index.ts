
import axios, {  AxiosError } from "axios"


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

export const loginPost = async ({username,password}:{username:string,password:string}) => {
    try {
      return  axios.post('http://localhost:5000/api/login',{
      username,
      password
    },)
    }catch(error:any){
        return error.response.data
    }
  }

  export const refreshTokenPost = async ({user}:any)=>{
    try {
        const res = await axios.post("http://localhost:5000/api/refresh", { token: user.refreshToken });
        return res.data;
      } catch (err) {
        const error = err as AxiosError
        console.log(error.response?.data);
      }
  }