import React from 'react'
import { ResourceConfig } from '../_config/ResourcesConfig'
import Typography from './_atoms/Typography/Typography'
import ForwardButton from './_atoms/Button/ForwardButton'

const ResourcesSec = () => {
    return (
      
            <div 
            className='h-[740px] w-full bg-cover bg-center flex flex-col items-center px-15' 
            style={{ backgroundImage: `url(${ResourceConfig.imglink})` }}>

                <div className='rsrccont px-28  py-31 flex gap-50 '>
                   

                   <div className='featimg'>



                   </div>

                      <div className='rscrctext'>
                      
                    <Typography
                        variant="heading1"
                        weight={400}
                        className="text-white text-wrap pb-3 md:pb-[30px]"
                    > {ResourceConfig.head}</Typography>

                    <Typography
                        variant="bodylg"
                        weight={400}
                        className="text-white text-wrap pb-4 md:pb-[60px]"
                    >
                        {ResourceConfig.desc}
                    </Typography>

                    <ForwardButton btntext={ResourceConfig.btntext} />


                      </div>




                </div>

            </div>

    
    )
}

export default ResourcesSec
