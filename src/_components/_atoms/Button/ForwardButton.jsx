import React from 'react'
import Typography from '../Typography/Typography'
import { BsArrowUpRight } from "react-icons/bs";

const ForwardButton = ({btntext,fwdlink}) => {
  return (
    <div className='buttn flex gap-5'>

          <div className='spbtn'>
          <Typography
              variant="bodylg"
              weight={400}
              className="text-primary1 text-wrap "
            >
              {btntext}
            </Typography>
          </div>

          <button className='spbtnicon'>
          <BsArrowUpRight/>

          </button>

          


     
          </div>
  )
}

export default ForwardButton
