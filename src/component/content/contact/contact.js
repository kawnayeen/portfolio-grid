import React, {useState} from 'react';
import {faPencilAlt, faUser} from "@fortawesome/free-solid-svg-icons/index";
import ContactFormInput from "./contact.form.input";
import ContactFormTextArea from "./contact.form.textarea";
import {useSelector} from 'react-redux';
import Page from "../../common/page";

const recipient = 'kamarul@questtag.com';
const subject = 'Hello from portfolio';

const Contact = () => {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const pageInfo = useSelector(state => state.contactPageInfo);

    const submitClicked = () => {
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${msg}\n${name}`;
    };

    return (
        <Page id="contact" pageInfo={pageInfo}>
            <form>
                <ContactFormInput icon={faUser} placeHolder="Name" setValue={val => setName(val)}/>
                <ContactFormTextArea icon={faPencilAlt} placeHolder="Message" setValue={val => setMsg(val)}/>
                <input
                    className="btn bg-danger btn-block btn-lg"
                    value="Submit"
                    onClick={() => submitClicked()}
                    style={{color: 'white'}}/>
            </form>
        </Page>
    );
};

export default Contact;