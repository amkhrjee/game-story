import React, { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import downArrow from '../assets/down-arrow.svg'
import { UserContext } from '../context/userContext';
import { Link, NavLink } from 'react-router-dom';

import firebase from 'firebase/app';
import temp_profile from '../assets/undraw_profile_pic_ic5t.svg'



const NavBar = () => {
    const context = useContext(UserContext);

    const showToggler = (context) => {

    }
    
    return(
        <div className="navbar">
            <div className="logo">
               <NavLink className="text-white" tag={Link} to="/">gamestory.com</NavLink> 
            </div>

            <div className="userReg">
                {
                    context.user? (
                        <div className="so">
                            <NavLink onClick={() => {context.setUser(null)}} to="/">Sign Out</NavLink>
                        </div>
                    ) 
                    : (
                        <>
                            <div  className="su">
                                <NavLink tag={Link} to="/signup">Sign Up</NavLink>
                            </div>
                            <div  className="si">
                                <NavLink tag={Link} to="/signin">Sign In</NavLink>
                            </div>
                        </>
                    )
                }
                
                
            </div>
            <div className="navigation">
              
                <div className='container'>
                    <div className='row pr-5'>
                        <div className="col-sm pr-0">
                            <div >
                                <img className="profile-image" src={temp_profile} alt='Not Loaded'/>
                            </div>  
                        </div>
                        <div className="col-sm pl-1 pr-1">
                            <div className="user-name">
                                <p>{ context.user?.email ? context.user.email : '' }</p>
                            </div>
                        </div>
                        <div className="col-sm pl-0 down">
                            <img className="down-arrow" 
                            type="button"
                            src={downArrow} alt=''/>
                            
                            <div className="row down-content">
                                <div className="dummy mt-0 mb-0">
                                    <p className="down-item">Dashboard</p>
                                </div>
                                <div className="dummy mt-0 mb-0">
                                    <p className="down-item">Profile</p>
                                </div>
                                <div className="dummy mt-0 mb-0 pd-0">
                                    <p className="down-item">Donate</p>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;