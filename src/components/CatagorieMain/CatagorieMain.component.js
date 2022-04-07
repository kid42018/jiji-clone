import React from 'react'
import { StyledCatagorieMain } from './CatagorieMain.styled'
import { AddCircle } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function CatagorieMain() {
    const catagorieData = useSelector(state=>state.catagorie.catagorie)
    return (
        <StyledCatagorieMain>
           <div className="catagorie-grid">
           <Link to="/sale"><div className="catagorie-grid-item">
                       <AddCircle className='add-cricle' />
                       <span className='post-add'>Post Add</span>
               </div></Link>
               {catagorieData.map((data,i) => 
               <div key={i} className="catagorie-grid-item">
                       <img src={require(`../../assets/images/${data.image}`)} alt="" />
                       <span>{data.name}</span>
               </div>)}
           </div>
        </StyledCatagorieMain>
    )
}
