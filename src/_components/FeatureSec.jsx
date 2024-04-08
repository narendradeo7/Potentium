import React from 'react'
import FeatCard from './_atoms/FeatCard'
import { featuresCardConfig } from '../_config/featurescard';



const FeatureSec = () => {
    return (
        <div className='bg-primary1 w-full h-fit flex flex-col items-center  px-15 '>
          {featuresCardConfig.cards.map((card, index) => (
            <div 
             className='mb-15'> 
            <FeatCard
              key={index}
              feat={card.feat}
              head={card.head}
              desc={card.desc}
              btntext={card.btntext}
              fwdlink={card.fwdlink}
              imglink={card.imglink}
              leftImg={card.left}
            />

</div>
          ))}
        </div>
      );
    };
    
  
    
export default FeatureSec
