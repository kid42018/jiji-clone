import React,{useState} from 'react'
import { StyledHomeTipsContainer } from './HomeTipsContainer.styled'
import backwardIcon from "../../assets/backward-icon.svg";
import forwardIcon from "../../assets/forward-icon.svg";
import { AddCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function HomeTipsContainer() {
    const [toggleMove,setToggleMove] = useState("move-right");
return (
 <StyledHomeTipsContainer> 
                 <div className="tips-carsole">
                        <div onClick={()=>setToggleMove("move-right")} className="carsole-btn">
                            <img src={forwardIcon}  alt=""/>
                        </div>
                        <div className={`img-container ${toggleMove}`}>
                           <img  src={require(`../../assets/images/main_safety_tips.jpg`)} alt=""/>
                           <img  src={require(`../../assets/images/main_how_to_buy.jpg`)} alt=""/>
                        </div>
                        <div className="carsole-pagination-cont">
                            <span  onClick={()=>setToggleMove("move-right")} className={toggleMove==="move-left" ? "" : "active"}></span> 
                            <span  onClick={()=>setToggleMove("move-left")} className={toggleMove==="move-left" ? "active" : ""}></span>
                        </div>
                        <div onClick={()=>setToggleMove("move-left")} className="carsole-btn carsole-btn--right">
                        <img src={backwardIcon}  alt=""/>
                        </div>
                 </div>
                 <Link to="/sale"><div className="post-btn">
                   <h1>Got something to sell?</h1>
                   <AddCircle />
                   <p>Post an advert for free!</p>
                 </div></Link>
 </StyledHomeTipsContainer> 
)
}
