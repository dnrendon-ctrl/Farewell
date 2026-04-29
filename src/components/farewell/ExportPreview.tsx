import type { Farewell } from "@/types/farewell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExportPreviewProps {
  farewell: Farewell;
}

export const ExportPreview = ({ farewell }: ExportPreviewProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{farewell.recipientName}'s keepsake preview</CardTitle>
      <CardDescription>{farewell.occasion}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {farewell.contributions.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No messages yet. Share your invite link to start collecting notes.
        </p>
      ) : (
        farewell.contributions.map((contribution) => (
          <article className="rounded-md border p-3" key={contribution.id}>
            <p className="text-sm font-semibold">{contribution.authorName}</p>
            <p className="mt-1 text-sm">{contribution.message}</p>
            {contribution.photoUrl ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Photo attached: {contribution.photoUrl}
              </p>
            ) : null}
          </article>
        ))
      )}
    </CardContent>
  </Card>
);
