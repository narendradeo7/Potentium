import React from 'react'
import { LLMsConfig } from '../_config/LLMsConfig'
import LLMsCard from './_atoms/LLMsCard'

const LLMsSec = () => {
  return (
    <div className='grid grid-flow-row grid-cols-2 p-12 gap-y-5'>


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
  )
}

export default LLMsSec
