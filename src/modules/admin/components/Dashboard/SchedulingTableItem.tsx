interface Props {
  clientName: string;
  service: string;
  date: string;
}

export function SchedulingTableItem({ clientName, service, date }: Props) {
  return (
    <div className="bg-white border-b border-border py-2 px-4 pb-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p className="text-foreground font-semibold">{service}</p>
        <div className="text-primary flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-user-icon lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <p className="text-primary text-sm">{clientName}</p>
        </div>
      </div>
      <p className="bg-primary/10 text-foreground py-1 px-2 rounded-full text-xs font-semibold">
        {date}
      </p>
    </div>
  )
}