import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function FormRoot({ children }: Props) {
  return (
    <div className='w-full md:w-[50%] min-w-0'>
      <form className="h-fit flex flex-col gap-4 p-10 md:p-20">
        {children}
      </form>
    </div>
  )
}