import Image from "next/image";
import React from "react";
type menuItemProps = {
  icon: string;
  menuItem: string;
};

export const MenuItem = ({ icon, menuItem }: menuItemProps) => {
  return (
    <div className="h-[53px] flex items-center ">
      <div className="h-[53px] px-2 flex items-center cursor-pointer hover:bg-slate-200 rounded-full">
        <div className="px-[5px]">
          <Image src={icon} width={26} height={26} alt=""/>
        </div>
        <div className="text-lg/[19px] hidden md:block font-bold">{menuItem}</div>
      </div>
    </div>
  );
};
