import React from 'react';
import './ContactMe.css';

export default function ContactMe() {
    return (
        <div id='contact-me'>
            <form action="">
                <div className="input-field">
                    <input type="text" className="input-field-element"  placeholder=''/>
                    <label>Name</label>
                </div>
                <div className="input-field">
                    <input type="email" className="input-field-element"  placeholder=''/>
                    <label>E-mail</label>
                </div>
                <div className="input-field">
                    <input type="number" name="" id="" className="input-field-element"  placeholder=''/>
                    <label>Phone Number</label>
                </div>
                <div className="input-field">
                    <textarea name="" id="contact-me-message" cols="30" rows="10" placeholder=''></textarea>
                    <label>Message</label>
                </div>
                <div>
                    <input type="submit" value="Submit" id="contact-me-submit-button" />
                </div>
            </form>
        </div>
    )
}
