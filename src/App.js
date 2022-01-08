import { ThemeProvider } from "styled-components";
import { Theme } from "./style/Theme";
import { Header } from "./components";
import Global from "./style/Globals";
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentAuthPage } from "./redux/reducers.js/app-setting.reducer";
import { NotFound,Home,SavedItems,Messages,MyAdverts,Notifications,SalePage } from "./pages";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  const  user  = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navToHome = ()=>{
    dispatch(setCurrentAuthPage(1));
    return <Navigate to="/" />;
  }
  const UserBasedNav = ({Comp})=>{
    return (user ? <Comp /> : navToHome())
  }
  return (
    <ThemeProvider theme={Theme.light}>
        <Global/>
        <BrowserRouter>
          <Header />
          <Routes> 
           <Route path="/" element={<Home />} />
           <Route path="/saved" element={<UserBasedNav Comp={SavedItems} />} />
           <Route path="/messages" element={<UserBasedNav Comp={Messages}/>} />
           <Route path="/notification"  element={<UserBasedNav Comp={Notifications}/>} />
           <Route path="/myadverts" element={<UserBasedNav Comp={MyAdverts}/>} />
           <Route path="/sale" element={<UserBasedNav Comp={SalePage}/>} />
           <Route path="*" element={<NotFound />} />
          </Routes>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
