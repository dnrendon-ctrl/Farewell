import Link from "next/link";
import { ExportPreview } from "@/components/farewell/ExportPreview";
import { TrialGateCard } from "@/components/farewell/TrialGateCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFarewellById } from "@/services/farewellMockService";

interface RecipientPageProps {
  params: Promise<{ farewellId: string }>;
}

const RecipientPage = async ({ params }: RecipientPageProps) => {
  const { farewellId } = await params;
  const farewell = await getFarewellById(farewellId);

  if (!farewell) {
    return <main className="mx-auto max-w-3xl p-6">Farewell not found.</main>;
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Recipient dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            Recipient: <strong>{farewell.recipientName}</strong>
          </p>
          <p>
            Occasion: <strong>{farewell.occasion}</strong>
          </p>
          <p className="text-muted-foreground">Tokenized invite: {farewell.inviteToken}</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild>
              <Link href={`/recipient/${farewell.id}/export`}>Open export view</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`/gifts/${farewell.id}`}>Open gift checklist</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <TrialGateCard trialStatus={farewell.trialStatus} trialEndsAt={farewell.trialEndsAt} />
      <ExportPreview farewell={farewell} />
    </main>
  );
};

export default RecipientPage;
