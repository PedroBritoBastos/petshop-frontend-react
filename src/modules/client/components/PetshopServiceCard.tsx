type Props = {
  petshopService: string;
  description: string;
  children: React.ReactNode
}

export function PetshopServiceCard({
  petshopService = '',
  description = '',
  children
}: Props) {
  return (
    <div
      className="bg-card flex flex-col items-center justify-center p-15 rounded-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
    >
      <div
        className="text-accent-foreground w-16 h-16 bg-muted flex justify-center items-center rounded-2xl"
      >
        {children}
      </div>
      <p className="text-accent-foreground text-xl font-bold my-5">{petshopService}</p>
      <p className="text-accent-foreground text-md text-center">{description}</p>
    </div>
  )
}