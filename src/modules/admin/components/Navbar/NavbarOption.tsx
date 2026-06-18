interface Props {
  children: React.ReactNode;
  optionName: string;
  isActive: boolean;
  onClick: (optionName: string) => void;
}

export function NavbarOption({ children, optionName, isActive, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(optionName)}
      className={`cursor-pointer text-xs sm:text-md md:text-lg font-semibold flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-colors md:w-full ${isActive ? 'bg-primary text-white hover:bg-primary/70' : 'bg-background text-foreground shadow-md hover:bg-primary/10'}`}
    >
      {children}
      {optionName}
    </button>
  )
}
