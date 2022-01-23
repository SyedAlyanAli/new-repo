import axios from "axios";
import * as types from './types'




export const addpart = (addperson) => async  (dispatch) =>{

    try{
        
       const result = await axios.post("http://localhost:4000/user/addpersontotournament",addperson)
       
      console.log(result)
       dispatch({type:types.ADD_PERSON_IN_TOURNAMENT,payload:result})
    }
    catch(error){
        console.log(error)


    }
}




export const getparticipants = (tournamentname) => async  (dispatch) =>{

    try{
        
       const result = await axios.get(`http://localhost:4000/user/getparticipants/${tournamentname}`)
       
      console.log(result.data)
       dispatch({type:types.GET_PARTICIPANTS,payload:result.data})
    }
    catch(error){
        console.log(error)


    }
}



// export const deletetournament = (deletedid) => async  (dispatch) =>{

//     try{
      
//        const result = await axios.delete(`http://localhost:4000/user/deletetournament/${deletedid}`)
       
//       console.log(result)
//        dispatch({type:types.DELETE_TOURNAMENT,payload:result})
//     }
//     catch(error){
//         console.log(error)


//     }
// }
