import styled from "styled-components";
import ContactListComponents from "./components/ContactListComponents";
import ConversationComponents from "./components/ConversationComponents";




const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background: #f8f9fb;
`


function App() {
  return <Container>
    <ContactListComponents/>
    <ConversationComponents/>
 
  </Container>
}

export default App;
