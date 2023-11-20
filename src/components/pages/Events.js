import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

function Events() {
    const state =  useContext(GlobalState)
    const[events] = state.EventsApi.events


    if(events.length === 0 ) {
        return(<>
        <div>
            loading
        </div>
        
        </>)
    }
   
   
   return(<>

   {
    Array.isArray(events) ? events.map((event) => (
<div key={event._id}>

    <h4>{event._id}</h4>
    <a href={`/see_single/${event._id}`}>view</a>


</div>

    )) : "something is wrong"
   }

    
    </>)
}

export default Events