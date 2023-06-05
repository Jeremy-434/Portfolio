import React from 'react';
import { motion } from 'framer-motion';
import oficina from 'public/imgs/oficina.jpg';
import js from 'public/imgs/icons/js.png';

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
                className='rounded-full w-28 h-28 xl:w-[100px] xl:h-[100px] object-cover object-center'
                src={oficina.src}
                alt=""
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{title}</h4>
                <p className='font-bold text-xl mt-1'>MinTic 2022</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='h-6 w-6 rounded-full'
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                        alt="" />
                </div>
                <p className='uppercase py-2 text-gray-300'>JUN 2021 - DEC 2021</p>

                <ul className='list-disc space-y-2 ml-5 text-xs'>
                    <li>Fundamentals of Programming with Python</li>
                    <li>Programming Basic Java Programming Language</li>
                    <li>Software Development with Java Programming Language</li>
                    <li>Skills in Programming with emphasis on Web Applications</li>
                </ul>
            </div>
        </article>
    )
}