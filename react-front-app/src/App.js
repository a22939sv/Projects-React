import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

const NotFound = () => {
  return "Ha llegado a una página que no existe";
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/movies" Component={Movies} />
        <Route path="/series" Component={Series} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
