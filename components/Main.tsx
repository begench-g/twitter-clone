import React from 'react'
import { Header } from './Header'
import { Post } from './Post'
import { Tweet } from './Tweet'

export const Main = () => {
  return (
    <div className="w-1/2 border-r border-slate-200">
    <Header />
    <Post />
    <Tweet
      name="Devon Lane"
      username="@johndue"
      date="23s"
      imageUrl="/Tweets/tweetImage1.png"
      title="Tom is in a big hurry."
      avatar="/Tweets/profile2.png"
    />
    <Tweet
      name="Darlene Robertson"
      username="@johndue"
      date="23s"
      imageUrl="/Tweets/tweet2.png"
      title="Tom is in a big hurry."
      avatar="/Tweets/profile3.png"
    />
  </div>
  )
}
