    import React from 'react'
    import Data from './skills.json'
    import {motion} from 'framer-motion'
    import transition from './transition';
    function Skills() {
        return (
            <>
                <div style={{ minHeight: "90vh", backgroundColor: "rgba(255, 253, 119, 0.966)" }} className="about lg:grid lg:grid-cols-3">
                    <div className='skills pt-4 pb-4 col-span-2'>
                    <motion.h1
                    initial={{ y: '-50px', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1, delay: 0.5 }}
                    className='lg:text-5xl text-4xl flex justify-center items-center mt-16'
                >
                    About My Skills
                </motion.h1>
                <div className='flex flex-row flex-wrap gap-8 justify-center items-center items-stretch text-black-300 mt-20'>
                    {Data && Data.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', duration: 1, delay: 0.7 + index * 0.2 }}
                            className="card-container"
                        >
                            <div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img src={post.img} alt='Service' />
                                </div>
                            </div>
                            <progress className="progress w-56" value={post.val} max="100"></progress>
                        </motion.div>
                    ))}
                </div>
            </div>
                    <div className="lg:p-24 p-4 flex justify-center items-center">
                        <div className="carousel w-full h-96 lg-rounded text-base-200">
                            <div id="slide1" className="carousel-item relative w-full">
                                <div className="card w-96 bg-purple-500 glass shadow-xl">
                                    <div className="card-body flex flex-column justify-center items-center gap-10">
                                        <div className="avatar ms-auto me-auto mb-8">
                                            <div className="w-16 h-12 rounded-full">
                                                <img src="./Talal.jpg" alt='Service' />
                                            </div>
                                        </div>
                                        <h2 className="card-title flex justify-center">Muhammad Talal</h2>
                                        <p className='text-xs'>"Working with Arham was seamless. Their attention to detail and proactive communication made the project a breeze. I'll definitely be reaching out for future work."</p>
                                        <div className="rating rating-sm flex justify-center">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle glass">❮</a>
                                    <a href="#slide2" className="btn btn-circle glass">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <div className="card w-96 bg-purple-500 glass shadow-xl">
                                    <div className="card-body flex flex-column justify-center items-center gap-10">
                                        <div className="avatar ms-auto me-auto mb-8">
                                            <div className="w-16 h-12 rounded-full">
                                                <img src="./Nouman.jpg" alt='Service' />
                                            </div>
                                        </div>
                                        <h2 className="card-title flex justify-center">Nouman Fazil</h2>
                                        <p className='text-xs'>Hiring Arham was a game-changer. His expertise and dedication shone through in every deliverable. A true professional, I'd eagerly collaborate again!"</p>
                                        <div className="rating rating-sm flex justify-center">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle glass">❮</a>
                                    <a href="#slide3" className="btn btn-circle glass">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <div className="card w-96 bg-purple-500 glass shadow-xl">
                                    <div className="card-body flex flex-column justify-center items-center gap-10">
                                        <div className="avatar ms-auto me-auto mb-8">
                                            <div className="w-16 h-12 rounded-full">
                                                <img src="./AbdurRehman.jpg" alt='Service' />
                                            </div>
                                        </div>
                                        <h2 className="card-title flex justify-center">Abdur Rehman</h2>
                                        <p className='text-xs'>Arham is a rare find. They not only met deadlines but exceeded my expectations with their creativity and precision. Highly recommended for any project.</p>
                                        <div className="rating rating-sm flex justify-center">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle glass">❮</a>
                                    <a href="#slide1" className="btn btn-circle glass">❯</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default transition(Skills);