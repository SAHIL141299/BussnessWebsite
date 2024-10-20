import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../style/Banner.css';

const Banner = () => {
    return (
        <section className="banner app-development">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-none d-md-block">
                        {/* <h1 className="text-center">Welcome to Our App Development</h1> */}
                        {/* <p className="text-center">Creating innovative solutions for your needs.</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
