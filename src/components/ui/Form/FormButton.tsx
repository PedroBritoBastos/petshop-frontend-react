interface Props {
  children: React.ReactNode;
  type?: "button" | "submit";
}

export function FormButton({ children, type = "submit" }: Props) {
  return (
    <button
      type={type}
      className="bg-ring hover:bg-secondary py-4 px-8 rounded-xl text-primary-foreground font-semibold mt-5"
    >
      {children}
    </button>
  );
}