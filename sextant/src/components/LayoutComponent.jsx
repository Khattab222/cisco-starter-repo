import React, { useState } from 'react'
import TabContent from './TabContent'
import PublicId from './PublicId'

function LayoutComponent() {
    const [tabConte, settabConte] = useState('')
  return (
    <div>
    <div className='tabContain'>
        <div className='tab'onClick={(e)=>settabConte(e.target.innerText)} >Tab 1</div>
        <div className='tab' onClick={(e)=>settabConte(e.target.innerText)}>Tab 2</div>
        <div className='tab' onClick={(e)=>settabConte(e.target.innerText)}>Tab 3</div>

    </div>
    <div className='showtab'>
    <TabContent content={tabConte}/> 
   <PublicId/>
    </div>
    </div>
  )
}

export default LayoutComponent
