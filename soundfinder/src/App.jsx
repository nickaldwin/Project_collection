
import './App.css'
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";

//import spotify api key variables
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

//import useEffect && useEffect here: 
import { useState, useEffect } from "react";

const [searchInput, setSearchInput] = useState("");
const [accessToken, setAccessToken] = useState("");

// use the useEffect to fetch the accesToken
useEffect(() => {
  let authParams = { 
    method: "POST",
    handlers:{
      
    }
  }
})



function App() {
 return (
  <Container>
  <InputGroup>
    <FormControl
      placeholder="Search For Artist"
      type="input"
      aria-label="Search for an Artist"
      style={{
        width: "300px",
        height: "35px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderRadius: "5px",
        marginRight: "10px",
        paddingLeft: "10px",
      }}
    />

    <Button onClick={{}}>Search</Button>
  </InputGroup>
</Container>
  )
}
export default App
