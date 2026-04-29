"use client";

import { useMemo, useState } from "react";
import type { GiftItem } from "@/types/farewell";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface GiftChecklistProps {
  initialItems: GiftItem[];
}

export const GiftChecklist = ({ initialItems }: GiftChecklistProps) => {
  const [items, setItems] = useState<GiftItem[]>(initialItems);

  const completionLabel = useMemo(() => {
    const done = items.filter((item) => item.isChecked).length;
    return `${done}/${items.length} complete`;
  }, [items]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gift checklist</CardTitle>
        <CardDescription>Simple coordination only. No checkout in this MVP.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xs text-muted-foreground">{completionLabel}</p>
        {items.map((item) => (
          <label className="flex items-center gap-3 rounded-md border p-3" key={item.id}>
            <Checkbox
              checked={item.isChecked}
              onCheckedChange={(checked) =>
                setItems((currentItems) =>
                  currentItems.map((currentItem) =>
                    currentItem.id === item.id
                      ? { ...currentItem, isChecked: checked === true }
                      : currentItem,
                  ),
                )
              }
            />
            <span className="text-sm">{item.label}</span>
          </label>
        ))}
      </CardContent>
    </Card>
  );
};
