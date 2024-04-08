import React from 'react'
import { ContactusConfing } from '../../_config/contactusConfig'
import Typography from './Typography/Typography'
import { BsArrowRight } from 'react-icons/bs'

const Contactus = () => {
    return (
        <div className='h-[520px] w-full px-15 flex flex-row bg-cover bg-center py-22 gap-5'
            style={{ backgroundImage: `url(${ContactusConfing.bgimg})` }}>


            <div className="cont w-[67.25%] border-[1px] rounded-lg border-cardbck p-15">
                <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-llmcardtext text-wrap pb-4 md:-pb-[20px]"
                >
                    {ContactusConfing.tag}
                </Typography>
                <Typography
                    variant="heading1"
                    weight={400}
                    className="text-llmcardtext text-wrap pb-3 md:pb-[30px]"
                >
                    {ContactusConfing.head}
                </Typography>

                <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-llmcardtext text-wrap "
                >
                    {ContactusConfing.desc}
                </Typography>


            </div>

            <div className=" w-[32.7%] btn border-[1px] rounded-lg border-cardbck flex flex-col justify-center items-center">
            <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-llmcardtext text-wrap pb-5 md:pb-15 "
                >
                    {ContactusConfing.btntex}
                </Typography>
                <a href={ContactusConfing.fwdto} >
                <BsArrowRight/>
                </a>
              
            </div>


        </div>
    )
}

export default Contactus
