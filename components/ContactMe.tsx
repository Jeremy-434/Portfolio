import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// type Props = {}

const ContactMe = () => {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jeremy9451.lmd@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col md:flex-row items-center space-x-5 space-y-10'>
        <div className='space-y-10'>
          <h4 className='text-4xl font-semibold text-center space-y-10'>
            I have got just what you need.{' '}
            <span className='decoration-[#0af3ff]/50 underline'>"Let's talk."</span>
          </h4>
          <div className='space-y-2'>
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#0af3ff] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>+57 3057399225</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-[#0af3ff] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>jeremy9451.lmd@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-[#0af3ff] h-7 w-7 animate-pulse' />
              <p className='text-2xl'>Bogota D.C</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
            <input {...register('email')} placeholder='Email' className='contactInput' type='text' />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button
            type='submit'
            className='bg-[#0af3ff] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
