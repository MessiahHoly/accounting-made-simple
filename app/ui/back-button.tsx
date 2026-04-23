'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BackButton({ text }: { text: string }) {
  const { back } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    back();
  }

  return (
    <Button
      onClick={handleClick}
      variant="outline"
    >
      {text}
    </Button>
  );
}