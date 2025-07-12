
import { ROUTES } from "./constants";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style.css";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game/Game.jsx";


const App = () => {

  return (

   
    <>
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.DIFFICULTIES_ID} element={<Game />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;