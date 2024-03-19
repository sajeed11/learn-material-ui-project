import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Notes from './pages/Notes'
import { createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: purple
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Make the routing to each page here */}
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
