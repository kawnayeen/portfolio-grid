import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactFormItem = ({icon, placeHolder}) => {
    return (
        <div className="form-group">
            <div className="input-group input-group-lg">
                <span className="input-group-addon bg-danger text-white">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                <input type="text" className="form-control bg-inverse text-white" placeholder={placeHolder}/>
            </div>
        </div>
    );
};

export default ContactFormItem;