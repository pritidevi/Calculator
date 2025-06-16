import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Component/Inputno'
import Button from './Component/Button'
import Container from './Component/Container'
import Inputno from './Component/Inputno'

function App() {
  

  let specialchar = ["C","1","2","+","3","4","-","5","6", "/","7","8", "*","9","0", "=", "."];

  return (
    <>
    <Container className="container">
      <div className="box">
     
        <Button  button={specialchar} />
      </div>
    </Container>
   
    </>
  )
}

export default App
