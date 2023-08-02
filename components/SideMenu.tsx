import React from 'react'
import { MenuItem } from './MenuItem'
import { ButtonTweet } from './ButtonTweet'
import { Profile } from './Profile'
import { sideMenuItems } from '@/constants'

export const SideMenu = () => {
  return (
    <div className="lg:w-[20%] lg:h-[100%] flex flex-col justify-between border-r-[1px] border-gray-200">
        <div >
          <MenuItem icon="/sideMenuIcons/Vector.png" menuItem={""} />
          {sideMenuItems.map((item) => (
            <MenuItem icon={item.url} menuItem={item.label} />
          ))}
          <ButtonTweet y={220} />
        </div>
        <div>
          <Profile/>
        </div>
      </div>
  )
}
