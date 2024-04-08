import React from 'react'
import { LogoboardConfig } from '../../_config/heroConfig'

const Logoboard = () => {
  return (
    <div 
    className='h-30 bg-secondary2 w-full flex flex-row items-center gap-20 overflow-visible'>
     
      



      {LogoboardConfig.logos.map((logo,index) =>(
        
        <div className='object-cover ' style={{ width: 'inherit' }}> 

        <img 
        src={logo.logo}
         alt={logo.compname} />
        
        </div>
        

      ))}
      {LogoboardConfig.logos.map((logo,index) =>(
        
        <div className='object-cover ' style={{ width: 'inherit' }}> 

        <img 
        src={logo.logo}
         alt={logo.compname} />
        
        </div>
        

      ))}
   
    </div>
  )
}

export default Logoboard
