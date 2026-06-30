interface Props {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormField({ id, label, type, placeholder, onChange }: Props) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col gap-1 flex-1">
        <label className="font-semibold text-accent-foreground" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-primary-foreground py-4 px-8 rounded-xl border-1 border-accent focus:border-ring"
        />
      </div>
    </div>
  )
}