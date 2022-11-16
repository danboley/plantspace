// import { useEffect, useState } from 'react'
// import {useParams} from 'react-router-dom'

function User(){
    // const [user, setUser] = useState()
    // const [errors, setErrors] = useState(false)
    
    // const params = useParams()
    // const {id} = params

    // useEffect(()=>{
    //     fetch(`/users/${id}`)
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 setUser(user)
    //             })
    //         }else {
    //             res.json().then(data => setErrors(data.error))
    //         }
    //     })
       
    // },[])

    // if(errors) return <h1>{errors}</h1>
    return(
        <div>
            User Page
            {/* <h1>{user.first_name}</h1> */}
        </div>
    )
}
export default User;