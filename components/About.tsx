import React from 'react'
import { motion } from 'framer-motion'
// import oficina from 'public/imgs/oficina.jpg'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo;
}

export default function About ({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center'
    >
      <h3 className='ml-4 sm:absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true }}
        src={pageInfo?.profilePic && urlFor(pageInfo.profilePic).url() ? urlFor(pageInfo.profilePic).url() : ''}
        title='Image created with IA'
        className=' -mb-4 md:mb-0 sm:mt-10 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a {' '}
          <span className='underline decoration-[#0af3ff]/50'>little</span>
          {' '} me
        </h4>
        <p className='text-lg'>{pageInfo?.backgroundInformation}</p>
      </div>

    </motion.div>
  )
}
