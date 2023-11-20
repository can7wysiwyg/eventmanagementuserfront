import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventPoster() {
   const {id} = useParams()
   const state = useContext(GlobalState)
   const token = state.token
   const[eventPoster, setPoster] = useState("")

   const handleChange = (event) => {
    const file = event.target.files[0];
    setPoster(file);

   }

   const handleSubmit = async(event) => {
    event.preventDefault()

    await axios.put(`/userevent/update_poster/${id}`, {eventPoster}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

   }

    return(<>
    
    
    </>)
}

export default EventPoster