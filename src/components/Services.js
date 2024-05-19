import React from 'react';
import ServiceData from './services.json';
import transition from './transition';
import { motion } from 'framer-motion';

function Services() {
    return (
        <div style={{ minHeight: "90vh" }} className='services pt-4 pb-4'>
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                className='text-4xl flex justify-center items-center mb-4 text-base-200'
            >
                Services
            </motion.h1>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, delay: 0.7 }}
                className='flex flex-row flex-wrap gap-8 justify-center items-center items-stretch text-black-300'
            >
                {ServiceData && ServiceData.map(post => (
                    <motion.div
                        key={post.id}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 1, delay: 0.9 }}
                        className="card w-96 bg-base-100 shadow-xl glass"
                    >
                        <div className="card-body">
                            <div className="avatar ms-auto me-auto">
                                <div className="w-16 h-12 rounded-full">
                                    <img src={post.img} alt='Service' />
                                </div>
                            </div>
                            <h2 className="card-title">{post.title}</h2>
                            <p className='text-xs'>{post.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default transition(Services);
