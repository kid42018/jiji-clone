import React from 'react'
import { Link } from 'react-router-dom'
import { StyledSavedItems } from './SavedItems.styled'
export default function SavedItems() {
return (
 <StyledSavedItems> 
         <h1>Saved items comming soon</h1>
     <Link to="/">Go to home</Link>
 </StyledSavedItems> 
)
}
