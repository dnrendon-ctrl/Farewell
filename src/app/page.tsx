import Link from "next/link";
import { APP_COPY, MOCK_FAREWELLS } from "@/constants/farewell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => (
  <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
    <Card>
      <CardHeader>
        <CardTitle>{APP_COPY.title}</CardTitle>
        <CardDescription>{APP_COPY.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{APP_COPY.trialBanner}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/create">Start a farewell</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/f/${MOCK_FAREWELLS[0].inviteToken}`}>Open sample invite</Link>
          </Button>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Mock states</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              Valid invite: <code>{`/f/${MOCK_FAREWELLS[0].inviteToken}`}</code>
            </li>
            <li>
              Expired invite: <code>{`/f/${MOCK_FAREWELLS[1].inviteToken}`}</code>
            </li>
            <li>
              Invalid invite: <code>/f/invalid-token</code>
            </li>
            <li>
              Trial active: <code>{`/recipient/${MOCK_FAREWELLS[0].id}/export`}</code>
            </li>
            <li>
              Trial expired: <code>{`/recipient/${MOCK_FAREWELLS[1].id}/export`}</code>
            </li>
            <li>
              Unlocked: <code>{`/recipient/${MOCK_FAREWELLS[2].id}/export`}</code>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </main>
);

export default HomePage;
