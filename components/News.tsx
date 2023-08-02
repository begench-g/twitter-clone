import Image from "next/image";
import React from "react";

export const News = () => {
  return (
    <div className="px-4 py-3 flex gap-3 border-b border-stone-200">
      <div className="w-[70%]">
        <div className="flex text-sm gap-1 text-slate-400 font-medium">
          <div>COVID19</div>
          <div>Last night</div>
        </div>
        <div className="py-1 text-base font-bold">
          England’s Chief Medical Officer says the UK is at the most dangerous
          time of the pandemic
        </div>
        <div className="text-sm text-slate-400 font-medium">
          Trending with <span style={{ color: "#1da1f2" }}># covid19</span>
        </div>
      </div>
      <div className="w-[30%]">
        <Image
          src={"/News/news1.png"}
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
