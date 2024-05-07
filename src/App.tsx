import GlobalStyle from "./Components/UI/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Startseite from "./pages/Startseite";
import ProjektPage from "./pages/ProjektPage";
import TeamPage from "./pages/TeamPage";
import ProgressBar from "../src/Components/Header/Progressbar.tsx";
import Header from "./Components/Header/Header";
import { useRef } from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <ProgressBar />
      <Header />
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/projekt" element={<ProjektPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </>
  );
}

export default App;
