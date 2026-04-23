'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <Button
      // className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
      // onClick={() => window.history.back()}
      onClick={back}
    >
      Okay
    </Button>
  );
}