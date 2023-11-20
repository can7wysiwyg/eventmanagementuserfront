import { useContext } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function EventManage() {
 const {id}  =  useParams()
const state = useContext(GlobalState)
const token = state.token

const deleteEvent = async(event) => {
    event.preventDefault()

     await axios.delete(`/userevent/delete_my_event/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    window.location.href = `/management`

}

    return(<>
    <a href={`/event_manage/${id}`}>go back</a>

    <div>

        <button onClick={deleteEvent}>delete event</button>
        <hr></hr>
        <h4>edit event</h4>
        <p>choose a field to edit</p>

        <ul>
            <li><a href={`/event_poster/${id}`}>EVENT POSTER </a> </li>
            <li><a href={`/event_name/${id}`}>EVENT NAME</a> </li>
            <li><a href={`/event_description/${id}`}>EVENT DESCRIPTION</a> </li>
            <li><a href={`/event_price/${id}`}>EVENT PRICE</a> </li>
            <li><a href={`/event_location/${id}`}>EVENT LOCATION</a> </li>
            <li><a href={`/event_date/${id}`}>EVENT DATE</a> </li>
        </ul>

    </div>
    
    
    </>)
}

export default EventManage