import React from 'react'
import { featuresList } from '../Lists/featuresList'
import Image from 'next/image'
const Features = () => {
  return (
    <section className='bg-darkBlue-main py-12 lg:py-16 lg:pt-0'>
      <div className='container flex items-center justify-evenly'>
        <div className='max-w-4xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto'>
            
            {
              featuresList.map((feature, index) => (
                <div key={index} className='flex flex-col items-center justify-between max-w-sm p-2 text-center text-wht'>
                  <div className='mb-8'>
                    <Image src={feature.img} alt="/" />
                  </div>
                  <div>
                    <h3 className='mb-4 text-xl font-bold'>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features