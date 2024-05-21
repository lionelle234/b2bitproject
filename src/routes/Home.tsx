
import Login from "../components/Login";
import Error from "../components/Error";
import { UserProps } from "../types/user";
import { ProfileProps } from "../types/profile";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";


const Home = () => {
    const [name, setName] = useState<UserProps | null>(null)
    const [email, setEmail] = useState<ProfileProps | null>(null)
    const [password, setPassword] = useState<UserProps | null>(null)
    const [user, setUser] = useState<ProfileProps | null>(null)
    const [error, setError] = useState(false)
    
    
    const navigate = useNavigate();
    const loadUser = async(userName: string, passName: string) => {

        
        setError(false)
        setName(null) 
        setPassword(null)

        const res = await  fetch(`https://api.homologation.cliqdrive.com.br/auth/login/`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json;version=v1_web',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": userName,
              "password": passName,
            })
          })    
       

        const dataa = await res.json()
          
        if (res.status === 400 || res.status === 401){
            setError(true)
            return
        }
        
        const lib = await  fetch(`https://api.homologation.cliqdrive.com.br/auth/profile/`, {
            method: 'GET',
            headers: {
               'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MjkzODU1LCJpYXQiOjE3MTYyMDc0NTUsImp0aSI6IjllYjkwMjAyYzM4NjQ1YzNiNDFkMTA4ZjY1Y2M3OTRjIiwidXNlcl9pZCI6NH0.CMXWWncNwGOC6fr36Eswif_ZCC2UQTjeeeL6kMYZ4I4",
              'Accept': 'application/json;version=v1_web',
              'Content-Type': 'application/json',
            },
          })    
          
        const data = await lib.json()

        

        
        
        const { name, email } = data
        const avatar = data.avatar.medium

        const userData: ProfileProps = {
            name,
            email,
            avatar
        }
        
        setUser(userData)


        localStorage.setItem("token", JSON.stringify(dataa.tokens.access))
        localStorage.setItem("loggedInUser", JSON.stringify(dataa.user))
        localStorage.setItem("name", JSON.stringify(userData.name))
        localStorage.setItem("e-mail", JSON.stringify(userData.email))
        localStorage.setItem("avatar", JSON.stringify(userData.avatar))

        navigate("/profile")


    }

    return (
    <div>
        <Login loadUser={loadUser} />
        {error && <Error />}
    </div>
    )
}

export default Home