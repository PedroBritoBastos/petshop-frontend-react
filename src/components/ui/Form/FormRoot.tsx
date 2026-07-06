interface Props {
  children: React.ReactNode;
  onSubmit?: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export function FormRoot({ children, onSubmit }: Props) {
  return (
    <div className="w-full min-w-0 md:flex-1 h-full overflow-y-auto">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-10 md:p-20"
      >
        {children}
      </form>
    </div>
  );
}