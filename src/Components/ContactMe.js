import React, {useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

export default function ContactMe() {  

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(newValue);
    };

    const successExecutable = () => {
        const successElement = document.getElementById("success");
        successElement.style.display = 'inline-block';
        setTimeout(()=>{
            console.log("hii");
            successElement.style.display = 'none';
        }, 3000);
    }

    const failureExecutable = () => {
      const successElement = document.getElementById("failure");
      successElement.style.display = 'inline-block';
      setTimeout(()=>{
          console.log("hii");
          successElement.style.display = 'none';
      }, 3000);
  }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_lhylb7n', 'template_e90m39v', form.current, {
            publicKey: 'MXc2F-07laW31mews',
          })
          .then(
            () => {
              successExecutable();
            },
            () => {
              failureExecutable();
            },
          );
          e.target.reset();
      };

    return (
        <div id='contact-me'>
            <form action="" onSubmit={sendEmail} ref={form}>
                <div className="input-field">
                    <input type="text" name="user_name" className="input-field-element"  placeholder='' required/>
                    <label>Name</label>
                </div>
                <div className="input-field">
                    <input type="email" name="user_email" id="contact-me-email" className="input-field-element"  placeholder='' required/>
                    <label>E-mail</label>
                </div>
                <div className="input-field">
                    <input type="text" name="user_p_number" id="contact-me-number-input" className="input-field-element" value={value} placeholder='' onChange={handleChange}/>
                    <label>Phone Number</label>
                </div>
                <div className="input-field">
                    <textarea name="user_message" id="contact-me-message" cols="30" rows="10" placeholder='' required></textarea>
                    <label>Message</label>
                </div>
                <div>
                    <input type="submit" value="Submit" id="contact-me-submit-button" />
                </div>
            </form>

            <p class="contact-me-submit-message" id="success">E-mail has been successfully sent.</p>
            <p class="contact-me-submit-message" id="failure">Failed to send the E-mail, Please try again.</p>
        </div>
    )
}
