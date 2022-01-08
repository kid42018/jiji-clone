import axios from "axios";
const Request = {
    get:{
        getLocation : "https://geolocation-db.com/json/",
        
    }
}
Object.keys(Request.get).forEach(key=>{
   const temp_url = Request.get[key]
   Request.get[key] = async (
        res = (data)=>console.log(data),
        fail = (e)=>console.error(e)
       )=>{
           let dat = null;
           try{
             dat = await  axios.get(temp_url);
             res(dat)
           }catch(e){
             fail(e);
           }
        return dat;
   }
});
export default Request;
       