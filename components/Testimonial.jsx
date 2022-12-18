import React from 'react'
import Image from 'next/image'
import { testimonials } from '../Lists/testimonials'
import BgQuote from '../public/bg-quotes.png'

const Testimonial = () => {
  return (
    <section className='bg-darkBlue-main py-12 lg:pt-16'>
      <div className='container relative'>

        <div className='relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 lg:px-8'>
        <div className='absolute -top-6 w-6 lg:top-[-16%] lg:left-[1%] lg:w-full'>
          <Image src={BgQuote} alt="/" />
        </div>
          {
            testimonials.map((item, index) => (
              <div key={index} className='p-4 bg-darkBlue-tst rounded-lg z-10'>
                <p className='text-xs lg:text-base leading-5 mb-4'>{item.msg}</p>
                
                <div className='flex items-center gap-2'>
                  <div className='w-8 h-8 rounded-full overflow-hidden'>
                    <Image src={item.img} alt="/" />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h4 className='font-bold'>{item.name}</h4>
                    <small className='text-[.63rem]'>{item.jobTitle}</small>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonial