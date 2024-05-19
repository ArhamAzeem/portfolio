import React from 'react'
import transition from './transition';
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_mgf6sgu', 'template_huzduzr', form.current)
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
  };
    return (
        <div style={{ minHeight: "90vh" }} className="hero contact-bg contact">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:mx-24 text-center lg:text-left text-indigo-800">
                    <h1 className="lg:text-5xl text-3xl font-bold">Contact Me</h1>
                    <p className="py-6">Wanna hire me,Have a proposal or just wanna say hi?<br />+92 0300-0000000 <br />arhamazeempersonal@gmail.com</p>
                    <div className="social flex flex-row gap-6">
                        <FaFacebook size="2rem" className='icon facebook cursor-pointer' />
                        <FaTwitter size="2rem" className='icon twitter cursor-pointer' />
                        <FaLinkedin size="2rem" className='icon linkedin cursor-pointer' />
                        <FaInstagram size="2rem" className='icon insta cursor-pointer' />
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 contact-from">
                    <form className="card-body" ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='from_name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name='user_email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered" name='mail_subject' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tell me what you got to say?</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='message' placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value='Send Message'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default transition(Contact);