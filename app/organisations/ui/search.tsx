"use client";

import { Input } from "@/components/ui/input";

export default function Search({ placeholder }: { placeholder: string }) {
  const handleSearch = (term: string) => {
    console.log("Search query:", term);
  };

  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      type="search"
    />
  );
}