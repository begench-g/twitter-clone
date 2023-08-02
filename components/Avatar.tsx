import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export const Avatar = ({imgUrl}:{imgUrl:string | StaticImport}) => {
  return (
    <div className="rounded-full overflow-hidden">
    <Image
      src={imgUrl}
      alt="profilepicture"
      width={49}
      height={49}
    />
  </div>
  )
}
