import { Routes, Route } from "react-router-dom";
import ClientPage from "./modules/client/pages/ClientPage";

function App() {
  return (
    <Routes>
      <Route path='/client' element={<ClientPage />} />
    </Routes>
  )
}

export default App

