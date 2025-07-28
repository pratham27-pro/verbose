import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AuthServiceProvider from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthServiceProvider>

      <Routes>

      <Route path="/" element={<Login/>}/>

      </Routes>

      </AuthServiceProvider>
    </BrowserRouter>
  )
}

export default App;