import React from 'react'
import Image from 'next/image'
import Fylo from '../../public/fylo-logo.svg'
import NavLink from '../NavLink'
import Link from 'next/link'
import {headerNavList} from '../../Lists/headerNavList'

const Header = () => {
  
  return (
    <header className='layout-header w-full lg:mt-14 bg-darkBlue-intro'>
      <div className='container py-2 flex items-center justify-between'>
        <div className='relative h-12 w-20 lg:w-24'>
          <Link href='/'>
            <Image src='/fylo-logo.svg' alt="/" fill={true} className='object-contain'/>
          </Link>
        </div>
        <nav className='text-wht lg:text-base'>
          <ul className='flex items-center gap-6 lg:gap-12'>
            {
              headerNavList.map((item, index) => (
                <NavLink key={index} item={item}/>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header