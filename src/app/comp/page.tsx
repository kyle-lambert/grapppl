import React from "react";
import { Button } from "@/components/button";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-end gap-3">
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="tertiary">Tertiary</Button>
      </div>
      <div className="flex items-end gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex items-end gap-3">
        <Button isDisabled appearance="primary">
          Primary: Disabled
        </Button>
        <Button isDisabled appearance="secondary">
          Secondary: Disabled
        </Button>
        <Button isDisabled appearance="tertiary">
          Tertiary: Disabled
        </Button>
      </div>
    </div>
  );
}
