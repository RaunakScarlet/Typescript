import { useState } from "react"
import {Note} from './models/Note.model'


function App() {
    const [note, setNote] = useState<Note>({
        id: new Date().toString(),
        title: "Meeting",
        text: "learn typescript",
        color: "#abcabc",
        date: new Date().toString(),
    });

    const change = () => {
        setNote({
            id: "",
            title: "",
        text: "",
        color: "",
        date: ""
        })
    }
  return (
      <>
       {Object.entries(note).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
       ))}
          
          <button onClick={change}>
              Click me
          </button>
      </>
    
  )
}

export default App
