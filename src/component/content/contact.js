import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="collapse show">
            <div className="card card-block card-danger text-white py-5">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, blanditiis!</p>
            </div>
            <div className="card card-block py-5">
                <h3>Get In Touch</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, nobis cum quidem perferendis
                    repellendus at.</p>
                <form>
                    <div className="form-group">
                        <div className="input-group input-group-lg">
              <span className="input-group-addon bg-danger text-white">
                <i className="fa fa-user"></i>
              </span>
                            <input type="text" className="form-control bg-inverse text-white" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group input-group-lg">
              <span className="input-group-addon bg-danger text-white">
                <i className="fa fa-envelope"></i>
              </span>
                            <input type="email" className="form-control bg-inverse text-white" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group input-group-lg">
              <span className="input-group-addon bg-danger text-white">
                <i className="fa fa-pencil"></i>
              </span>
                            <textarea rows="5" className="form-control bg-inverse text-white"
                                      placeholder="Message"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn bg-danger btn-block btn-lg" value="Submit" style={{color:'white'}}/>
                </form>
            </div>
        </div>
    );
};

export default Contact;