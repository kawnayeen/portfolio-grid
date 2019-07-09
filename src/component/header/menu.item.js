import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MenuItem = ({name, backgroundColor, icon}) => {
    const style = `port-item p-4 ${backgroundColor}`;
    return (
        <div className={style}>
            <span className="d-block">
                <FontAwesomeIcon icon={icon} size="lg"/>
            </span>
            {name}
        </div>
    );
};

export default MenuItem;