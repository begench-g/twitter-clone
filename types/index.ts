export interface tweetProps {
  name: string;
  username: string;
  date: string;
  title: string;
  imageUrl: string;
  avatar:string;
  id?:string;
  key?:string;
}

export interface FollowProps{
  imageUrl:string;
  name:string;
  username:string
}

export interface NewsProps {
  imageUrl:string
  title:string
  content:string
  date:string
  tagName:string
}