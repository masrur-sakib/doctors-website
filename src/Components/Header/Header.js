import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className='website_name' href="/"><h3>Doctors Website</h3></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
              
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav nav_links">
                  <li className="nav-item active">
                    <a href="/home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a href="/appointment">Appointment <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a href="/dashboard">Doctors Dashboard <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a href="/login">Login <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};


export default Header;