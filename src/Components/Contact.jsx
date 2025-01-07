import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        
        emailjs.sendForm('service_442k6r3', 'template_11ciokw', form.current, {
                publicKey: '81H-paFwAEGNQSEKu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email Sent Successfully")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Email Sending Failed")
                },
            );
            form.current.reset();
    }
    return (
        <div id='contact-me' className='w-11/12 mx-auto py-10'>
            <h1 className='text-6xl font-bold text-center'>Contact</h1>
            <div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <form ref={form} onSubmit={sendEmail} className='md:w-1/2'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Your Name</span>
                            </label>
                            <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Your Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Message</span>
                            </label>
                            <textarea type="text" name="message" placeholder="Enter your message" className="input input-bordered h-28" required />
                        </div>
                        <div className="mt-6">
                            <button className="btn bg-sky-600 text-white">Submit</button>
                        </div>
                    </form>
                    <div className='flex md:flex-col md:text-end gap-10 py-10'>
                        <div>
                            <h3 className='text-2xl font-semibold'>My Email</h3>
                            <p className='text-lg'>hasibul277127@gmail.com</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>My Address</h3>
                            <p className='text-lg'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;