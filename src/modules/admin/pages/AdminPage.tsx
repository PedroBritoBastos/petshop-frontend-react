import { ViewModeContextProvider } from "../contexts/ViewModeContext"
import { Navbar } from "../components/Navbar/Navbar"

export default function AdminPage() {
  return (
    <ViewModeContextProvider>
      <div className="flex flex-col md:flex-row">
        <Navbar />
      </div>
    </ViewModeContextProvider>
  )
}