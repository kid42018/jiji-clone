import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSalePage } from './SalePage.styled'
export default function SalePage() {
return (
 <StyledSalePage> 
            <h1>Sale items comming soon</h1>
     <Link to="/">Go to home</Link>
 </StyledSalePage> 
)
}
