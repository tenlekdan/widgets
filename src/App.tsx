import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ratting from './components/Ratting/Ratting'
import Home from './components/Home/Home';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}></Route>
          <Route index path="ratting" element={<Ratting />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
