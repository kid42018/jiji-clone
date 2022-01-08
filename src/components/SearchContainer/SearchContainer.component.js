import React,{useEffect} from 'react'
import { StyledSearchContainer } from './SearchContainer.styled'
import girls from  "../../assets/images/girls.png";
import man from "../../assets/images/man.png";
import { LocationOn } from '@material-ui/icons';
import { SearchBox } from '../../components';
import { useSelector,useDispatch } from 'react-redux';
import CountryCodes from '../../services/country-codes';
import { getLocation } from "../../redux/reducers.js/app-setting.reducer";
import Request from '../../services/requests';
export default function SearchContainer() {
    const locationIndex  = useSelector((state) => state.appSetting.location);
    const dispatch = useDispatch();
    useEffect(() => {
        Request.get.getLocation(data=>{
                let loc = 0;
                CountryCodes.find((c,i)=>{
                    loc = i;
                    return c.code===data.data.country_code
                });
                dispatch(getLocation({ type: 'getLocation',payload:loc }));
        });
    }, [dispatch]);
    return (
        <StyledSearchContainer>
              <img src={man} alt="" />
           <div className='search-container'>
               <div className="location-container">
                    <h1>Find anything in &nbsp;</h1>
                    <p> <LocationOn />All {CountryCodes[locationIndex].name}</p>
                </div>
                <SearchBox />
           </div>
          <img src={girls} alt="" />
        </StyledSearchContainer>
    )
}
