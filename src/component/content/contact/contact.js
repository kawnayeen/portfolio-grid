import React from 'react';
import {faUser, faEnvelope, faPencilAlt} from "@fortawesome/free-solid-svg-icons/index";
import ContactFormInput from "./contact.form.input";
import ContactFormTextArea from "./contact.form.textarea";
import Legend from "../../common/legend";
import ContentArea from "../../common/content";
import {useSelector} from 'react-redux';

const Contact = () => {
    const pageInfo = useSelector(state => state.contactPageInfo);
    return (
        <div id="contact" className="collapse show">
            <Legend
                title={pageInfo.navTitle}
                description={pageInfo.navDescription}
                bgStyle={pageInfo.navBg}/>

            <ContentArea
                title={pageInfo.pageTitle}
                description={pageInfo.pageDescription}>
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