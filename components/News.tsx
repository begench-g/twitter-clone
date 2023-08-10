import { NewsProps } from "../types";
import Image from "next/image";
import React from "react";

export const News = ({imageUrl,title,date,content,tagName}:NewsProps) => {
  return (
    <div className="px-4 py-3 flex gap-3 border-b border-stone-200">
      <div className="w-[70%]">
        <div className="flex text-sm gap-1 text-slate-400 font-medium">
          <div>{title}</div>
          <div>{date}</div>
        </div>
        <div className="py-1 text-base font-bold">
          {content}
        </div>
        <div className="text-sm text-slate-400 font-medium">
          Trending with <span style={{ color: "#1da1f2" }}>{tagName}</span>
        </div>
      </div>
      <div className="w-[30%]">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};
