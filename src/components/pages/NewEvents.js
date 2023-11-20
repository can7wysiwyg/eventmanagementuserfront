import axios from "axios"
import { useEffect, useState } from "react"

function NewEvents() {
   const[results, setResults] = useState([])

   useEffect(() => {

    const getNewEvents = async() => {
        const res = await axios.get('/publicevent/show_new_events')

        setResults(res.data.events)


    }

    getNewEvents()



   }, [])

   if(results.length === 0) {
    return(<>
    
    <h4 className="text-center">as events load</h4>
    </>)
   }

    return(<>
    
    {
        Array.isArray(results) ? results?.map((result) => (

            <div key={result._id}>
                <p>
                    {result._id}
                </p>
                <div>
                    <a href={`/see_single/${result._id}`}>view event</a>
                </div>


            </div>

        )) : "something is wrong"
    }
    </>)

}

export default NewEvents