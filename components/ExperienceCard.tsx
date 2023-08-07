import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full object-cover object-center'
                src={urlFor(experience?.companyImage).url()}
                alt="Indra Logo"
            />
            <div className='px-0 md:px-10 overflow-hidden '>
                <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience?.technologies.map(technology => (
                        <img
                            key={technology._id}
                            className='h-6 w-6 rounded-full'
                            src={technology?.image && urlFor(technology.image).url()}
                            alt={technology?.title}
                        />
                    ))}
                </div>
                <p className='uppercase py-2 text-gray-300'>
                    {new Date(experience?.dateStarted).toDateString()} - {new Date(experience?.dateEnded).toDateString()}
                </p>

                <ul className='list-disc space-y-2 ml-5 text-xs h-40 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-500 scrollbar-thumb-[#0af3ff]/80'>
                    {experience?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}