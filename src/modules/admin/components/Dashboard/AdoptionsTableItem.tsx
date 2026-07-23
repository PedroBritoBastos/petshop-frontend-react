interface Props {
  petName: string;
  adoptionDate: string;
}

export function AdoptionsTableItem({ petName, adoptionDate }: Props) {
  return (
    <div className="bg-primary/10 rounded-xl p-2 flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-paw-print-icon lucide-paw-print"
        >
          <circle cx="11" cy="4" r="2" />
          <circle cx="18" cy="8" r="2" />
          <circle cx="20" cy="16" r="2" />
          <path
            d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
          />
        </svg>
      </div>
      <div>
        <p className="text-foreground text-lg font-bold">{petName}</p>
        <p className="text-primary text-md">Adotado em {adoptionDate}</p>
      </div>
    </div>
  )
}