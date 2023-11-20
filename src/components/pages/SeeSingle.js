import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SeeSingle() {
   const {id} = useParams()
   const[single, setSingle] = useState({})

   useEffect(() => {

    
    const getSingle = async() => {
        const res = await axios.get(`/publicevent/show_one_event/${id}`)

        setSingle(res.data.event)



    }

    getSingle()


   }, [id])

   if(Object.keys(single).length === 0) {

    return(<>
    <h4 className="text-center">loading...</h4>
    
    </>)
   }
    return(<>
    
    <h4>
        {single.eventName}
    </h4>
    </>)
}

export default SeeSingle