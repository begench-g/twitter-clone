import React from "react";
import { FaSearch } from "react-icons/fa";
import { news } from "@/constants";
import { follow } from "@/constants";
import { FollowProfile } from "./FollowProfile";
import { News } from "./News";

export const SideColumn = () => {
  return (
    <div className="w-[350px] hidden lg:block">
    <div className="flex py-3 px-6  flex-col gap-4">
        <div className="h-10  bg-slate-100 rounded-full flex items-center gap-2 p-1 px-4 mb-4">
          <div className="hidden md:block">
            <FaSearch size={15} color="gray" />
          </div>
      
          <input
            className="bg-slate-100 hidden md:block rounded-full border-none outline-none text-base"
            placeholder="Search Twitter"
          ></input>
        </div>
        <div className="flex flex-col  items-start rounded-2xl bg-slate-100">
          <div className="border-b hidden md:block border-stone-200 w-full">
            <div className="flex items-center h-11 px-4 py-3  text-xl font-bold ">
              What’s happening
            </div>
          </div>
          <div className="hidden md:block">
            {news.map((newz) => (
              <News
                title={newz.title}
                imageUrl={newz.imageUrl}
                date={newz.date}
                content={newz.content}
                tagName={newz.tagName}
                key={newz.title}
              />
            ))}
          </div>
          <div
            className="h-12  md:block  text-base flex items-center px-4 py-3"
            style={{ color: "#1da1f2" }}
          >
            <div className="hidden md:block">Show more</div>
          </div>
        </div>
        <div className="flex  md:block flex-col items-start rounded-2xl bg-slate-100">
          <div className="border-b hidden md:block border-stone-200 w-full">
            <div className="flex items-center h-11 px-4 py-3  text-xl font-bold ">
              Who to follow
            </div>
          </div>
          <div className="hidden md:block">
            {follow.map((item) => (
              <FollowProfile
                imageUrl={item.imageUrl}
                name={item.name}
                username={item.username}
                key={item.name}
              />
            ))}
          </div>

          <div
            className="h-12 text-base flex items-center px-4 py-3"
            style={{ color: "#1da1f2" }}
          >
            <div className="hidden md:block">Show more</div>
          </div>
        </div>
        <div className="hidden md:block text-xs font-medium text-slate-400">
          Terms of Service Privacy Policy Cookie Policy Ads info More © 2021
          Twitter, Inc.
        </div>
      </div>
    </div>
  
  );
};
