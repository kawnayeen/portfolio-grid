import React from 'react';
import {useSelector} from "react-redux";

const Title = () => {
    const title = useSelector(state => state.title);
    return (
        <div className="p-4 bg-dark">
            {title}
        </div>
    );
};

export default Title;