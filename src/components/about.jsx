import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>About:</h1>
                <ul>
                    <li>
                        <Link to='/about/founders'>Our Founders</Link>
                    </li>
                    <li>
                        <Link to='/about/company'>Our Company</Link>
                    </li>
                    <li>
                        <Link to='/about/team'>Our Team</Link>
                    </li>
                </ul>
                <Outlet />
            </React.Fragment>
        );
    }
}
 
export default About;