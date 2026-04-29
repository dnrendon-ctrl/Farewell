"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContributionFormProps {
  onSubmit: (payload: {
    authorName: string;
    message: string;
    photoUrl?: string;
  }) => Promise<void>;
}

export const ContributionForm = ({ onSubmit }: ContributionFormProps) => {
  const [authorName, setAuthorName] = useState("");
  const [message, setMessage] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!authorName.trim() || !message.trim()) return;
    setIsSubmitting(true);
    await onSubmit({
      authorName: authorName.trim(),
      message: message.trim(),
      photoUrl: photoUrl.trim() || undefined,
    });
    setIsSubmitting(false);
    setSubmitted(true);
    setMessage("");
    setPhotoUrl("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave your message</CardTitle>
        <CardDescription>Short note plus optional photo URL for this mock flow.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="authorName">Your name</Label>
            <Input
              id="authorName"
              value={authorName}
              onChange={(event) => setAuthorName(event.target.value)}
              placeholder="Nora"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="We will miss you..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photoUrl">Photo URL (optional)</Label>
            <Input
              id="photoUrl"
              value={photoUrl}
              onChange={(event) => setPhotoUrl(event.target.value)}
              placeholder="https://..."
            />
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit contribution"}
          </Button>
          {submitted ? (
            <p className="text-sm text-primary">Contribution submitted. Thank you!</p>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
};
