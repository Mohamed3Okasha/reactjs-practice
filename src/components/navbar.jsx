import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
    return ( 
        <nav className= "navbar navbar-expand-lg navbar-light bg-light">
            <a className= "navbar-brand" href="#">Navbar</a>
            <button className= "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className= "navbar-toggler-icon"></span>
            </button>
            <div className= "collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className= "navbar-nav col-10">
                    <Link className= "nav-item nav-link" to="/home">Home <span className= "sr-only">(current)</span></Link>
                    <Link className= "nav-item nav-link" to="/contact">Contact</Link>
                    <Link className= "nav-item nav-link" to="/about">About</Link>
                    <Link className='nav-item nav-link' to='/menu'>Menu</Link>
                    <Link className='nav-item nav-link' to='/login'>Login</Link>
                    <Link className='nav-item nav-link' to='/admin'>Admin</Link>
                </div>
                <div className=''>
                    <Link className= "nav-item nav-link" to='/cart'>
                        <button className=' btn btn-primary btn-sm'>
                            <i className="fa-solid fa-cart-shopping m-1"></i>
                            <span className=''>{props.productCount}</span>
                        </button>
                    </Link>

                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;

// class NavBar extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">Navbar</a>
//                 <span className="badge bg-primary">{this.props.productCount}</span>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;