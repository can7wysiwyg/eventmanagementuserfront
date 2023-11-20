import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventName() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[eventName, setName] = useState("")

   const handleChange = (event) => {
    
    setName(event.target.value);

   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    await axios.put(`/userevent/update_my_event/${id}`, {eventName}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

   }

    return(<>
    
    
    </>)
}

export default EventName