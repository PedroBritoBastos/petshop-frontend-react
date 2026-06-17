export function Navbar() {
  return (
    <nav className="w-full border-accent border-b-1 p-4 flex flex-col md:flex-row md:justify-between gap-5">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl text-accent-foreground font-bold">Petshop</h1>
        </div>
      </div>
    </nav>
  )
}