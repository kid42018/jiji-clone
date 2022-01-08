import React,{useState} from 'react'
import { StyledSerachBox } from './SearchBox.styled'
import { ArrowUpward, Search } from '@material-ui/icons'

export default function SearchBox() {
    const [searchResults,setSearchResults] = useState([]);
    const handleOnChange = (e)=>{
        let finalRes = [];
        e.target.value.split("").forEach(d=>{
            let temp = finalRes.slice(-1) || "";
            finalRes.push(temp+d);
        });
       setSearchResults(finalRes);
    }
    return (
        <StyledSerachBox>
            <div className="input-box">
                <input onChange={handleOnChange}  onBlur={()=>setSearchResults([])} placeholder="i'm looking for..." />
                <Search />
            </div>
            <div className="search-result-box">
                {
                    searchResults.map(r=> <div className='result-container'>
                    <span>{r}</span>
                    <ArrowUpward />
                  </div>)
                }
            </div>
        </StyledSerachBox>
    )
}
