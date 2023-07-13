import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import routes from "./config/routes";
import ShortID from "./pages/ShortID";

function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SHORT_ID} element={<ShortID />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
