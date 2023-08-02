import React from "react";
import Image from "next/image";
import { icons } from "@/constants";
import { ButtonTweet } from "./ButtonTweet";

export const Post = () => {
  return (
    <div className="px-4 flex py-3 border-b border-stone-200 h-24">
      <div>
        <div className="rounded-full overflow-hidden">
          <Image
            src={"/Avatar/ProfilePicture.png"}
            alt="profilepicture"
            width={49}
            height={49}
          />
        </div>
      </div>

      <div className="px-3 flex flex-1 flex-col justify-between">
        <div className=" text-xl font-medium text-slate-500">
          What’s happening?
        </div>

        <div className="flex flex-1 h-6 justify-between items-center">
          <div>
            <div className="flex gap-1">
              {icons.map((icon) => (
                <div dangerouslySetInnerHTML={{ __html: icon.svgCode }} />
              ))}
            </div>
          </div>

          <div>
            <div
              className="h-[39px] flex items-center justify-center rounded-full text-sm[15px] p-3 text-white"
              style={{ backgroundColor: "#1da1f2", width: 77 }}
            >
              Tweet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};