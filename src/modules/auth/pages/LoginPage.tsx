export default function LoginPage() {
  return (
    <div className="flex items-center md:items-start w-full h-screen">
      <div
        className="bg-ring w-[50%] h-full hidden md:block bg-cover bg-[80%_50%] relative"
        style={{ backgroundImage: "url('assets/login-page-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-ring/40"></div>
      </div>
    </div>

  )
}