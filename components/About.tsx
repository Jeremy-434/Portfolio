import React from 'react';
import { motion } from 'framer-motion';
import oficina from 'public/imgs/oficina.jpg';

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center'>
      <h3 className='ml-4 sm:absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true }}
        src={oficina.src}
        className=' -mb-4 md:mb-0 sm:mt-10 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a {" "}
          <span className='underline decoration-[#0af3ff]/50'>little</span>
          {" "} me
        </h4>
        <p className='text-lg'>
          Passionate about technology, programming and innovation. Always motivated to learn every day. Since I started until today I have worked with several technologies and languages, but in which I have more experience are React, .Net and SQL. I love to meet people with the same passions, with whom I can share knowledge and constantly evolve.        </p>
      </div>

    </motion.div>
  )
}