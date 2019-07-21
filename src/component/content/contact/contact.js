import React from 'react';
import {faUser, faEnvelope, faPencilAlt} from "@fortawesome/free-solid-svg-icons/index";
import ContactFormInput from "./contact.form.input";
import ContactFormTextArea from "./contact.form.textarea";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";

const Contact = () => {
    return (
        <div id="contact" className="collapse show">
            <Legend
                title="Contact"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!"
                bgStyle="danger"/>

            <ContentArea
                title="Get In Touch"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.">
                <form>
                    <ContactFormInput icon={faUser} placeHolder="Name"/>
                    <ContactFormInput icon={faEnvelope} placeHolder="Email"/>
                    <ContactFormTextArea icon={faPencilAlt} placeHolder="Message"/>
                    <input type="submit" className="btn bg-danger btn-block btn-lg" value="Submit"
                           style={{color: 'white'}}/>
                </form>
            </ContentArea>
        </div>
    );
};

export default Contact;