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
                <div className='flex flex-col md:flex-row md:gap-10'>
                    <form ref={form} onSubmit={sendEmail} className='md:w-1/2 dark:text-white'>
                        <div className='form-control '>
                            <label className="label">
                                <span className="label-text text-lg font-semibold dark:text-white">Your Name</span>
                            </label>
                            <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered dark:bg-sky-700 dark:placeholder-gray-200 dark:text-white" required />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg font-semibold dark:text-white">Your Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder="Enter your email" className="input input-bordered  dark:bg-sky-700 dark:placeholder-gray-200 dark:text-white" required />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text text-lg font-semibold dark:text-white">Message</span>
                            </label>
                            <textarea type="text" name="message" placeholder="Enter your message" className="input input-bordered h-28  dark:bg-sky-700 dark:placeholder-gray-200 dark:text-white" required />
                        </div>
                        <div className="mt-6">
                            <button className="btn bg-sky-600 w-full text-white border-none dark:bg-sky-400 dark:hover:bg-sky-500 dark:text-gray-100">Send Message</button>
                        </div>
                    </form>
                    <div className='text-center flex flex-col items-center justify-center dark:text-gray-100 md:w-1/2 py-10'>
                        <div>
                        <div className='flex items-end gap-3'>
                            <h3 className='text-2xl font-semibold'> Email:</h3>
                            <p className='text-lg'>hasibul277127@gmail.com</p>
                        </div>
                        <div className='flex items-end gap-3'>
                            <h3 className='text-2xl font-semibold'> Address:</h3>
                            <p className='text-lg'>Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-end gap-3'>
                            <h3 className='text-2xl font-semibold'> Phone/Whatsapp:</h3>
                            <p className='text-lg'>01791669909</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;