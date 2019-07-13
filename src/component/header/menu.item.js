import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

const MenuItem = ({name, backgroundColor, icon, path}) => {
    const style = `port-item p-4 ${backgroundColor}`;
    return (
        <div className={style}>
            <Link to={path} style={{color: 'white', textDecoration: 'none'}}>
            <span className="d-block">
                <FontAwesomeIcon icon={icon} size="lg"/>
            </span>
                {name}
            </Link>
        </div>
    );
};

export default MenuItem;