import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'




const GetStarted = () => {

  const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Required"),
 })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  
  const onSubmit = (data) => {
    console.table(data);
  }

  return (
    <section className='relative py-28 lg:py-32 bg-darkBlue-main'>
      <div className="container absolute top-16 lg:top-32 left-0 right-0">

        <div className='max-w-3xl mx-auto p-7 lg:p-8 bg-darkBlue-intro rounded-lg shadow-md'>
          <h3 className='text-xl md:text-3xl lg:text-4xl font-bold text-center mb-4'>Get early access today</h3>
          <p className='text-center text-[.8rem] mb-6 max-w-xl mx-auto'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

          <form onSubmit={handleSubmit(onSubmit)} className='flex items-center lg:items-start flex-col lg:flex-row gap-4 max-w-2xl mx-auto'>
            <div className='w-full basis-2/3'>
              <input type="text" placeholder='email@example.com' {...register("email")} className='px-6 py-4 text-darkBlue-footer w-full rounded-full focus:outline-fyloCyan active:outline-fyloCyan' />
              <small className="pl-6 text-lightRed">{errors.email?.message}</small>
            </div>
            <button className='btn-cyan w-full basis-1/3'>Get Started For Free</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default GetStarted