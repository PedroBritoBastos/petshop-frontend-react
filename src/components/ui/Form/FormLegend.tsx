interface Props {
  legend: string;
}

export function FormLegend({ legend }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
      <h1 className="text-3xl text-accent-foreground font-bold">{legend}</h1>
      <a
        href="client"
        className="flex items-center justify-center gap-1 w-fit text-card-foreground hover:text-card-foreground/60 cursor-pointer"
      >
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
          className="lucide lucide-log-out-icon lucide-log-out"
        >
          <path d="m16 17 5-5-5-5" />
          <path d="M21 12H9" />
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        </svg>
        Página principal</a
      >
    </div>
  )
}