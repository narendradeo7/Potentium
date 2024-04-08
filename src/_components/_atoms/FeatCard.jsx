import React from 'react'
import Typography from './Typography/Typography'
import ForwardButton from './Button/ForwardButton'

const FeatCard = ({ feat, head, desc, btntext, fwdlink, imglink, leftImg}) => {
  return (
    

      <div
         className={` h-[660px] bg-gray-cardbck py-20 px-28 rounded-[10px] border-[1px] flex gap-50 ${
        leftImg ? 'flex-row-reverse' : 'flex-row'
      }`}>

        <div
          className='feattext'>

          <Typography
            variant="heading3"
            weight={400}
            className="text-gray-light text-wrap pb-2 md:pb-5"
          >
           {feat}
          </Typography>

          <Typography
            variant="heading1"
            weight={400}
            className="text-white text-wrap pb-3 md:pb-[30px]"
          >
            {head}
          </Typography>

          <Typography
            variant="bodylg"
            weight={400}
            className="text-white text-wrap pb-4 md:pb-[60px]"
          >
          {desc}
          </Typography>

          {/* button  */}
          <ForwardButton btntext={btntext}/>

        </div>
        {/* right part */}
        <div className='featimg'>
          
        <img 
        src={imglink} 
        alt="feature img" 
        className='featimg'
        />

        </div>

      </div>

    
  )
}

export default FeatCard
