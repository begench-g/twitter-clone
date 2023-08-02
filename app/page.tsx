
import { News } from "@/components/News";
import { SideMenu } from "@/components/SideMenu";

import { Main } from "@/components/Main";
import {FaSearch} from 'react-icons/fa'


export default function Home() {
  return (
    <div className="flex  lg:px-[10%] h-screen">
      <SideMenu />
      <Main />

      <div className="w-[30%] py-3 px-6">
        <div className="h-10 bg-slate-200 rounded-full flex items-center gap-2 p-1 px-4 mb-4">
          <FaSearch size={15} color="gray"/>
          <input
            className="bg-slate-100 rounded-full border-none outline-none text-base"
            placeholder="Search Twitter"
          ></input>
        </div>
        <div className="flex flex-col items-start rounded-2xl bg-slate-100">
          <div className="border-b border-stone-200 w-full">
            <div className="flex items-center h-11 px-4 py-3  text-xl font-bold ">
                What’s happening
            </div>
          
          </div>
          <div>
            <News/>
          </div>
          <div className="h-12 text-base" style={{color:'1da1f2'}}>
            Show more
          </div>
        </div>
        <div>Follow</div>
        <div>TEXT</div>
      </div>
    </div>
  );
}
