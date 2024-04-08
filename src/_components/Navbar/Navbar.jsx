import React from 'react'
import { NavConfig } from '../../_config/Nav'
import Typography from '../_atoms/Typography/Typography'

const Navbar = () => {
    return (
        <div
            className='flex flex-row gap-[30px]'
        >

            <div className='left-nav  rounded-md border-[1px] border-white flex flex-row gap-[10px] py-3 px-4'>
                 
               <a href={NavConfig.homeroute.hmroute}>
                <img
                 src={NavConfig.homeroute.logo} 
                 alt="logo"
                 className='w-[20px] h-[20px]'
                 
                  />
               </a>

                <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-white text-wrap "
                >
                    {NavConfig.homeroute.brandname}
                </Typography>

            </div>

            <div className="cent-nav w-full rounded-md border-[1px] border-white flex flex-row gap-12 py-3 px-8">

                {NavConfig.navlinks.map((navlink, index) => (

                    <a
                        key={index}
                        href={navlink.navlink}>
                        <Typography
                            variant="bodylg"
                            weight={400}
                            className="text-white text-wrap "
                        >
                            {navlink.navhead}
                        </Typography>
                    </a>


                ))}

            </div>


            
            <div className='left-nav rounded-md border-[1px] border-white flex flex-row gap-12 py-3 px-4'>
                <a href={NavConfig.navbtn.target}>
                <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-white text-nowrap "
                >
                {NavConfig.navbtn.head}
                </Typography>
                </a>

            </div>


        </div>


    )
}

export default Navbar
