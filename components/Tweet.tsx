import Image from "next/image";
import React from "react";
import { Actions } from "./Actions";
import { Avatar } from "./Avatar";
import { tweetProps } from "@/types";

export const Tweet = ({avatar,name,username,date,title,imageUrl}:tweetProps) => {
  return (
    <div className="flex px-4 py-3 border-b border-slate-200">
      <div>
        <Avatar imgUrl={avatar}/>
      </div>
      <div className="flex-1">
        <div className="px-3">
          <div className="flex gap-1">
            <div className="text-sm font-bold">{name}</div>
            <div className="text-sm font-medium text-slate-400">{username}</div>
            <div className="text-sm font-medium text-slate-400">{date}</div>
          </div>
          <div className="text-sm font-medium">{title}</div>
          <div className="flex max-h-[280px] py-3 overflow-hidden">

            <Image
              src={imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              style={{ width: "100%", height: "auto",borderRadius:"16px" }} // optional
            />
          </div>
          <Actions/>
          <div className="h-9 items-center flex text-sm" style={{color:'#1da1f2'}}>
             Show this thread
          </div>
        </div>
      </div>
    </div>
  );
};
