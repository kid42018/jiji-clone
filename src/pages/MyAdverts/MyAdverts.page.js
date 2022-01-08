import React from 'react'
import { Link } from 'react-router-dom'
import { StyledMyAdverts } from './MyAdverts.styled'
export default function MyAdverts() {
return (
 <StyledMyAdverts> 
        <h1>My adverts comming soon</h1>
        <Link to="/">Go to home</Link>
 </StyledMyAdverts> 
)
}
