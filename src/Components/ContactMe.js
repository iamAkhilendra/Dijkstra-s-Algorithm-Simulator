import React from 'react';
import './ContactMe.css';

export default function ContactMe() {
    return (
        <div id='contact-me'>
            <div id="contact-me-box">
                <form action="">
                    <div className='input-values' id="contact-me-user-name-div">
                        <input type="text" name="user-name"/>
                    </div>   
                    <div className='input-values' id="contact-me-user-email-div">
                        <input type="email" name="user-email"/>
                    </div>     
                    <div className='input-values' id="contact-me-user-phone-number-div">
                        <input type="number" inputMode='numeric' pattern="[0-9]*" name="user-phone-number" />
                    </div> 
                    <div className='input-values' id="contact-me-form-message-div">
                        <textarea name="user-message" cols="30" rows="10" id="contact-me-form-message" ></textarea>
                    </div> 
                    <div>
                        <input type="submit" value="Submit" id="contact-me-submit-button" />
                    </div>                
                </form>
            </div>
        </div>
    )
}
