import React, {Fragment} from 'react';

const Skill = ({name, selfMarking}) => {
    const style = {
        width: `${selfMarking}%`
    };

    return (
        <Fragment>
            <h4>{name}</h4>
            <div className="progress mb-3">
                <div className="progress-bar bg-success" role="progress-bar" style={style}></div>
            </div>
        </Fragment>
    );
};

export default Skill;