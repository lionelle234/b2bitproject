
import { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
  }
  from 'mdb-react-ui-kit';

  type LoginProps = {
    loadUser: (userName: string, passName: string) => Promise<void>
}

const Login = ({loadUser}: LoginProps) => {

    const [userName, setUserName] = useState("")
    
    const [passName, setPassName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter"){
            loadUser(userName, passName)
        }
    }
  return (
    
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='E-mail' placeholder='Digite e-mail' id='form1' type='email'
                onChange={(e)=> setUserName(e.target.value)}
                onKeyDown={handleKeyDown}/>
      <MDBInput wrapperClass='mb-4' label='Senha' placeholder='Digite senha' id='form2' type='password'
                onChange={(e)=> setPassName(e.target.value)}
                onKeyDown={handleKeyDown}/>



      <MDBBtn className="mb-4" onClick={() => loadUser(userName, passName)}>Sign in</MDBBtn>



    </MDBContainer>
  
  )
}

export default Login