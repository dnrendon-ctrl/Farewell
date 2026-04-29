import Link from "next/link";
import { GiftChecklist } from "@/components/farewell/GiftChecklist";
import { Button } from "@/components/ui/button";
import { getFarewellById, getGiftItems } from "@/services/farewellMockService";

interface GiftsPageProps {
  params: Promise<{ farewellId: string }>;
}

const GiftsPage = async ({ params }: GiftsPageProps) => {
  const { farewellId } = await params;
  const farewell = await getFarewellById(farewellId);
  const giftItems = await getGiftItems(farewellId);

  if (!farewell) {
    return <main className="mx-auto max-w-3xl p-6">Farewell not found.</main>;
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
      <h1 className="text-xl font-semibold">Gift plan for {farewell.recipientName}</h1>
      <GiftChecklist initialItems={giftItems} />
      <Button asChild variant="outline">
        <Link href={`/recipient/${farewell.id}`}>Back to recipient dashboard</Link>
      </Button>
    </main>
  );
};

export default GiftsPage;
