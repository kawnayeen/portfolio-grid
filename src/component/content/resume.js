import React from 'react';

const Resume = () => {
    return (
        <div id="resume" className="collapse show">
            <div className="card card-block card-success text-white py-5">
                <h2>My Resume</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!</p>
            </div>
            <div className="card card-block py-5">
                <h3>Where Have I Worked?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                <div className="card-deck">
                    <div className="card mb-3">
                        <div className="card-block">
                            <h4 className="card-title">Devmasters</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
                                neque!</p>
                            <p className="p-2 mb-3 bg-inverse text-white">
                                Position: Full Stack Developer
                            </p>
                            <p className="p-2 mb-3 bg-inverse text-white">
                                Phone: (555) 555-5555
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">Dates: 2015 - 2017</h6>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-block">
                            <h4 className="card-title">Websites Pro</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
                                neque!</p>
                            <p className="p-2 mb-3 bg-inverse text-white">
                                Position: Front End Developer
                            </p>
                            <p className="p-2 mb-3 bg-inverse text-white">
                                Phone: (444) 444-4444
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">Dates: 2013 - 2015</h6>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-block">
                            <h4 className="card-title">123 Designs</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
                                neque!</p>
                            <p className="p-2 mb-3 bg-inverse text-white">
                                Position: Designer
                            </p>
                            <p className="p-2 mb-3 bg-inverse text-white">
                                Phone: (333) 333-3333
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">Dates: 2010 - 2013</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;