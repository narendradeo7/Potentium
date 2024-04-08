import React from 'react'
import { footConfig } from '../../_config/footConfig'
import Typography from '../_atoms/Typography/Typography'
// icons 
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import ForwardButton from '../_atoms/Button/ForwardButton';






const Footer = () => {
    return (
        <div className='bg-primary1 w-full pt-[70px] px-15 pb-15'>

            <div className='w-full grid grid-flow-row grid-cols-2 mb-[45px]'>

                <div className='logocomp' >
                    <div className=' w-[375px] mb-5'>
                        <img src={footConfig.compinfo.logolink} alt="" />
                        <Typography
                            variant="bodyxl"
                            weight={400}
                            className="text-white text-wrap "
                        >
                            {footConfig.compinfo.head}
                        </Typography>
                    </div>

                    <div className='w-[315px]'>
                        <Typography
                            variant="bodysm"
                            weight={400}
                            className="text-white text-wrap "
                        >
                            {footConfig.compinfo.desc}
                        </Typography>


                    </div>

                </div>

                {/* links */}

                <div className='links grid grid-flow-row grid-cols-2'>

                    <div className="qcklnk">
                        <Typography
                            variant="bodysm"
                            weight={400}
                            className="text-gray-500 text-wrap  "
                        >
                            {footConfig.links.qcklnks.head}
                        </Typography>

                        <div className='flex flex-col gap-5 mt-7'>
                            {footConfig.links.qcklnks.links.map((link, index) => (
                                <a href={link.link}>
                                    <Typography
                                        variant="bodysm"
                                        weight={400}
                                        className="text-white text-wrap "
                                    >
                                        {link.tag}
                                    </Typography>
                                </a>
                            ))}

                        </div>



                    </div>
                    {/* social  */}
                    <div>
                        <Typography
                            variant="bodysm"
                            weight={400}
                            className="text-gray-500 text-wrap  "
                        >
                            {footConfig.links.social.head}
                        </Typography>

                        <div className='grid grid-flow-row md:grid-cols-2 grid-cols-1 text-white mt-7 gap-x-22 gap-y-5 text-lg'>

                            <a href={footConfig.links.social.xlink}>
                                <BsTwitterX />
                            </a>
                            <a href={footConfig.links.social.flink}>
                                <FaFacebookF />
                            </a>
                            <a href={footConfig.links.social.linkdin}>
                                <FaLinkedinIn />
                            </a>
                            <a href={footConfig.links.social.insta}>
                                <BiLogoInstagramAlt />
                            </a>



                        </div>


                    </div>

                </div>

            </div>


            {/* down */}

            <div className='w-full grid grid-flow-row grid-cols-2 '>

                {/* newsl  */}

                <div className=''>
                 
                 <div className='w-[375px]'>

                    <Typography
                        variant="heading1_1"
                        weight={400}
                        className="text-gray-500 text-wrap text-[32px] leading-10 mb-4"
                    >
                        {footConfig.newsletter.head}
                    </Typography>

                    <div className='w-[80%]'>
                        <Typography
                            variant="bodysm"
                            weight={400}
                            className="text-gray-500 text-wrap   "
                        >
                            {footConfig.newsletter.desc}
                        </Typography>


                    </div>

                    <div className='border-b-[1px] border-gray-900  mt-12 mb-4'>
                        <Typography
                            variant="bodysm"
                            weight={400}
                            className="text-gray-900 text-wrap   "
                        >
                            {footConfig.newsletter.btntag}
                        </Typography>

                    </div>

                    {/* button  */}

                    <ForwardButton
                        btntext={footConfig.newsletter.btntext}
                        fwdlink={footConfig.newsletter.fwdto}
                    />
                 </div>
                </div>



                {/* copyr  */}

                <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2'>

                <div></div>

                <div className='flex flex-col gap-5'>
                <Typography
                            variant="bodysm"
                            weight={400}
                            className="text-gray-500 text-wrap   "
                        >
                            {footConfig.copyright.head}
                        </Typography>

                

                </div>


                </div>

            </div>

        </div>
    )
}

export default Footer
