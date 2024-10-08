import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./views/home"
import { CountryInfo } from "./views/CountryInfo"


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryCode" element={<CountryInfo />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
