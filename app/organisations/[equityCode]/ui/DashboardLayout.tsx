import { Button } from "@/components/ui/button";
import Link from "next/link";

export const DashboardLayout = ({
  children,
  title,
  subtitle
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <main className="p-4 md:p-8 max-w-screen-2xl mx-auto w-full overflow-hidden">
      {/* Fixed Navigation Layer */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 w-full pt-4 md:pt-8">
          <div className="pointer-events-auto inline-block">
            <Button asChild variant="outline" className="shadow-md bg-background">
              <Link href="/" className="no-underline">Home</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10 mb-8" />

      {/* Header */}
      {title && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      )}

      {children}
    </main>
  );
}