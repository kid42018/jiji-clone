import React from 'react'
import { StyledDropdownNavicon } from './DropedownNavicon.styled'
import ProfileIcon from '@material-ui/icons/PersonOutline';
import {setUser} from "../../redux/reducers.js/user.reducer.js";
import { useDispatch } from 'react-redux';
export default function DropdownNavicon() {
    const dispatch = useDispatch();
    return (
        <StyledDropdownNavicon>
                    <ProfileIcon />
                    <span className="nav-dropdown">
                        <div className="nav-dropdown-list-cont">
                           <ProfileIcon />
                            <span>My Page</span>
                        </div>
                        <div className="nav-dropdown-list-cont"> 
                        <ProfileIcon />
                            <span>Feedback</span>
                        </div>
                        <div className="nav-dropdown-list-cont">
                        <ProfileIcon />
                            <span>Performance</span>
                        </div>
                        <div className="nav-dropdown-divider"></div>
                        <div className="nav-dropdown-list-cont">
                        <ProfileIcon />
                            <span>Setting</span>
                        </div>
                        <div onClick={()=>dispatch(setUser(null))} className="nav-dropdown-list-cont">
                        <ProfileIcon />
                            <span>Logout</span>
                        </div>
                    </span>
        </StyledDropdownNavicon>
    )
}
