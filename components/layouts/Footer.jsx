import Image from 'next/image'
import FooterNavLink from '../FooterNavLink';
import Fylo from '../../public/fylo-logo.svg'
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Email from '../../public/icon-email.svg'
import PhoneIcon from '../../public/icon-phone.svg'

const Footer = () => {
  return (
    <footer className='bg-darkBlue-footer pb-12 pt-64 lg:pt-40'>
      <div className="container">

        <div className='w-24 mb-12'>
          <Image src={Fylo} alt="/" />
        </div>
        <div className='flex flex-col lg:flex-row items-start justify-between'>
          
          <div className='flex basis-1/4 gap-6 mb-4 lg:mb-0'>
            <MdLocationOn size={24} className='flex-none'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className='max-w-fit flex flex-col basis-1/4 gap-6 mb-14 lg:mb-0'>
            <div className='flex gap-6'>
              <Image src={PhoneIcon} alt="/" />
              <p>+1-543-123-4567</p>
            </div>
            <div className='flex gap-6'>
              <Image src={Email} alt="/" />
              <p>example@fylo.com</p>
            </div>
          </div>
  
          <nav className='grid lg:grid-cols-2 gap-12 mb-14 lg:mb-0'>
            <ul className='flex flex-col gap-4'>
              <FooterNavLink linkUrl='#' linkName='About Us' />
              <FooterNavLink linkUrl='#' linkName='Jobs' />
              <FooterNavLink linkUrl='#' linkName='Press' />
              <FooterNavLink linkUrl='#' linkName='Blog' />
            </ul>
            <ul className='flex flex-col gap-4'>
              <FooterNavLink linkUrl='#' linkName='Contact Us' />
              <FooterNavLink linkUrl='#' linkName='Terms' />
              <FooterNavLink linkUrl='#' linkName='Privacy' />
            </ul>
          </nav>

          <div className='max-w-fit basis-1/4 mx-auto lg:mx-0'>
            <ul className='flex items-center gap-4'>
              <li>
                <a href="#" className='flex items-center justify-center h-7 w-7 lg:h-8 lg:w-8 p-2 border border-wht rounded-full hover:text-fyloCyan hover:border-fyloCyan'><FaFacebookF/></a>
              </li>
              <li>
                <a href="#" className='flex items-center justify-center h-7 w-7 lg:h-8 lg:w-8 p-2 border border-wht rounded-full hover:text-fyloCyan hover:border-fyloCyan'><FaTwitter/></a>
              </li>
              <li>
                <a href="#" className='flex items-center justify-center h-7 w-7 lg:h-8 lg:w-8 p-2 border border-wht rounded-full hover:text-fyloCyan hover:border-fyloCyan'><FaInstagram/></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer