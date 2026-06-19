import AdminPage from "../pages/AdminPage"

import { ViewModeContextProvider } from "../contexts/ViewModeContext"

export default function AdminLayout() {
  return (
    <>
      <ViewModeContextProvider>
        <AdminPage />
      </ViewModeContextProvider>
    </>
  )
}