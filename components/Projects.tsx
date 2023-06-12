import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const Projects = ({ }: Props) => {

    const projects = [1, 2, 3, 4, 5];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0af3ff]/80'>
                {projects.map((project, i) => (
                    <div key={projects[i]} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: 300,
                                opacity: 0
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                            alt="nameproject"
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#0af3ff]/50'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                PROYECT-NAME
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Id cillum proident exercitation veniam pariatur laboris in occaecat cupidatat anim et velit ea ullamco. Consequat quis elit ut non elit veniam veniam esse laboris veniam enim. Minim magna sunt laboris deserunt magna qui incididunt consequat non culpa consectetur nulla non adipisicing.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[25%] bg-[#0af3ff]/10 left-0 h-[400px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects