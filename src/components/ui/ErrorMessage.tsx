import { useErrorMessageContext } from "../../hooks/useErrorMessageContext";

interface Props {
  message: string | null;
}

export function ErrorMessage({ message }: Props) {
  const errorMessageContext = useErrorMessageContext();

  return (
    <>
      {(errorMessageContext.isOpen && message) && (
        <>
          {/* Backdrop */}
          < div
            onClick={errorMessageContext.close}
            className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${errorMessageContext.isOpen
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
              }
        `}
          />

          {/* Alerta */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`
          fixed left-1/2 top-5 z-50
          w-[90%] max-w-md
          -translate-x-1/2
          rounded-xl border border-red-300 bg-red-50
          px-5 py-4 shadow-xl
          transition-all duration-500 ease-out
          ${errorMessageContext.isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-20 opacity-0 pointer-events-none"
              }
        `}
          >
            <span className="text-red-700 font-medium">
              {message}
            </span>
          </div>
        </>
      )}
    </>
  );
}