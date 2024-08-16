import React from "react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { TextField } from "@/components/form";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Button size="sm" appearance="primary">
          Primary
        </Button>
        <Button size="sm" appearance="secondary">
          Secondary
        </Button>
        <Button size="sm" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <Button size="md" appearance="primary">
          Primary
        </Button>
        <Button size="md" appearance="secondary">
          Secondary
        </Button>
        <Button size="md" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex flex-wrap items-end gap-3">
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
      <div className="flex flex-wrap items-end gap-3">
        <Button isDisabled size="sm" appearance="primary">
          Primary
        </Button>
        <Button isDisabled size="sm" appearance="secondary">
          Secondary
        </Button>
        <Button isDisabled size="sm" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <Button isDisabled size="md" appearance="primary">
          Primary
        </Button>
        <Button isDisabled size="md" appearance="secondary">
          Secondary
        </Button>
        <Button isDisabled size="md" appearance="brand">
          Brand
        </Button>
      </div>
      <div className="flex flex-wrap items-end gap-3">
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
      <div className="flex flex-wrap items-end gap-3">
        <TextField>
          <Input size="sm" />
        </TextField>
        <TextField>
          <Input size="md" />
        </TextField>
        <TextField>
          <Input size="lg" />
        </TextField>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <TextField isDisabled>
          <Input size="sm" />
        </TextField>
        <TextField isDisabled>
          <Input size="md" />
        </TextField>
        <TextField isDisabled>
          <Input size="lg" />
        </TextField>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <TextField isInvalid>
          <Input size="sm" />
        </TextField>
        <TextField isInvalid>
          <Input size="md" />
        </TextField>
        <TextField isInvalid>
          <Input size="lg" />
        </TextField>
      </div>
    </div>
  );
}
