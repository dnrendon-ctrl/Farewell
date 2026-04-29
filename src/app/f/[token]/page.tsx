"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ContributionForm } from "@/components/farewell/ContributionForm";
import { ExportPreview } from "@/components/farewell/ExportPreview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createMockContribution, getInviteStateByToken } from "@/services/farewellMockService";
import type { InviteViewModel } from "@/types/farewell";

interface InvitePageProps {
  params: Promise<{ token: string }>;
}

const InvitePage = ({ params }: InvitePageProps) => {
  const [viewModel, setViewModel] = useState<InviteViewModel | null>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    params.then(async (resolvedParams) => {
      setToken(resolvedParams.token);
      setViewModel(await getInviteStateByToken(resolvedParams.token));
    });
  }, [params]);

  if (!viewModel) {
    return <main className="mx-auto max-w-3xl p-6">Loading invite...</main>;
  }

  if (viewModel.status === "invalid") {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col p-4 sm:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Invite not found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This invite token is invalid. Ask the organizer for a new link.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (!viewModel.farewell) {
    return null;
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
      {viewModel.status === "expired" ? (
        <Card>
          <CardHeader>
            <CardTitle>Invite expired</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Contributions are closed for this invite token.
            </p>
          </CardContent>
        </Card>
      ) : (
        <ContributionForm
          onSubmit={async (payload) => {
            await createMockContribution(viewModel.farewell!.id, payload);
            setViewModel(await getInviteStateByToken(token));
          }}
        />
      )}

      <ExportPreview farewell={viewModel.farewell} />

      <Button asChild variant="outline">
        <Link href={`/recipient/${viewModel.farewell.id}`}>View recipient dashboard</Link>
      </Button>
    </main>
  );
};

export default InvitePage;
