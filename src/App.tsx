import { Routes, Route } from "react-router-dom";

import ClientPage from "./modules/client/pages/ClientPage";
import LoginPage from "./modules/auth/pages/LoginPage";
import RegisterPage from "./modules/client/pages/RegisterPage";
import RegisterPetPage from "./modules/pet/pages/RegisterPetPage";
import RequestPetshopServicePage from "./modules/petshopService/pages/RequestPetshopServicePage";
import MyAdoptionsPage from "./modules/myAdoptions/pages/MyAdoptionsPage";
import AdminLayout from "./modules/admin/layout/AdminLayout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<ClientPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/pet/register' element={<RegisterPetPage />} />
      <Route path='/petshop-services/request' element={<RequestPetshopServicePage />} />
      <Route path='/my-adoptions' element={<MyAdoptionsPage />} />
      <Route path='/admin' element={<AdminLayout />} />
    </Routes>
  )
}

export default App

