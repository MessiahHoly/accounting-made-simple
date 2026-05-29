"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { languages } from "@/lib/data/language"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

export function LanguageCombobox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setLanguage = (language: string | null) => {
    const params = new URLSearchParams(searchParams)
    if (language) {
      params.set('language', language)
    } else {
      params.delete('language')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Combobox items={languages.map(lang => lang.name)} onValueChange={setLanguage}>
      <ComboboxInput placeholder="Select a language" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
