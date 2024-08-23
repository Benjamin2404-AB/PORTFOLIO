import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/ContactUs.css'

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_0hfr42p';
    const templateId = 'template_mbdrc1t';
    const publicKey = 'syuDp64jAZqjp-PA9';

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS service ID, template ID, or public key is not defined.');
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label className="na">Name</label>
      <input type="text" name="user_name" required />
      <label className="ma">Email</label>
      <input type="email" name="user_email" required />
      <label className="ta">Message</label>
      <textarea name="message" required />
      <button type="submit" className='sMb'>Send</button>
    </form>
  );
};
