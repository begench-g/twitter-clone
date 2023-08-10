import React from 'react'

export const ButtonTweet = ({y}:{y:number}) => {
  return (
    <div className='h-[53px] flex items-center px-2'>
        <div className='h-[47px] flex items-center justify-center rounded-full text-sm[15px] text-white' style={{backgroundColor:"#1da1f2",width:y}}>
            <div className='hidden md:block'>Tweet</div>
            <div className='md:hidden'>T</div>
        </div>
    </div>
    
  )
}
