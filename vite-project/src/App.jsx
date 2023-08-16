import { useState } from 'react';
import ContactList from './components/ContactList';
import './App.css'
import ContactDetails from './components/ContactDetails'

function App ()  {
  const [selectedContactId,setSelectedContactId] = useState(null)
  return (
    <>  
    {
      selectedContactId ? <ContactDetails /> :<ContactList setSelectedContactId={setSelectedContactId}/>
    }
    </>
  )
}

export default App
