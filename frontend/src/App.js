import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/mainPage/mainPage";
import { Header } from "./components/header/header";
import "./App.css";
import { About } from "./pages/about/about";
import { Services } from "./pages/services/services";
import { Calculator } from "./pages/calculator/calculator";
import { Contacts } from "./pages/contacts/contacts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
