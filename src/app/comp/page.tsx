import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-end gap-3">
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="brand">Brand</Button>
      </div>
      <div className="flex items-end gap-3">
        <Button size="lg" appearance="primary">
          Primary
        </Button>
        <Button size="lg" appearance="secondary">
          Secondary
        </Button>
        <Button size="lg" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex items-end gap-3">
        <Button isDisabled appearance="primary">
          Primary
        </Button>
        <Button isDisabled appearance="secondary">
          Secondary
        </Button>
        <Button isDisabled appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex items-end gap-3">
        <Button isDisabled size="lg" appearance="primary">
          Primary
        </Button>
        <Button isDisabled size="lg" appearance="secondary">
          Secondary
        </Button>
        <Button isDisabled size="lg" appearance="brand">
          Brand
        </Button>
      </div>
    </div>
  );
}
