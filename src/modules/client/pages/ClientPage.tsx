import { useState } from "react"

import { Card } from "../components/Card";

export default function ClientPage() {
  const [availableAdoptions] = useState([{ name: 'Boris', age: 3, imageUrl: '' }]);

  return (
    <div className="w-full">
      {/* Hero */}
      <main className="bg-muted flex flex-col md:flex-row md:p-10">
        <div className="md:flex-1 p-15 md:p-10 md:py-30">
          <h1 className="text-5xl text-accent-foreground font-bold leading-tight max-w-100">
            Encontre o seu <span className="text-primary">Amigo Animal</span>
          </h1>
          <p className="text-xl text-card-foreground my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem a eligendi quis,
            autem hic distinctio aut! Ipsum, provident tempore animi expedita ad, praesentium iure
            minima eos, illo veniam eligendi?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="bg-ring hover:bg-secondary text-lg text-primary-foreground font-semibold rounded-xl px-8 py-4 block w-fit"
            >Ver adoções</a
            >
            <a
              className="bg-ring hover:bg-secondary text-lg text-primary-foreground font-semibold rounded-xl px-8 py-4 block w-fit"
            >Nossos serviços</a
            >
          </div>
        </div>
        <div
          className="hidden md:block bg-green-100 md:flex-1 bg-cover relative rounded-lg shadow-lg objetc-[]"
          style={{ backgroundImage: "url('assets/client-page-hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-muted/20"></div>
        </div>
      </main>
      {/* Hero */}

      {/* Adoptions section */}
      <section className="px-4 py-25">
        <h1 className="text-center text-primary text-md font-semibold">CONHEÇA NOSSOS AMIGOS</h1>
        <p className="text-center text-accent-foreground text-4xl font-bold">Pets em adoção</p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 lg:px-10 xl:px-15"
        >
          {availableAdoptions.map((availableAdoption) => (
            <Card
              name={availableAdoption.name}
              age={availableAdoption.age}
              imageUrl={availableAdoption.imageUrl}
            />
          ))}
        </div>
      </section >
      {/* Adoptions section */}
    </div >
  )
}