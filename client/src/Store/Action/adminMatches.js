import axios from "axios";
import * as types from './types'




export const creatematches = (matches) => async  (dispatch) =>{

    try{
        
       const result = await axios.post("http://localhost:4000/user/creatematches",matches)
       
      console.log(result)
       dispatch({type:types.CREATE_MATCHES,payload:result})
    }
    catch(error){
        console.log(error)


    }
}
