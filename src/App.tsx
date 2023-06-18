import { useState } from 'react'
import './App.css'
import ToDoApp from './components/ToDoApp'
import Notes from './components/Notes'
import GeolocationContainer from './components/GeolocationContainer'
import MyComponent from './components/MyComponent'
import IssueProvider from './contexts/Issue'
import Issues from './components/Issues'
import PokeApp from './components/PokeApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h2>=======</h2>
      <Notes />
      <h2>=======</h2>
      <ToDoApp />
      <h2>=======</h2>
      <GeolocationContainer />
      <h2>=======</h2>
      <MyComponent />
      <h2>=======</h2>
      <IssueProvider url=
        "https://api.github.com/repos/ContentPI/ContentPI/issues">
        <Issues />
      </IssueProvider>
      <h2>=======</h2>
      <PokeApp />
    </>
  )
}

export default App
