import React from 'react'
import Image from 'next/image'
import IntroIllustration from '../public/illustration-intro.png'
import IntroBgMobile from '../public/bg-curvy-mobile.svg'
import IntroBgDesktop from '../public/bg-curvy-desktop.svg'


const Hero = () => {
  return (
    <section id='hero' className='relative mt-24 lg:mt-24 lg:pb-56'>

      <div className='container'>
        <div className='max-w-3xl mx-auto flex items-center justify-center flex-col'>
          <div className=' mb-8'>
            <Image src={IntroIllustration} alt="" />
          </div>
          <div className='text-center'>
            <h1 className='text-2xl md:text-4xl lg:leading-relaxed font-bold text-wht mb-6'>All your files in one secure location, accessible anywhere.</h1>
            <h3 className='text-wht md:text-base lg:text-lg leading-5 mb-6 max-w-[540px] mx-auto'>Fylo stores all your most important files in one secure location. Access them wherever 
      you need, share and collaborate with friends family, and co-workers.</h3>

      <button className='w-56 btn-cyan'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='absolute left-0 right-0 bottom-0 -z-10 w-full'>
        <Image src={IntroBgMobile} alt="" className='lg:hidden w-full'/>
        <Image src={IntroBgDesktop} alt="" className='hidden lg:block w-full'/>

        <div className='bg-darkBlue-main h-52 w-full lg:hidden'></div>
      </div>
    </section>
  )
}

export default Hero