import './App.css'
import Form from './Form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';


function App() {

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Form/>
      </LocalizationProvider>
  )
    
  }

export default App
