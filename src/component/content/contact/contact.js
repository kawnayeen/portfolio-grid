import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faUser, faEnvelope, faPencilAlt} from "@fortawesome/free-solid-svg-icons/index";
import ContactFormInput from "./contact.form.input";
import ContactFormTextArea from "./contact.form.textarea";

const Contact = () => {
    return (
        <div id="contact" className="collapse show">
            <div className="card card-block card-danger text-white py-5">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!</p>
            </div>
            <div className="card card-block py-5">
                <h3>Get In Touch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                <form>
                    <ContactFormInput icon={faUser} placeHolder="Name"/>
                    <ContactFormInput icon={faEnvelope} placeHolder="Email"/>
                    <ContactFormTextArea icon={faPencilAlt} placeHolder="Message"/>
                    <input type="submit" className="btn bg-danger btn-block btn-lg" value="Submit"
                           style={{color: 'white'}}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;