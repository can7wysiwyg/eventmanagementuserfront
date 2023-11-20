import axios from "axios";
import { useEffect, useState } from "react";

function UserApi() {
const[isLogged, setIsLogged] = useState(false)
const[isUser, setIsUser] = useState(false)
const[userPerm, setUserPerm] = useState(false)
const[owner, setOwner] = useState("")

let token = JSON.parse(JSON.stringify(localStorage.getItem('token')))

useEffect(() => {

    if(token) {
        const getUser = async() => {
            const res = await axios.get('/user/user', {
               headers: {
                   Authorization: `Bearer ${token}`
               }
            })

            setIsLogged(true)
            setOwner(res.data._id)
            
        
            res.data.role === 8 ? setIsUser(true) : setIsUser(false)
            res.data.role !== 8 ? setUserPerm(true) : setUserPerm(false)
            

    

          }

          getUser()



    }



}, [token])

return{

isUser: [isUser, setIsUser],
isLogged: [isLogged, setIsLogged],
owner: [owner, setOwner],
userPerm: [userPerm, setUserPerm],



}

}

export default UserApi