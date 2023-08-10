import { actions } from '@/constants'
import React from 'react'

export const Actions = () => {
  return (
    <div className='flex py-1'>
        {actions.map((action)=>(
        <div key={action.action} className='flex-1 flex items-center'>
         <div dangerouslySetInnerHTML={{ __html:action.svgCode }} />
         <div className="pl-2 text-sm text-slate-500 font-medium">{action.count}</div>
        </div>
        ))}
    </div>
  )
}
