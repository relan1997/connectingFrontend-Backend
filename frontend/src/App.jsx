import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() { // now we want is that when our application gets loaded we recieve our information from the api and that info gets stored in the jokes ka state
  const [jokes,setJokes] =useState([]);
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((res)=>{
      setJokes(res.data); // now setJokes sets your jokes state with the data from the call that has been made
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <>
      <h1>Chai and Full-Stack</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke)=>{ return(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
      )
      })}
    </>
  )
}

export default App
