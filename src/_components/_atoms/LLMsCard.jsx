import React from 'react'
import Typography from './Typography/Typography'

const LLMsCard = ({ cnt, head, desc }) => {
    return (
        <div>
             

           

            <div
                className='w-[538px] h-[395px] rounded-lg border-l-[1px]  border-b-[1px]  border-gray-llmcardbord bg-gray-llmcardbck  flex flex-col' >

                {/* for count  */}

                <div className='w-full h-[95px] flex flex-row'>

                <div className="coundiv w-[131px]  border-r-[1px] rounded-tr-lg  border-gray-llmcardbord" >
                <Typography
                    variant="heading1"
                    weight={400}
                    className="text-llmcardtext text-wrap pb-3 md:pb-[30px]"
                >
                    {cnt}
                </Typography>

                </div>


                <div className="whitespace grid grid-flow-col grid-rows-2 w-full bg-white border-l-[1px] rounded-bl-lg  border-gray-llmcardbord">
                  
                </div>
                

                </div>



              {/* for cont ent */}


              <div className='mt-8 border-r-[1px] rounded-tr-lg  border-gray-llmcardbord'> 
              <Typography
                    variant="heading2"
                    weight={400}
                    className="text-llmcardtext text-wrap pb-3 md:pb-[30px]"
                >
                    {head}
                </Typography>

                <Typography
                    variant="bodylg"
                    weight={400}
                    className="text-llmcardtext text-wrap pb-4 md:min-pb-[60px]"
                >
                    {desc}
                </Typography>
              
                </div>
               




            </div>
        </div>
    )
}

export default LLMsCard
