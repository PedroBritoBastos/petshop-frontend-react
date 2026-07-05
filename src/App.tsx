import { Routes, Route } from "react-router-dom";

import ClientPage from "./modules/client/pages/ClientPage";
import LoginPage from "./modules/auth/pages/LoginPage";
import RegisterPage from "./modules/client/pages/RegisterPage";
import AdminLayout from "./modules/admin/layout/AdminLayout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ClientPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/admin' element={<AdminLayout />} />
    </Routes>
  )
}

export default App

