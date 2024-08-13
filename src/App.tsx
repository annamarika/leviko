import GlobalStyle from "./Components/UI/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Startseite from "./pages/Startseite";
import ProjektPage from "./pages/ProjektPage";
import TeamPage from "./pages/TeamPage";
import ProgressBar from "../src/Components/Header/Progressbar.tsx";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer.tsx";
import Impressum from "./pages/Impressum.tsx";
import ScrollToTop from "./Components/Header/ScrollToTop.ts";
import useDarkModeStore from './Components/stores/useDarkModeStore.tsx';
import BallEffect from "./Components/UI/BallEffect.tsx";

function App() {

  const { isDarkModeOn } = useDarkModeStore();

  return (
    <>
      {isDarkModeOn && <BallEffect />}
      <GlobalStyle darkTheme={isDarkModeOn}/>
      <ProgressBar />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/projekt" element={<ProjektPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
