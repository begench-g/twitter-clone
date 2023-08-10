import React from 'react'
import { MenuItem } from './MenuItem'
import { ButtonTweet } from './ButtonTweet'
import { Profile } from './Profile'
import { sideMenuItems } from '@/constants'
import Link from 'next/link'

export const SideMenu = () => {
  return (
    <div className="max-w-[300px] flex flex-col justify-between border-r-[1px] border-gray-200">
        < div >
          <MenuItem icon="/sideMenuIcons/Vector.png" menuItem={""} />
          {sideMenuItems.map((item) => (
            <Link href={item.link}>
                <MenuItem key={item.label} icon={item.url} menuItem={item.label} />
            </Link>
          ))}
          <div className='hidden md:block'>
              <ButtonTweet y={220} />
          </div>
          <div className='md:hidden'>
              <ButtonTweet y={47}/>
          </div>
         
        </div>
        <div>
          <Profile/>
        </div>
      </div>
  )
}
