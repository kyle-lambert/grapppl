import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-end gap-3">
        <Button size="small" appearance="primary">
          Primary
        </Button>
        <Button size="small" appearance="secondary">
          Secondary
        </Button>
        <Button size="small" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex items-end gap-3">
        <Button size="default" appearance="primary">
          Primary
        </Button>
        <Button size="default" appearance="secondary">
          Secondary
        </Button>
        <Button size="default" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex items-end gap-3">
        <Button isDisabled size="small" appearance="primary">
          Primary
        </Button>
        <Button isDisabled size="small" appearance="secondary">
          Secondary
        </Button>
        <Button isDisabled size="small" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex items-end gap-3">
        <Button isDisabled size="default" appearance="primary">
          Primary
        </Button>
        <Button isDisabled size="default" appearance="secondary">
          Secondary
        </Button>
        <Button isDisabled size="default" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex items-end gap-3">
        <Input size="small" appearance="primary" placeholder="Primary" />
        <Input size="default" appearance="primary" placeholder="Primary" />
      </div>
      <div className="flex items-end gap-3">
        <Input
          disabled
          size="small"
          appearance="primary"
          placeholder="Primary"
        />
        <Input
          disabled
          size="default"
          appearance="primary"
          placeholder="Primary"
        />
      </div>
    </div>
  );
}
