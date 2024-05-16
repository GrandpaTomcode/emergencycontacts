import React from 'react'
import './App.css'

function App() {
    const [name, setName] = React.useState('') 
    const [relationship, setRelationship] = React.useState('') 
    const [phoneNumber, setPhoneNumber] = React.useState('') 
    const handleName = (event) => {
      setName(event.target.value);
        }
    const handleRelationShip = (event) => {
      setRelationship(event.target.value);
    }
    const handlePhoneNumber = (event) => {
      setPhoneNumber(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      const res = [name, relationship, phoneNumber]
      console.log(res)
    }
  
  

  return (
    <>
      <div>
        <h1>Emergency Contacts</h1>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input id='name' placeholder="Name" type="text" value={name} onChange={handleName}/>
          <input id='relationship' placeholder="Relationship" type="text" value={relationship} onChange={handleRelationShip}/>
          <input id='phonenumber' placeholder="Phone Number" type="text" value={phoneNumber} onChange={handlePhoneNumber} />
          <button className='submit' type='submit'>Submit</button>
        </form>
      </div>
      
    </>
  )
}

export default App
