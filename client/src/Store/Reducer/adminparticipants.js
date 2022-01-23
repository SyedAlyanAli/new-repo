
import * as type from "../Action/types";

const initialState = {
    isRegistered:false,
   
    registeredpersontournament:[],
    participantslist:[]

}

export default (state=initialState,action)=>{
    switch(action.type){
        

                case type.ADD_PERSON_IN_TOURNAMENT:
                    return{
                    ...state,
                    isRegistered:true,registeredpersontournament:action.payload
                }

                case type.GET_PARTICIPANTS:
                    return{
                    ...state,
                    participantslist:action.payload
                };
                      
                // case type.DELETE_TOURNAMENT:
                //     return{
                //     ...state,
                  
                //     deleted:true
                    
                // };

            default:
                return state;
    }

}