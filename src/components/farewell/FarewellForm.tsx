"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FarewellFormProps {
  onCreated: (recipientName: string) => void;
}

export const FarewellForm = ({ onCreated }: FarewellFormProps) => {
  const [recipientName, setRecipientName] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!recipientName.trim() || !occasion.trim()) return;
    onCreated(recipientName.trim());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a farewell</CardTitle>
        <CardDescription>Set up the recipient and event to generate invite links.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="recipientName">Recipient name</Label>
            <Input
              id="recipientName"
              value={recipientName}
              onChange={(event) => setRecipientName(event.target.value)}
              placeholder="Alex Rivera"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="occasion">Occasion</Label>
            <Input
              id="occasion"
              value={occasion}
              onChange={(event) => setOccasion(event.target.value)}
              placeholder="Moving to Barcelona"
            />
          </div>
          <Button className="w-full" type="submit">
            Generate links
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
