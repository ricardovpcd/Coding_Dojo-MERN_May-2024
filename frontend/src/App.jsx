import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewPiratePage from "./pages/newPiratePage";
import ListPiratesPage from "./pages/listPiratesPage";
import UpdatePiratePage from "./pages/updatePiratePage";
import AutenticacionPage from "./pages/autenticacionPage/autenticacionPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AutenticacionPage></AutenticacionPage>}></Route>
          <Route path="/pirate/new" element={<NewPiratePage></NewPiratePage>}></Route>
          <Route path="/pirates" element={<ListPiratesPage></ListPiratesPage>}></Route>
          <Route path="/pirate/:id" element={<UpdatePiratePage></UpdatePiratePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;