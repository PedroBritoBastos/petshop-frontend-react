import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  href: string;
  linkTitle: string;
}

export function FormLink({ title, href, linkTitle }: Props) {
  const navigate = useNavigate();

  return (
    <div className="text-lg text-card-foreground mt-2">
      {title}
      <button
        className="ml-2 text-card-foreground/60 hover:text-card-foreground/40 cursor-pointer"
        onClick={() => navigate(`${href}`)}
      >
        {linkTitle}
      </button>
    </div>
  )
}