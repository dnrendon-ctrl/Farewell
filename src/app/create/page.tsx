"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FarewellForm } from "@/components/farewell/FarewellForm";
import { MOCK_FAREWELLS } from "@/constants/farewell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreateFarewellPage = () => {
  const [recipientName, setRecipientName] = useState<string | null>(null);

  const sampleFarewell = useMemo(() => MOCK_FAREWELLS[0], []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
      <FarewellForm onCreated={setRecipientName} />

      {recipientName ? (
        <Card>
          <CardHeader>
            <CardTitle>Links generated for {recipientName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Invite link (messages/photos):</p>
            <code className="block rounded-md bg-muted p-2">{`/f/${sampleFarewell.inviteToken}`}</code>
            <p>Recipient dashboard:</p>
            <code className="block rounded-md bg-muted p-2">{`/recipient/${sampleFarewell.id}`}</code>
            <p>Gift checklist:</p>
            <code className="block rounded-md bg-muted p-2">{`/gifts/${sampleFarewell.id}`}</code>
            <Button asChild className="mt-2">
              <Link href={`/recipient/${sampleFarewell.id}`}>Open recipient dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      ) : null}
    </main>
  );
};

export default CreateFarewellPage;
