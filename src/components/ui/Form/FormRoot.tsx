interface Props {
  children: React.ReactNode;
  onSubmit?: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export function FormRoot({ children, onSubmit }: Props) {
  return (
    <div className="w-full md:w-[50%] min-w-0 h-full overflow-y-auto">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-10 md:p-20"
      >
        {children}
      </form>
    </div>
  );
}