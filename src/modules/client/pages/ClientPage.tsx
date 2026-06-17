export default function ClientPage() {
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
    </div>
  )
}