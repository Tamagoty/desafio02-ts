import { Route, Routes } from "react-router-dom"
import ContaInfo from "./pages/ContaInfo"
import Conta from "./pages/Conta"
import Home from "./pages/Home"
import { useContext } from "react"
import { AppContext } from "./components/AppContext/AppContext"

const MainRouts = () => {
  const { isLoggedIn } = useContext(AppContext)
  
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home />} />
      <Route path='/containfo' element={<ContaInfo />} />
    </Routes>
  )
}

export default MainRouts