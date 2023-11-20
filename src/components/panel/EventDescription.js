import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventDescription() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[eventDescription, setDescription] = useState("")

   const handleChange = (event) => {
    
    setDescription(event.target.value);

   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    await axios.put(`/userevent/update_my_event/${id}`, {eventDescription}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

   }

    return(<>
    
    
    </>)
}

export default EventDescription