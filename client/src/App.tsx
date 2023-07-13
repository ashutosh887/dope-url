import { Routes, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import RedirectContainer from "./container/RedirectContainer";
import NotFound from "./pages/NotFound";

function App() {
  // return <HomeContainer />;
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/:shortId" element={<RedirectContainer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
