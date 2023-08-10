import { NextResponse } from "next/server";
import tweets from './data.json'
import { tweetProps } from "@/types";
import { v4 as uuidv4 } from 'uuid';
import { NextApiRequest } from "next";
export async function GET(request:any){
    return NextResponse.json(tweets)
}

export async function POST(request:any){
    const {name,username,date,imageUrl,title,avatar} = await request.json()
    const newTweet = {
         name,
         username,
         date,
         imageUrl,
         title,
         avatar,
         id:uuidv4()
    }
    console.log("Buda ishledi")
    tweets.push(newTweet);
    console.log(tweets)
    return NextResponse.json(tweets)
}

 