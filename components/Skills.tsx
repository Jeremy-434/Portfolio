import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillInterface } from '../typings';

type Props = {
    skills: SkillInterface[];
}

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col gap-2 justify-center items-center min-h-screen mx-auto relative text-center md:text-left max-w-[2000px] xl:px-10 xl:space-x-0'
        >
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>

            <h3 className='uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over skill for currency profiency
            </h3>

            <div className='grid grid-cols-4 gap-5'>
                {skills?.map(skill => (
                    <Skill key={skill?._id} skill={skill} />
                ))}
                {/* {skills?.slice(0, Object.keys(skills).length / 2).map(skill => (
                    <Skill key={skill?._id} skill={skill} />
                ))}
                {skills.slice(Object.keys(skills).length / 2, Object.keys(skills).length).map(skill => (
                    <Skill key={skill?._id} skill={skill} directionLeft />
                ))} */}
            </div>
        </motion.div>
    )
}

export default Skills