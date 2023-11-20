import axios from "axios"
import { useEffect, useState } from "react"

function EventsApi() {
const[events, setEvents] = useState([])

useEffect(() => {

    const getEvents = async() => {

        const res = await axios.get('/publicevent/show_all_events')
        setEvents(res.data.events)


    }

    getEvents()


}, [])


    return{
events: [events, setEvents]
    }
}

export default EventsApi