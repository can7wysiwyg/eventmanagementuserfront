import { useContext, useEffect, useState } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function MyEvents() {
  const[events, setEvents] =  useState([])
 const state = useContext(GlobalState)
 const token = state.token
 const[owner] = state.userApi.owner
 
 useEffect(() => {

    const getMyEvents = async() => {

        if(owner === "") {
            return ""
        }


        const res = await axios.get(`/userevent/my_events/${owner}`, {
            headers:  {
                Authorization: `Bearer ${token}`
            }
        })

        if(res.data.msg) {
            alert(res.data.msg)
            window.location.href = "/management"
        }

        setEvents(res.data.myevents);


    }

    getMyEvents()


 }, [token, owner])

 if(events.length === 0) {
    return(<>
    <p>events are loading</p>
    </>)
 }

    return(<>
    <a href="/management">go back</a>

    {
        Array.isArray(events) ? events?.map((event) => {
            return <div key={event._id}>
                <p>{event.eventOwner}</p>
                <a href={`/my_event_single/${event._id}`}>view event</a>


            </div>

        }) : "something wrong happened"
    }
    
    
    </>)
}

export default MyEvents