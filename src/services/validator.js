export const emailValiditor = (val)=>{
    let result = {message:"",result:true};
    if(!val.trim().match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g))
        result = {message:"invalid email",result:false};
        return result;
}
export const requiredFieldValidator = (val)=>{
    let result = {message:"",result:true};
    if(val.trim()==="")
        result = {message:"This input field is required",result:false};
        return result;
}
export const passwordValidator = (val)=>{
    let result = {message:"",result:true};
    if(!val.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g))
        result = {message:"password should be 8 characters length and contains , Lower Case Letters, Upper Case Letters, Special Character and Numbers",result:false};
        return result;
}
export const phoneValidator = (input)=>{
    let result = {message:"",result:true};
    if(!input.trim().match(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/g)) result = {message:"invalid phone number",result:false};
    console.log(input);
    return result;
}
export default (val,validators)=>{
        let result = {message:"",result:true};
        validators.every(validator => {
             result =  validator(val);
             if(!result.result) return false;
             else return true;
       });
       return result;
}