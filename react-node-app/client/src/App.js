import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MenuRestaurant from "./pages/MenuRestaurant";
import Restaurant from "./pages/Restaurant";

const NotFound = () => {
  return <>Ha llegaado a un página que no existe</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/restaurant/:id" Component={Restaurant} />
        <Route path="/restaurant/:id/menu" Component={MenuRestaurant} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
