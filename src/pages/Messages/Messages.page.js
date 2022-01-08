import React from 'react'
import { Link } from 'react-router-dom'
import { StyledMessages } from './Messages.styled'
export default function Messages() {
return (
 <StyledMessages> 
         <h1>Messages comming soon</h1>
        <Link to="/">Go to home</Link>
 </StyledMessages> 
)
}
