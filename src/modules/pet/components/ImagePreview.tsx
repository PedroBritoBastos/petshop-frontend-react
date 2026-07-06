import { useEffect, useState } from "react";

interface Props {
  file: File | null;
}

export function ImagePreview({ file }: Props) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [file]);

  if (!previewUrl) {
    return null;
  }

  return (
    <div className="w-full flex justify-center">
      <img
        src={previewUrl}
        alt="Pré-visualização da foto do pet"
        className="w-52 h-52 object-cover rounded-full border shadow"
      />
    </div>
  );
}