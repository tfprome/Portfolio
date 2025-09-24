import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SectionTittle from './shared/SectionTittle';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPhone, FaSquareFacebook } from 'react-icons/fa6';

const contactDetails = [
  { icon: <MdEmail />, tittle: "Email", subTittle: "tfpromy99@gmail.com" },
  { icon: <FaPhone />, tittle: "Phone", subTittle: "+8801705790831" },
  { icon: <MdLocationOn />, tittle: "Location", subTittle: "Dhaka, Bangladesh" },
];

const socialStyle = 'hover:text-primary transition-all ease-in-out duration-300 rounded-full bg-slate-700 p-3';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l62w3l7','template_rf2b7rv', form.current, {
      publicKey: '7gN2HkwxSrhf-1z-P',
    })
    .then(() => {
      console.log('SUCCESS!');
      toast.success("Email Sent Successfully", { position: "bottom-left" });
      form.current.reset();
    })
    .catch((error) => {
      console.log('FAILED...', error.text);
      toast.error("Email Sending Failed");
    });
  };

  return (
    <div id="contact-me" className="section-container pb-20">
      <SectionTittle
        head="Contact"
        tittle1="Get In"
        tittle2="Touch"
        subTittle="Have an idea in mind or just want to say hello? Feel free to reach out!"
        color="secondary"
      />

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:flex-1">
          <div className="bg-accent rounded-xl p-8 py-10 shadow-lg relative z-10">
            <h3 className="text-2xl text-white font-semibold pb-6">Contact Information</h3>
            <div className="space-y-5">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-xl bg-slate-700 rounded-full h-10 w-10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.tittle}</h3>
                    <p className="text-lg text-gray-400">{item.subTittle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 space-y-3">
              <h4 className="text-white font-semibold">Connect with me</h4>
              <div className="flex gap-6">
                <a className={socialStyle} target="_blank" rel="noreferrer" href="https://github.com/tfprome">
                  <FaGithub />
                </a>
                <a className={socialStyle} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tasnim-ferdous-143050374/">
                  <FaLinkedin />
                </a>
                <a className={socialStyle} target="_blank" rel="noreferrer" href="https://www.facebook.com/tf.promi">
                  <FaSquareFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-[65%]">
          <div className="bg-accent rounded-xl p-8 py-10 shadow-lg relative z-10">
            <h3 className="text-2xl text-white font-semibold pb-6">Send me a message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <div className="flex gap-5">
                <div className="form-control flex-1">
                  <label className="label pt-0">
                    <span className="label-text font-semibold">First Name</span>
                  </label>
                  <input type="text" name="user_first_name" className="input input-bordered border-none focus:outline-none focus:outline-primary bg-slate-700" required />
                </div>
                <div className="form-control flex-1">
                  <label className="label pt-0">
                    <span className="label-text font-semibold">Last Name</span>
                  </label>
                  <input type="text" name="user_last_name" className="input input-bordered border-none focus:outline-none focus:outline-primary bg-slate-700" required />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input type="email" name="user_email" className="input input-bordered border-none focus:outline-none focus:outline-primary bg-slate-700" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input type="text" name="user_subject" className="input input-bordered border-none focus:outline-none focus:outline-primary bg-slate-700" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea name="message" className="input input-bordered h-28 border-none focus:outline-none focus:outline-primary bg-slate-700" required />
              </div>

              <div className="pt-4">
                <button className="btn bg-gradient-to-r from-primary to-secondary w-full text-gray-900 border-none text-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
