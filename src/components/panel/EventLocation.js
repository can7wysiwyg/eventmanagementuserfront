import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventLocation() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[eventLocation, setLocation] = useState("")

   const handleChange = (event) => {
    
    setLocation(event.target.value);

   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    await axios.put(`/userevent/update_my_event/${id}`, {eventLocation}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

   }

    return(<>
    
    
    </>)
}

export default EventLocation