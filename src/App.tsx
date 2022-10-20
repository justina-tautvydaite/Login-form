import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Logged from "./pages/Logged";
import GlobalStyle from "./globalStyles";
import { Body } from "./pages/Home.styles";

function App() {
  return (
    <Body>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/logged-inn" element={<Logged />} />
      </Routes>
    </Body>
  );
}

export default App;
