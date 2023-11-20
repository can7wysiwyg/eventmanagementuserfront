import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EventCats() {
  const {id} =  useParams()
const[results, setResults] = useState([])

useEffect(() => {

   const getEventByCats = async() => {

    const res = await axios.get(`/publicevent/show_by_category/${id}`)

    setResults(res.data.eventbycat)


    }

    getEventByCats()




}, [id])

if(results.length === 0) {
    return(<>
    
    <h4 className="text-center">as events load</h4>
    
    </>)
}

    return(<>
    {
        Array.isArray(results) ? results?.map((result) => (
<div key={result._id}>
    <p>{result._id}</p>


</div>


        )) : "somethhing happened"
    }
    
    
    </>)
}

export default EventCats