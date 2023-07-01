import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Switch from './components/Switch'
import { useTheme } from './context/ThemeContext'
import AboutMe from './pages/AboutMe'
import FetchData from './pages/FetchData'
import Ejemplos from './pages/Ejemplos'
import Ref from './pages/Ejemplos/Ref'
import ChildrenClone from './pages/ChildrenClone'
import HocMouseOverPosition from './pages/HOCMouseOver'
import HocScroller from './pages/HOCMouseOver/HocScroller'
import RenderProps from './pages/RenderProps'
import Form from './pages/Form'

function App() {
  const {theme} = useTheme()
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  console.log(theme)
  return (
    <>
      <div className='App'>
        <nav>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/form'>form</Link></li>
            <li><Link to='/about-me'>about me</Link></li>
            <li><Link to='/fetch-data'>Fetch data</Link></li>
            <li><Link to='/hooks'>Hook reducer</Link></li>
            <li><Link to='/hooks/ref'>Hook ref</Link></li>
            <li><Link to='/children-clone'>Children and Clone Element</Link></li>
            <li><Link to='/HOC'>HOC wrapper</Link></li>
            <li><Link to='/render-props'>Render Props pattern</Link></li>
            <li><Link to='/HOC/Scroller-render-props'>HOC with Render Props example</Link></li>
            <li><Switch></Switch></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/about-me' element={<AboutMe />}></Route>
          <Route path='/fetch-data' element={<FetchData />}></Route>
          <Route path='/hooks' element={<Ejemplos />}></Route>
          <Route path='/hooks/ref' element={<Ref />}></Route>
          <Route path='/children-clone' element={<ChildrenClone />}></Route>
          <Route path='/HOC' element={<HocMouseOverPosition />}></Route>
          <Route path='/HOC/Scroller-render-props' element={<HocScroller />}></Route>
          <Route path='/render-props' element={<RenderProps />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
