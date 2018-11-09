import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
  
        
    render() {
        const { location } = this.props;
        var active = '';
       
        return (
            <div className='navbar'>
                
                    <img className='logo' src='https://tinyurl.com/yb9xzoo5' />
                
                <div className='nav-items' >
                    <Link to='/' className={location.pathname === '/' ? 'nav-item w--current' : 'nav-item' }>
                        SPEAK
                    </Link>
                    <Link to='/SignUp' className={location.pathname === '/SignUp' ? 'nav-item w--current' : 'nav-item' }>
                        SIGN UP
                    </Link>
                    <Link to='/Connect' onclick={this.getActive} className={location.pathname === '/Connect' ? 'nav-item w--current' : 'nav-item' }>
                        CONNECT
                    </Link>
                    <Link to='/Shirts' onclick={this.getActive} className={location.pathname === '/Shirts' ? 'nav-item w--current' : 'nav-item' }>
                        SHIRTS
                    </Link>
                    <Link to='/Learn' onclick={this.getActive} className={location.pathname === '/Learn' ? 'nav-item w--current' : 'nav-item' }>
                        LEARN
                    </Link>
                    <Link to='/Jobs'onclick={this.getActive} className={location.pathname === '/Jobs' ? 'nav-item w--current' : 'nav-item' }>
                        JOBS
                    </Link>
                    <Link to='/AdminLogin' onclick={this.getActive} className={location.pathname === '/AdminLogin' ? 'nav-item w--current' : 'nav-item' }>
                        ADMIN
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);

