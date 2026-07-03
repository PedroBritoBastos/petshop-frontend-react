import { RegisterForm } from "../components/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="w-full h-screen flex gap-5 bg-primary-foreground overflow-auto">
      <div
        className="bg-ring w-[50%] hidden md:block bg-cover bg-[80%_90%] relative"
        style={{ backgroundImage: "url('assets/register-page-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-ring/40"></div>
      </div>

      <RegisterForm />
    </div>

  )
}