export type TrialStatus = "active" | "expired" | "unlocked";
export type InviteStatus = "valid" | "invalid" | "expired";

export interface Contribution {
  id: string;
  authorName: string;
  message: string;
  photoUrl?: string;
  createdAt: string;
}

export interface GiftItem {
  id: string;
  label: string;
  isChecked: boolean;
}

export interface Farewell {
  id: string;
  recipientName: string;
  occasion: string;
  createdBy: string;
  createdAt: string;
  inviteToken: string;
  trialStatus: TrialStatus;
  trialEndsAt: string;
  contributions: Contribution[];
  giftItems: GiftItem[];
}

export interface InviteViewModel {
  status: InviteStatus;
  farewell?: Farewell;
}
