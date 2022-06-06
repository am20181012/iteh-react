import "./styles/App.scss";

import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          <Route></Route>
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
