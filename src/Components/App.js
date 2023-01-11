import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import Header from "./Header";
import logo from '../Assets/logo.png';

import Style from '../Styles/App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
