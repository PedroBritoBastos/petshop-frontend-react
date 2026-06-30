interface Props {
  children: React.ReactNode;
  onSubmit?: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export function FormRoot({ children, onSubmit }: Props) {
  return (
    <div className="w-full md:w-[50%] min-w-0">
      <form
        onSubmit={onSubmit}
        className="h-fit flex flex-col gap-4 p-10 md:p-20"
      >
        {children}
      </form>
    </div>
  );
}