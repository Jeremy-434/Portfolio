import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='ml-4 mt-10 top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0af3ff]/80'>
        <ExperienceCard title={ 'Student' } />
        <ExperienceCard title={ 'Student' } />
        <ExperienceCard title={ 'Student' } />
        <ExperienceCard title={ 'Student' } />
        <ExperienceCard title={ 'Student' } />
      </div>
    </motion.div>
  )
}