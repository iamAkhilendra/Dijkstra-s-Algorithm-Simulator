import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

export default function ContactMe() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_lhylb7n', 'template_e90m39v', form.current, {
            publicKey: 'MXc2F-07laW31mews',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };

    return (
        <div id='contact-me'>
            <form action="" onSubmit={sendEmail} ref={form}>
                <div className="input-field">
                    <input type="text" name="user_name" className="input-field-element"  placeholder=''/>
                    <label>Name</label>
                </div>
                <div className="input-field">
                    <input type="email" name="user_email" id="contact-me-email" className="input-field-element"  placeholder=''/>
                    <label>E-mail</label>
                </div>
                <div className="input-field">
                    <input type="number" name="user_p_number" id="" className="input-field-element"  placeholder=''/>
                    <label>Phone Number</label>
                </div>
                <div className="input-field">
                    <textarea name="user_message" id="contact-me-message" cols="30" rows="10" placeholder=''></textarea>
                    <label>Message</label>
                </div>
                <div>
                    <input type="submit" value="Submit" id="contact-me-submit-button" />
                </div>
            </form>
        </div>
    )
}
