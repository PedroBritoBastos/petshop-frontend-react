interface Props {
  info: string;
  value: string | number;
}

export function Info({ info, value }: Props) {
  return (
    <div className="bg-primary/10 p-4 rounded-lg flex flex-col justify-center gap-1 text-foreground">
      <p className="font-semibold text-xl">{info}</p>
      <p>{value}</p>
    </div>
  )
}