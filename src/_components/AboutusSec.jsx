import React from 'react'
import Typography from './_atoms/Typography/Typography'
import ForwardButton from './_atoms/Button/ForwardButton'
import { AbtusConfig } from '../_config/aboutusConfig'

const AboutusSec = () => {
  return (
    <div className='bg-primary1 w-full h-fit flex flex-col items-center py-30 px-15 '>
      
      <div className='flex flex-row gap-28'>

      <div className="abtimg">
      <img 
        src={AbtusConfig.imglink}
         alt="about icon" 
         className='abtusimg'
         />
      </div>

      {/* text  */}

        <div className="abttext">
          
          <Typography
            variant="heading1"
            weight={400}
            className="text-white text-wrap pb-3 md:pb-[30px]"
          >
            {AbtusConfig.head}
          </Typography>

          <Typography
            variant="bodylg"
            weight={400}
            className="text-white text-wrap pb-4 md:pb-[60px]"
          >
          {AbtusConfig.desc}
          </Typography>

          <ForwardButton btntext={AbtusConfig.btntext}/>




        </div>
        
      </div>
    </div>
  )
}

export default AboutusSec
