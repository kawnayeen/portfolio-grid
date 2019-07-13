import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactFormGroup = ({icon, children}) => {
    return (
        <div className="form-group">
            <div className="input-group input-group-lg">
                <span className="input-group-addon bg-danger text-white">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                {children}
            </div>
        </div>
    );
};

export default ContactFormGroup;