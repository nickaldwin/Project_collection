
import './App.css'
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";

//import spotify api key variables
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

//import useEffect && useState here: 
import { useState, useEffect } from "react";

const [searchInput, setSearchInput] = useState("");
const [accessToken, setAccessToken] = useState("");

// use the useEffect to fetch the accesToken
useEffect(() => {
  let authParams = { 
    method: "POST",
    handlers: {
      "Content-Type": "application/x-www-form-urlenloaded",
    },
    body:
    "grant_type=client_credential&client_id=" +
    clientId +
    "&client_secret" +
    clientSecret,
  };
    fetch("https//accounts.spotify.com/api/token", authParams)
    .then((result) => result.json())
    .then((data) => {
      setAccessToken(data.access_Token);
    });
}, []);

async function search(){
  let artistParams = {
    method: "GET",
    handlers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + accessToken,
    },
  };

  const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParams
  )
  .this((result) => result.json())
  .then((data) => {
    return data.artists.items[0].id;
  });
}


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
