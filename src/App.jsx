import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Sleeper from '../sleeper/Sleeper'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects/sleeper' component={Sleeper} />
          <Route path='/projects' component={Projects} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
