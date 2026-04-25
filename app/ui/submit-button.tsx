import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function SubmitButton({ pending, text, pendingText }: { pending: boolean, text: string, pendingText: string }) {
  return pending ? (
    <Button disabled>
      <Spinner data-icon="inline-start" />
      {pendingText}
    </Button>
  ) : (
    <Button type="submit">
      {text}
    </Button>
  )
}