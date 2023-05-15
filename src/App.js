import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute"
import Moviedetails from "./components/Moviedetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path='/movie/:id/:name' element={<Moviedetails/>}/>
          <Route path='/search' element={<SearchBar/>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
