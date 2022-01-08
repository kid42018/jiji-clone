import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavIcon } from './NavIcon.styled'
export default function NavIcon({NavIcon,name,bage,navTo = "/"}) {
    return (
        <StyledNavIcon>
                    <Link to={navTo}><NavIcon/></Link>
                    <span>{name}</span>
                    {bage ? <p>{bage}</p> : ""}    
        </StyledNavIcon>
    )
}
