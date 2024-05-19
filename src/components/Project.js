import React from 'react';
import transition from './transition';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <div style={{ minHeight: "90vh" }} className='projects pt-4 pb-4'>
            <motion.h1
                initial={{ x: '-50px', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                className='text-4xl flex justify-center items-center mb-4 text-base-200'
            >
                My Projects
            </motion.h1>
            <div className='flex flex-row flex-wrap gap-8 justify-center items-center items-stretch text-black-300 pt-8'>
                {Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.7 + index * 0.2 }}
                        className="mockup-browser border bg-base-300 w-96"
                    >
                        <div className="mockup-browser-toolbar">
                            <div className="input">http://localhost:3000/</div>
                        </div>
                        <div className="flex justify-center px-4 py-16 bg-base-200 cursor-pointer">Coming Soon!</div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default transition(Projects);
