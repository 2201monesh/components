import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComboBox from './components/combobox/ComboBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComboBox />
    </>
  )
}

export default App
