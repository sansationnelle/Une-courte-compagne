import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import NotFoundPage from "./pages/NotFoundPage";
import Page_Acceuil from "./pages/Accueil";
import Personages from "./pages/List_persos";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page_Acceuil />} />
            <Route path="/personages" element={<Personages />}/>
            <Route path="/regles" element={<Page_Acceuil />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
