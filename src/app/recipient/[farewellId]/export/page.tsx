import Link from "next/link";
import { ExportPreview } from "@/components/farewell/ExportPreview";
import { TrialGateCard } from "@/components/farewell/TrialGateCard";
import { Button } from "@/components/ui/button";
import { getFarewellById } from "@/services/farewellMockService";

interface ExportPageProps {
  params: Promise<{ farewellId: string }>;
}

const ExportPage = async ({ params }: ExportPageProps) => {
  const { farewellId } = await params;
  const farewell = await getFarewellById(farewellId);

  if (!farewell) {
    return <main className="mx-auto max-w-3xl p-6">Export not found.</main>;
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
      <TrialGateCard trialStatus={farewell.trialStatus} trialEndsAt={farewell.trialEndsAt} />
      <ExportPreview farewell={farewell} />
      <Button asChild variant="outline">
        <Link href={`/recipient/${farewell.id}`}>Back to dashboard</Link>
      </Button>
    </main>
  );
};

export default ExportPage;
