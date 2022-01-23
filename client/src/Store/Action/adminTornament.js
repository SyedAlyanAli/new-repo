import axios from "axios";
import * as types from './types'




export const addData = (tournamentinfo) => async  (dispatch) =>{

    try{
        console.log(tournamentinfo)
       const result = await axios.post("http://localhost:4000/user/registertournament",tournamentinfo)
       
      console.log(result)
       dispatch({type:types.REGISTER_TOURNAMENT,payload:result})
    }
    catch(error){
        console.log(error)


    }
}




export const getTournamentInfo = () => async  (dispatch) =>{

    try{
        
       const result = await axios.get("http://localhost:4000/user/gettournamentinfo")
       
      console.log(result.data)
       dispatch({type:types.GET_USER_TOURNAMENT,payload:result.data})
    }
    catch(error){
        console.log(error)


    }
}



export const deletetournament = (deletedid) => async  (dispatch) =>{

    try{
      
       const result = await axios.delete(`http://localhost:4000/user/deletetournament/${deletedid}`)
       
      console.log(result)
       dispatch({type:types.DELETE_TOURNAMENT,payload:result})
    }
    catch(error){
        console.log(error)


    }
}

