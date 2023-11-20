import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function MyEvent() {
  const {id} =  useParams()
  const[event, setEvent] = useState({})

  useEffect(() => {

    const getEvent = async() => {
        if(id === null) {
            return null
        } 

        const res = await axios.get(`/publicevent/show_one_event/${id}`)

        setEvent(res.data.event)
    
    }

    getEvent()

  }, [id])

  


 
 

    return(<>
    <a href="/my_events">go back</a>
  <div>
    
    <h4> {event.eventName} </h4>
    <a href={`/event_manage/${event._id}`}>manage event</a>
    
    </div>  
    
    </>)
}

export default MyEvent