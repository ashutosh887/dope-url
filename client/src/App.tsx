import { Routes, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import RedirectContainer from "./container/RedirectContainer";

function App() {
  // return <HomeContainer />;
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/:shortId" element={<RedirectContainer />} />
    </Routes>
  );
}

export default App;