import { useSelector } from 'react-redux'
import './App.css'
import Home from './pages/home/Home'
import { AppStore } from './redux/store'

function App() {
  
  const user = useSelector((state: AppStore) => state.user)

  return (
    <>
      { user.name }
      <Home/>
    </>
  )
}

export default App
