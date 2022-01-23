import * as type from "../Action/types";

const initialState = {
  registered: false,
  registereduser: {},
  preregistereduser: {},
  loginUser:{},
  isAuthenticated: false,
  login: false,
  verifieduser:false,
  getpic:{},
  getprofileinfo:{},
  getusers:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER:
      return {
        ...state,
        registered: true,
        preregistereduser: action.payload,
      };

    case type.LOGIN:
      return {
        ...state,
        login: true,
        loginUser: action.payload,
        isAuthenticated: true,
      };

    case type.LOGOUT_USER:
      return {
        ...state,
        loginUser: null,
        login: false,
        isAuthenticated: false,
      };
      case type.VERIFIED_USER:
        return {
          ...state,
         verifieduser:true,
         registereduser: action.payload,
          
        };

        case type.USER_PROFILE_PHOTO:
          return {
            ...state,
            getpic:action.payload
          }
    

          case type.PROFILE_INFO:
            return{
              ...state,
              getprofileinfo:action.payload

            }
            case type.LOAD_USER:
              return{
                ...state,
                getusers:action.payload
  
              }
     
    default:
      return state;
  }
};
