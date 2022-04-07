import React,{useState,useRef,useEffect} from 'react'
import { StyledCatagorieSideBar } from './CatagorieSideBar.styled'
import { useSelector } from 'react-redux'
import { ArrowForwardIos } from '@material-ui/icons'
export default function CatagorieSideBar() {
    const catagorieData = useSelector(state=>state.catagorie.catagorie)
    const [subCatagorie,setSubCatagorie] = useState([]);
    const [hideUpScroller , setHideUpScroller] = useState(true);
    const [hideDownScroller , setHideDownScroller] = useState(true);
    const [subHideUpScroller , setSubHideUpScroller] = useState(true);
    const [subHideDownScroller , setSubHideDownScroller] = useState(true);
    const doc = useRef(null);
    const doc2 = useRef(null);
    useEffect(()=>{
        trackOnScroll();
        trackOnScroll2();
    },[]);
    useEffect(()=>{
        trackOnScroll2();
    },[subCatagorie]);
    const trackOnScroll = ()=>{
       if(doc.current){
            if(doc.current.scrollTop===0) setHideUpScroller(true);
            else setHideUpScroller(false);
            if(doc.current.offsetHeight + doc.current.scrollTop >= doc.current.scrollHeight) 
            setHideDownScroller(true)
            else setHideDownScroller(false)
       }
    }
    const trackOnScroll2 = ()=>{
        if(doc2.current){
             if(doc2.current.scrollTop===0) setSubHideUpScroller(true);
             else setSubHideUpScroller(false);
             if(doc2.current.offsetHeight + doc2.current.scrollTop >= doc2.current.scrollHeight) 
             setSubHideDownScroller(true)
             else setSubHideDownScroller(false)
        }
     }
    return (
        <StyledCatagorieSideBar>
                   <div ref={doc} onScroll={()=>trackOnScroll()} className="catagorie-container-box">
                       {
                       catagorieData.map((data,i) => 
                        <div key={i} onMouseOver={()=>setSubCatagorie(data.subcatagorie ?? [])}>
                            <img alt="" src={require(`../../assets/images/${data.image}`)} />
                           <span>
                                <h1>{data.name}</h1>
                                <p>{data.ads} Ads</p>
                           </span>
                           <ArrowForwardIos />
                        </div>)
                      }
                   </div>
                   <div className='sub-catagorie-box'>
                    
                    <div  ref={doc2}  onScroll={()=>trackOnScroll2()}>
                    {
                       subCatagorie.map(data => 
                        <div>
                            <img alt="" src={require(`../../assets/images/${data.image}`)} />
                           <span>
                                <h1>{data.name}</h1>
                                <p>{data.ads} Ads</p>
                           </span>
                        </div>)
                      }
                       
                   </div>
                   <span onClick={()=>doc2.current.scrollTop= 0}  className={`scroll-up ${subHideUpScroller ? "hidden" : ""}`}>
                                <ArrowForwardIos />
                        </span>
                        <span onClick={()=>doc2.current.scrollTop = doc2.current.scrollHeight}  className={`scroll-down ${subHideDownScroller ? "hidden" : ""}`}>
                                <ArrowForwardIos />
                        </span>
                    </div>
                  
                   <div onClick={()=>doc.current.scrollTop = 0}  className={`scroll-up ${hideUpScroller ? "hidden" : ""}`}>
                         <ArrowForwardIos />
                   </div>
                   <div onClick={()=>doc.current.scrollTop = doc.current.scrollHeight}  className={`scroll-down ${hideDownScroller ? "hidden" : ""}`}>
                         <ArrowForwardIos />
                   </div>
        </StyledCatagorieSideBar>
    )
}
