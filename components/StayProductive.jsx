import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Productive from '../public/illustration-stay-productive.png'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const StayProductive = () => {
  return (
    <section className='bg-darkBlue-main py-12'>
      <div className='container flex flex-col lg:flex-row items-center justify-center gap-16'>

          <div className='flex-none'>
            <Image src={Productive} alt="/" />
          </div>
          <div>
            <h2 className='text-lg md:text-3xl lg:text-4xl font-bold text-wht mb-4 lg:w-2/3'>Stay productive, wherever you are</h2>
            <p className='md:text-base text-wht mb-2'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p className='md:text-base text-wht mb-2'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <Link href="/" className='md:text-base max-w-fit text-fyloCyan flex items-center gap-2 border-b-2 border-fyloCyan'>
            See how Fylo works
            <BsFillArrowRightCircleFill/>
            </Link>
          </div>

      </div>
    </section>
  )
}

export default StayProductive