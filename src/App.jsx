import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './pages/Create'
import Notes from './pages/Notes'

function App() {

  return (
    <>
      {/* Make the routing to each page here */}
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
