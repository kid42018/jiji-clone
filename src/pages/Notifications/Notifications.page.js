import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNotifications } from './Notifications.styled'
export default function Notifications() {
return (
 <StyledNotifications> 
         <h1>Notifications comming soon</h1>
        <Link to="/">Go to home</Link>
 </StyledNotifications> 
)
}
