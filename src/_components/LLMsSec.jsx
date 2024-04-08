import React from 'react'
import { LLMsConfig } from '../_config/LLMsConfig'
import LLMsCard from './_atoms/LLMsCard'
import Typography from './_atoms/Typography/Typography'
import ForwardButton from './_atoms/Button/ForwardButton'

const LLMsSec = () => {
    return (

        <div className='py-15 flex flex-col items-center'>

            <div className="heading flex flex-col mx-auto w-[50%] ">



                <Typography
                    variant="heading1"
                    weight={400}
                    className="text-primary1 text-wrap pb-3 md:pb-[30px] text-center"
                >
                    {LLMsConfig.info.head}
                </Typography>

                <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-primary1 text-wrap text-center "
                >
                    {LLMsConfig.info.desc}
                </Typography>
            </div>

            <div className='flex md:flex-row flex-col max-w-[1133px] flex-wrap items-center pt-12 gap-y-5 gap-x-[57px] '>

                {
                    LLMsConfig.cards.map((card, index) => (
                        <LLMsCard
                            key={index}
                            cnt={card.no}
                            head={card.head}
                            desc={card.desc}
                        />
                    ))
                }
            </div>

            <div className='mt-15'>
                <ForwardButton
                    btntext={LLMsConfig.btn.btntext}
                    fwdlink={LLMsConfig.btn.fwdto}
                    isdark={true}
                />

            </div>


        </div>
    )
}

export default LLMsSec
