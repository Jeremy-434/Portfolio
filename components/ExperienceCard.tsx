import React from 'react';
import { motion } from 'framer-motion';
import batman from 'public/imgs/batman-feo.jpg';

type Props = { title: String }

export default function ExperienceCard({ title }: Props) {
    return (
        <article className='flex flex-col rounded.lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[400px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src={batman.src}
                alt=""
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{ title }</h4>
                <p className='font-bold text-xl mt-1'>MinTic 2021</p>
                <div className='flex space-x-2 my-2'>
                    <img
                    className='h-6 w-6 rounded-full' 
                    src={batman.src} 
                    alt="" />
                </div>
                <p className='uppercase py-2 text-gray-300'>Started work... - Ended...</p>

                <ul className='list-disc space-y-2 ml-5 text-xs'>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    )
}