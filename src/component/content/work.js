import React from 'react';

const Work = () => {
    return (
        <div id="work" className="collapse show">
            <div className="card card-block card-warning text-white py-5">
                <h2>My Portfolio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!</p>
            </div>
            <div className="card card-block py-5">
                <h3>What Have I Built?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=255" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=255" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=256" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=256" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=257" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=257" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=258" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=258" alt="" className="img-fluid"/>
                        </a>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=259" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=259" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=260" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=260" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=261" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=261" alt="" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="https://picsum.photos/1200/768.jpg?image=250" data-toggle="lightbox">
                            <img src="https://picsum.photos/600.jpg?image=250" alt="" className="img-fluid"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;