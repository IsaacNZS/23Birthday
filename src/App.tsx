import { Route, Routes } from "react-router-dom";
import Firstpage from "./components/Firstpage";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";
import Fouthpage from "./pages/Fouthpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/second" element={<Secondpage />} />
        <Route path="/third" element={<Thirdpage />} />
        <Route path="/fouth" element={<Fouthpage />} />
      </Routes>
    </>
  );
}

export default App;
