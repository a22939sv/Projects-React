import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodMenu from "./pages/FoodMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MenuRestaurant from "./pages/MenuRestaurant";
import Profile from "./pages/Profile";
import Restaurant from "./pages/Restaurant";

const NotFound = () => {
  return <>Ha llegado a un página que no existe</>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/profile" Component={Profile} />
        <Route path="/restaurant/:id" Component={Restaurant} />
        <Route path="/restaurant/:id/menu" Component={MenuRestaurant} />
        <Route path="/restaurant/:id/menu/:idMenu" Component={FoodMenu} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
