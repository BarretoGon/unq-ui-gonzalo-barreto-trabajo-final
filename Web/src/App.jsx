
import { ROUTES } from "./constants";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home.jsx";

const App = () => {

  return (

   
    <>
    <BrowserRouter>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;