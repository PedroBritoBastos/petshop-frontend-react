interface Props {
  children: React.ReactNode;
  value: number;
  title: string;
}

export function DashboardCard({
  children,
  value = 0,
  title = ''
}: Props) {
  return (
    <div className="h-full">
      <div
        className="rounded-2xl p-6 border border-border shadow-sm flex flex-col justify-center items-center gap-2 h-full bg-white"
      >
        <div
          className="bg-primary/10 text-foreground w-15 h-15 flex items-center justify-center rounded-full"
        >
          {children}
        </div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-muted-foreground text-sm text-center w-15">{title}</p>
      </div>
    </div>
  )
}