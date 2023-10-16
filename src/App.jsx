import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Signin from "./pages/Sign/Signin";
import Signup from "./pages/Sign/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App