import React from 'react'
import Typography from '../Typography/Typography'
import { BsArrowUpRight } from "react-icons/bs";

const ForwardButton = ({btntext,fwdlink,isdark}) => {
  return (
    <div className='buttn flex gap-5'>

          <div className={`buttn flex gap-5 ${isdark ? 'spbtn-dark' : 'spbtn'}`}>
          <Typography
              variant="bodylg"
              weight={400}
              className=" text-wrap "
            >
              {btntext}
            </Typography>
          </div>

          <button className={`${isdark?'spbtnicon-dark':'spbtnicon'}`}>
          <BsArrowUpRight/>

          </button>

          


     
          </div>
  )
}

export default ForwardButton
