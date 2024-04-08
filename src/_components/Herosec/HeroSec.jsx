import React from 'react'
import { heroConfig } from '../../_config/heroConfig'
import Typography from '../_atoms/Typography/Typography'
import ForwardButton from '../_atoms/Button/ForwardButton'
import Navbar from '../Navbar/Navbar'
import Logoboard from './Logoboard'


const HeroSec = () => {
  return (
    <>
    <div className='bg-cover bg-center  w-full h-[780px] flex flex-col  pt-12 px-15 '
    style={{ backgroundImage: `url(${heroConfig.imglink})` }}>
      <Navbar/>


      <div className="herocont mt-31 max-w-[60%]">
      <Typography
            variant="heading1"
            weight={400}
            className="text-white text-wrap pb-3 md:pb-[30px]"
          >
          {heroConfig.head}
           </Typography>
          <Typography
            variant="bodylg"
            weight={400}
            className="text-white text-wrap pb-4 md:pb-[60px] max-w-[80%]"
          >
          {heroConfig.desc}
          </Typography>

          <ForwardButton btntext={heroConfig.btntext}/>


      </div>
     


    </div>

    <Logoboard/>

    </>
  )
}

export default HeroSec
