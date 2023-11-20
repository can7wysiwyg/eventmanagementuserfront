import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventDate() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[eventDate, setDate] = useState("")

   const handleChange = (event) => {
    
    setDate(event.target.value);

   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    await axios.put(`/userevent/update_my_event/${id}`, {eventDate}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

   }

    return(<>
    
    
    </>)
}

export default EventDate