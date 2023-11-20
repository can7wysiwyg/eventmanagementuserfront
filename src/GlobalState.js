import { createContext} from "react"
import UserApi from "./api/UserApi";
import CategoryApi from "./api/CategoryApi";
import EventsApi from "./api/EventsApi";


export const GlobalState =  createContext() 

export const DataProvider = ({children}) => {
    let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))
    

let state = {
    userApi: UserApi(),
       token,
    CategoryApi: CategoryApi(),
    EventsApi: EventsApi() 
    

   
}
return(<GlobalState.Provider value={state}>
            {children}
    </GlobalState.Provider >) 

}


