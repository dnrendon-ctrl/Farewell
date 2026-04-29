import { INVALID_TOKENS, MOCK_FAREWELLS } from "@/constants/farewell";
import type {
  Contribution,
  Farewell,
  GiftItem,
  InviteViewModel,
  TrialStatus,
} from "@/types/farewell";

const wait = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getFarewellById = async (
  farewellId: string,
): Promise<Farewell | undefined> => {
  await wait(120);
  return MOCK_FAREWELLS.find((farewell) => farewell.id === farewellId);
};

export const getInviteStateByToken = async (
  token: string,
): Promise<InviteViewModel> => {
  await wait(150);

  if (INVALID_TOKENS.includes(token)) {
    return { status: "invalid" };
  }

  const farewell = MOCK_FAREWELLS.find((item) => item.inviteToken === token);
  if (!farewell) {
    return { status: "invalid" };
  }

  if (farewell.trialStatus === "expired" && farewell.id.includes("sam")) {
    return { status: "expired", farewell };
  }

  return { status: "valid", farewell };
};

export const createMockContribution = async (
  farewellId: string,
  payload: Pick<Contribution, "authorName" | "message" | "photoUrl">,
): Promise<Contribution | undefined> => {
  await wait(300);
  const farewell = MOCK_FAREWELLS.find((item) => item.id === farewellId);
  if (!farewell) return undefined;

  const nextContribution: Contribution = {
    id: `contrib-${Date.now()}`,
    authorName: payload.authorName,
    message: payload.message,
    photoUrl: payload.photoUrl,
    createdAt: new Date().toISOString(),
  };

  farewell.contributions = [nextContribution, ...farewell.contributions];
  return nextContribution;
};

export const getGiftItems = async (farewellId: string): Promise<GiftItem[]> => {
  await wait(120);
  return MOCK_FAREWELLS.find((item) => item.id === farewellId)?.giftItems ?? [];
};

export const getTrialStatus = async (
  farewellId: string,
): Promise<TrialStatus | undefined> => {
  await wait(100);
  return MOCK_FAREWELLS.find((item) => item.id === farewellId)?.trialStatus;
};
