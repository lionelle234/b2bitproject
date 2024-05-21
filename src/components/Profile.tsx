
import {useNavigate} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const Profile = () => {
  const navigate = useNavigate()
  
  const name = JSON.parse(localStorage.getItem("name")!)
  const email = JSON.parse(localStorage.getItem("e-mail")!)
  const avatar = JSON.parse(localStorage.getItem("avatar")!)

  const logOut = () => {
    
    localStorage.removeItem("token")
    localStorage.removeItem("loggedInUser")
    localStorage.removeItem("name")
    localStorage.removeItem("e-mail")
    localStorage.removeItem("avatar")

    navigate("/")


}
  if (localStorage.getItem("token") === null){
    return(
        <div>Acesso nao autorizado</div>
    )
  }


  return (
    
    
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={avatar}
                      alt='avatar'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    Nome
                    <MDBCardTitle>{name}</MDBCardTitle>
                    E-mail
                    <MDBCardText>{email}</MDBCardText>

                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1" onClick={() => logOut()}>Log out</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>

    </div>
  )
}

export default Profile