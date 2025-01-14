import Image from "next/image";
import React from "react";
import { Avatar } from "./Avatar";

export const Profile = () => {
  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="5" viewBox="0 0 19 5" fill="none">
  <path d="M15.6875 0.09375C14.3606 0.09375 13.2812 1.17587 13.2812 2.5C13.2812 3.82413 14.3593 4.90625 15.6875 4.90625C17.013 4.90625 18.0938 3.8255 18.0938 2.5C18.0938 1.1745 17.013 0.09375 15.6875 0.09375ZM15.6875 3.53125C15.1182 3.53125 14.6562 3.06925 14.6562 2.5C14.6562 1.93212 15.1196 1.46875 15.6875 1.46875C16.2554 1.46875 16.7188 1.93075 16.7188 2.5C16.7188 3.06787 16.2568 3.53125 15.6875 3.53125ZM9.5 0.09375C8.17175 0.09375 7.09375 1.17587 7.09375 2.5C7.09375 3.82413 8.17313 4.90625 9.5 4.90625C10.8269 4.90625 11.9062 3.8255 11.9062 2.5C11.9062 1.1745 10.8282 0.09375 9.5 0.09375ZM9.5 3.53125C8.93075 3.53125 8.46875 3.06925 8.46875 2.5C8.46875 1.93212 8.93213 1.46875 9.5 1.46875C10.0679 1.46875 10.5312 1.93075 10.5312 2.5C10.5312 3.06787 10.0693 3.53125 9.5 3.53125ZM3.3125 0.09375C1.98563 0.09375 0.90625 1.17587 0.90625 2.5C0.90625 3.82413 1.98563 4.90625 3.3125 4.90625C4.638 4.90625 5.71875 3.8255 5.71875 2.5C5.71875 1.1745 4.63663 0.09375 3.3125 0.09375ZM3.3125 3.53125C2.74325 3.53125 2.28125 3.06925 2.28125 2.5C2.28125 1.93212 2.74462 1.46875 3.3125 1.46875C3.88037 1.46875 4.34375 1.93075 4.34375 2.5C4.34375 3.06787 3.88175 3.53125 3.3125 3.53125Z" fill="#0F1419"/>
</svg>`
  return (
    <div className="h-[69px] flex w-full px-2 items-center ">
      <Avatar imgUrl={"/Avatar/ProfilePicture.png"}/>
      <div className="hidden md:block">
      <div className="flex justify-between w-full">
        <div className="px-4">
          <div className="font-bold text-sm[16px]">Jerome Bell</div>
          <div>@afonsoinocente</div>
        </div>
        <div className="text-sm[16px] font-medium flex items-center justify-center px-5" style={{color:"5b7083"}}>
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
        </div>
      </div>
      </div>
     
    </div>
  );
};
