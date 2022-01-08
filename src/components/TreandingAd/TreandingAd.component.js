import React,{useState,useEffect} from 'react'
import { StyledTreandingAd } from './TreandingAd.styled'
import {Bookmark,BookmarkBorder} from "@material-ui/icons";
import { useDispatch,useSelector } from 'react-redux'
import { setCurrentAuthPage} from '../../redux/reducers.js/app-setting.reducer';
export default function TreandingAd({price,saved = false,title,numberOfImages,image}) {
    const [isSaved,setIsSaved] = useState(false);
    const user = useSelector(state=>state.user.user);
    const dispatch = useDispatch();
    const handleSaveClick = ()=>{
          if(user) setIsSaved(!isSaved);
          else dispatch(setCurrentAuthPage(1));    
    }
    useEffect(() => {
      if(user)  setIsSaved(saved);
    }, [])
return (
 <StyledTreandingAd> 
     <div className='ad-container'>
            <div style={{backgroundImage:`url('${image}')`}}>
              <span>{numberOfImages}</span>
            </div>
            <div>
              {isSaved ? <Bookmark onClick={handleSaveClick} /> : <BookmarkBorder onClick={handleSaveClick} />}
              <p>{title}</p>
              <span>ETB {price}</span>
            </div>
     </div>
 </StyledTreandingAd> 
)
}
