'use client';
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [data, setData] = useState({
    full_name: "",
    email: "",
    message: "",
  })

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return; // Ensure the form exists

    emailjs
      .sendForm('service_av80zeg', 'template_iuthdeh', form.current, 'dbyPllPLfEyUqB9ui')
      .then(
        () => {
          setIsOpen(true);
          setData({
            full_name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-[1109px] h-[661px] rounded-[50px] shadow-md bg-secondary mx-auto px-[45px] py-[45px] flex flex-col">
      <div className="flex flex-col items-center justify-center w-full mb-[45px]">
        <h1 className="lowercase text-48-jakarta text-center">Get in Touch</h1>
        <h2 className="uppercase text-12-inter tracking-[0.15em] mt-[14px] text-center">
          I do Code Commissions!
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-[320px]">
            <input
              className="w-full tracking-[0.15em] bg-secondary border-[0.5px] border-primary-100 px-[17px] py-[18px] focus:outline-blue-400 text-12-inter mt-[21px] rounded-[18px]"
              type="text"
              placeholder="FULLNAME"
              name="full_name"
              value={data.full_name}
              onChange={(e) =>{
                setData({
                    ...data,
                    full_name: e.target.value,
                });
              }}
            />
            <br />
            <input
              className="w-full tracking-[0.15em] bg-secondary border-[0.5px] border-primary-100 px-[17px] py-[18px] focus:outline-blue-400 text-12-inter mt-[21px] rounded-[18px]"
              type="text"
              placeholder="EMAIL"
              name="email"
              value={data.email}
              onChange={(e) =>{
                setData({
                    ...data,
                    email: e.target.value,
                });
              }}
            />
            <textarea
              className="w-full tracking-[0.15em] bg-secondary border-[0.5px] border-primary-100 px-[17px] py-[18px] focus:outline-blue-400 text-12-inter mt-[21px] rounded-[18px]"
              name="message"
              id="message"
              placeholder="MESSAGE"
              value={data.message}
              onChange={(e) =>{
                setData({
                    ...data,
                    message: e.target.value,
                });
              }}
            ></textarea>
            <button
              type="submit"
              className="w-full tracking-[0.15em] bg-black text-12-inter-white py-[18px] mt-[31px] rounded-[18px] hover:bg-gray-900 duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        {/* Image Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center mt-[35px] lg:mt-0">
          <img
            src="/contact-pic.png"
            alt="Contact Illustration"
            className="max-w-[411px] rounded-[24px]"
          />
          <span className="text-10-inter tracking-[0.15em] mt-[15px]">@illiyinstudio</span>
        </div>
      </div>
      {isOpen && <Modal isOpen={setIsOpen}/>}
    </div>

  );
};

export default Contact;
