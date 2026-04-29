import type { Farewell } from "@/types/farewell";

export const APP_COPY = {
  title: "Farewell Keepsake",
  subtitle:
    "Collect messages and photos in one private place, then keep your final export forever.",
  trialBanner: "First invite includes 14 days of free unlimited exports.",
  unlockPriceLabel: "$9.99 one-time unlock",
};

export const MOCK_FAREWELLS: Farewell[] = [
  {
    id: "farewell-alex-relocation",
    recipientName: "Alex Rivera",
    occasion: "Moving to Barcelona",
    createdBy: "Sofia",
    createdAt: "2026-04-20T10:00:00.000Z",
    inviteToken: "token-alex-valid",
    trialStatus: "active",
    trialEndsAt: "2026-05-04T10:00:00.000Z",
    contributions: [
      {
        id: "contrib-1",
        authorName: "Nora",
        message: "Your kindness made every team lunch better. We will miss you!",
        createdAt: "2026-04-21T14:10:00.000Z",
      },
      {
        id: "contrib-2",
        authorName: "Mila",
        message: "Thank you for always showing up. Barcelona is lucky to get you.",
        photoUrl: "/icons/icon-192.svg",
        createdAt: "2026-04-22T08:45:00.000Z",
      },
    ],
    giftItems: [
      { id: "gift-1", label: "Photo frame", isChecked: true },
      { id: "gift-2", label: "Travel journal", isChecked: false },
      { id: "gift-3", label: "Airport coffee card", isChecked: false },
    ],
  },
  {
    id: "farewell-sam-graduation",
    recipientName: "Sam Kim",
    occasion: "Graduation",
    createdBy: "Jordan",
    createdAt: "2026-03-10T09:00:00.000Z",
    inviteToken: "token-sam-expired",
    trialStatus: "expired",
    trialEndsAt: "2026-03-24T09:00:00.000Z",
    contributions: [],
    giftItems: [
      { id: "gift-4", label: "Custom mug", isChecked: true },
      { id: "gift-5", label: "Memory book", isChecked: true },
    ],
  },
  {
    id: "farewell-lina-newjob",
    recipientName: "Lina Patel",
    occasion: "New job in Austin",
    createdBy: "Diego",
    createdAt: "2026-02-01T12:00:00.000Z",
    inviteToken: "token-lina-unlocked",
    trialStatus: "unlocked",
    trialEndsAt: "2026-02-15T12:00:00.000Z",
    contributions: [
      {
        id: "contrib-3",
        authorName: "Chris",
        message: "You made every project feel lighter. Proud of you!",
        createdAt: "2026-02-05T17:00:00.000Z",
      },
    ],
    giftItems: [{ id: "gift-6", label: "Desk plant", isChecked: true }],
  },
];

export const INVALID_TOKENS = ["invalid-token", "unknown"];
