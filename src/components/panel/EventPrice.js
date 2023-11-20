import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventPrice() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[eventPrice, setPrice] = useState("")

   const handleChange = (event) => {
    
    setPrice(event.target.value);

   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    await axios.put(`/userevent/update_my_event/${id}`, {eventPrice}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

   }

    return(<>
    
    
    </>)
}

export default EventPrice