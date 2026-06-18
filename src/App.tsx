import { Routes, Route } from "react-router-dom";

import ClientPage from "./modules/client/pages/ClientPage";
import LoginPage from "./modules/auth/pages/LoginPage";
import RegisterPage from "./modules/client/pages/RegisterPage";
import AdminPage from "./modules/admin/pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path='/client' element={<ClientPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/admin' element={<AdminPage />} />
    </Routes>
  )
}

export default App

