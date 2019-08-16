import React from 'react';
import {faUser, faEnvelope, faPencilAlt} from "@fortawesome/free-solid-svg-icons/index";
import ContactFormInput from "./contact.form.input";
import ContactFormTextArea from "./contact.form.textarea";
import {useSelector} from 'react-redux';
import Page from "../../common/page";

const Contact = () => {
    const pageInfo = useSelector(state => state.contactPageInfo);
    return (
        <Page id="contact" pageInfo={pageInfo}>
            <form>
                <ContactFormInput icon={faUser} placeHolder="Name"/>
                <ContactFormInput icon={faEnvelope} placeHolder="Email"/>
                <ContactFormTextArea icon={faPencilAlt} placeHolder="Message"/>
                <a href={"mailto:kamarul@questtag.com"} target="_top">
                    <input type="submit" className="btn bg-danger btn-block btn-lg" value="Submit"
                           style={{color: 'white'}}/>
                </a>
            </form>
        </Page>
    );
};

export default Contact;