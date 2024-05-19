import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import transition from './transition';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="hero home" style={{ minHeight: "90vh" }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
      <motion.img
          src="myImg.jpg"
          className="max-w-sm rounded-full shadow-2xl lg:me-48 myimg"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5], transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' } }}
        />        <motion.div
          className='lg:ms-36 lg:me-16 mt-3 home-1'
          initial={{ opacity: 0, x: '-100px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl lg:text-6xl font-bold home-head">Front End Developer</h1>
          <p className="py-6">I have a passion for transforming concepts into captivating user experiences, I specialize in bridging the gap between creativity and functionality.</p>
          <button className="btn btn-secondary" style={{ boxShadow: "1vh 1vh 3px black" }}><NavLink to="/Project">Projects</NavLink></button>
          <button className="btn btn-secondary mx-4" style={{ boxShadow: "1vh 1vh 3px black" }}><NavLink to="/Contact">Hire Me</NavLink></button>
          <div className='text-xs grid grid-cols-2 gap-6 lg:pt-12'>
            <p className="py-6">Proficient in crafting dynamic MERN applications for seamless user experiences.</p>
            <p className="py-6">Committed to exceeding client expectations through clear communication and meticulous attention to detail.</p>
          </div>
          <div className="social flex flex-row gap-6">
            <FaFacebook size="2rem" className='icon facebook cursor-pointer' />
            <FaTwitter size="2rem" className='icon twitter cursor-pointer' />
            <FaLinkedin size="2rem" className='icon linkedin cursor-pointer' />
            <FaInstagram size="2rem" className='icon insta cursor-pointer' />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default transition(Home);
