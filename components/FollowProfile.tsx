import React from "react";
import Image from "next/image";
import { FollowProps } from "@/types";

export const FollowProfile = ({imageUrl,name,username}:FollowProps) => {
  return (
    <div className="flex h-16 items-center gap-3 px-4 py-3 border-b border-stone-200 w-full">
      <div className="h-11 w-11 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          sizes="100vh"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex-1">
        <div className="font-bold text-base h-[19px]">{name}</div>
        <div className=" font-medium text-base text-slate-400 h-[19px]">
          {username}
        </div>
      </div>
      <div
        className="border rounded-full flex items-center justify-center h-[30px] text-base font-bold px-3"
        style={{ borderColor: "#1da1f2", color: "#1da1f2" }}
      >
        Follow
      </div>
    </div>
  );
};
