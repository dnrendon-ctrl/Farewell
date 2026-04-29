import { APP_COPY } from "@/constants/farewell";
import type { TrialStatus } from "@/types/farewell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TrialGateCardProps {
  trialStatus: TrialStatus;
  trialEndsAt: string;
}

const TRIAL_STATUS_COPY: Record<TrialStatus, string> = {
  active: "Trial active: unlimited downloads available.",
  expired: "Trial expired: download and save is locked.",
  unlocked: "Unlocked: final exports can be downloaded anytime.",
};

export const TrialGateCard = ({ trialStatus, trialEndsAt }: TrialGateCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        Export access
        <Badge variant={trialStatus === "expired" ? "outline" : "secondary"}>
          {trialStatus}
        </Badge>
      </CardTitle>
      <CardDescription>{TRIAL_STATUS_COPY[trialStatus]}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Trial end date: {new Date(trialEndsAt).toLocaleDateString()}
      </p>
      {trialStatus === "expired" ? (
        <Button>{APP_COPY.unlockPriceLabel}</Button>
      ) : (
        <Button variant="secondary">Download preview export</Button>
      )}
    </CardContent>
  </Card>
);
