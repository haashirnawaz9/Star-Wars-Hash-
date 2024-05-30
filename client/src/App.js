import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Login from './pages/login';
import Home from './pages/home';
import Movies from './pages/movies';
import Register from './pages/register';
import { useSelector } from "react-redux";
import ExternalPage from "./pages/externalpage";
import ExternalPage2 from "./pages/externalpage2";
import ExternalPage3 from "./pages/externalpage3";
import ExternalPage4 from "./pages/externalpage4";
import ExternalPage5 from "./pages/externalpage5";
import ExternalPage6 from "./pages/externalpage6";

function App() {

  useEffect(() => {
    document.title = "Star Wars Hash"
  }, []);

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  console.log(isLoggedIn)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/episode-1' element={<ExternalPage />} />
          <Route path='/episode-2' element={<ExternalPage2 />} />
          <Route path='/episode-3' element={<ExternalPage3 />} />
          <Route path='/episode-4' element={<ExternalPage4 />} />
          <Route path='/episode-5' element={<ExternalPage5 />} />
          <Route path='/episode-6' element={<ExternalPage6 />} />
          {isLoggedIn && <Route path="/movies" element={<Movies />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
