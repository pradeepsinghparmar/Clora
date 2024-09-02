import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FhirImage from '../../assets/images/fhir.png'

const Sidebar = () => {
  let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);

    return (
      <div className="col-md-3 side-ox-row">
        <div className="sidebar-box mb-2">
          <div className="side-bar-bx">
            <ul>
              <li className="sidebar-heading">
                <img src={FhirImage} alt="FHIR configuration" /> FHIR
                Architecture
              </li>
              <li>
                <Link to="/ig" className={`${pathname.match('/ig') ? 'active-link' : ''}`}>
                  <i className="fa fa-angle-right"></i> Upload IG
                </Link>
              </li>
              <li>
                <Link to="/profile-list" className={`${pathname.match('/profile-list') ? 'active-link' : ''}`}>
                  <i className="fa fa-angle-right"></i> Upload Profile
                </Link>
              </li>
              <li>
                <Link to="/resource-list" className={`${pathname.match('/resource-list') ? 'active-link' : ''}`}>
                  <i className="fa fa-angle-right"></i> Upload Resource
                </Link>
              </li>
              <li>
                <Link to="/create-ig-assign"  className={`${pathname.match('/create-ig-assign') ? 'active-link' : ''}`}>
                  <i className="fa fa-angle-right"></i> IG Assignment to Project
                </Link>
              </li>
              {/* <li>
                <Link to="/create-summary">
                  <i className="fa fa-angle-right"></i> Profiles Summary
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  export default Sidebar;