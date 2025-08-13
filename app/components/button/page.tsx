"use client";

import React, { useMemo, useState } from "react";
import { FiArrowRight, FiCheck, FiTrash2 } from "react-icons/fi";
import {
  Button,
  Card,
  Heading,
  Input,
  Section,
  Select,
  Switch,
  Tabs,
} from "@abhishekbarve/components";
import PlaygroundBlock from "./PlayGround";

function ButtonPage() {
  return (
    <Section className="space-y-8">
      {/* Page header */}
      <Section className="space-y-3">
        <Heading.H1>Button</Heading.H1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
          Buttons trigger actions. They come in multiple variants and sizes to
          suit different contexts, and support standard HTML button attributes
          and accessibility props.
        </p>
      </Section>

      {/* Component | Code | Playground */}
      <PlaygroundBlock />

      {/* Quick preview */}
      <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
        <Card.Header>
          <Card.Title>Quick preview</Card.Title>
          <Card.Description>Common variants at a glance</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-wrap gap-3 p-6">
          <Button >
            Default
          </Button>
          <Button
            variant="primary"
                    >
            Primary
          </Button>
          <Button
            variant="secondary"
                    >
            Secondary
          </Button>
          <Button
            variant="outline"
                    >
            Outline
          </Button>
          <Button
            variant="ghost"
                    >
            Ghost
          </Button>
          <Button
            variant="destructive"
                    >
            Destructive
          </Button>
          <Button
            variant="link"
                    >
            Link
          </Button>
        </Card.Content>
      </Card>

      <Tabs defaultValue="variants" className="space-y-8">
        <Tabs.List className="grid w-full grid-cols-5">
          <Tabs.Trigger value="variants">Variants</Tabs.Trigger>
          <Tabs.Trigger value="sizes">Sizes & layout</Tabs.Trigger>
          <Tabs.Trigger value="states">States</Tabs.Trigger>
          <Tabs.Trigger value="icons">With icons</Tabs.Trigger>
          <Tabs.Trigger value="usage">Usage</Tabs.Trigger>
        </Tabs.List>

        {/* Variants */}
        <Tabs.Content value="variants">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { label: "default", variant: undefined },
              { label: "primary", variant: "primary" as const },
              { label: "secondary", variant: "secondary" as const },
              { label: "outline", variant: "outline" as const },
              { label: "ghost", variant: "ghost" as const },
              { label: "destructive", variant: "destructive" as const },
              { label: "link", variant: "link" as const },
            ].map((v) => (
              <Card
                key={v.label}
                className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none"
              >
                <Card.Header>
                  <Card.Title className="capitalize">{v.label}</Card.Title>
                  <Card.Description>Variant</Card.Description>
                </Card.Header>
                <Card.Content>
                  <Button
                    variant={v.variant}
                                    >
                    {v.label}
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Section>
        </Tabs.Content>

        {/* Sizes & layout */}
        <Tabs.Content value="sizes">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { label: "default", size: undefined },
              { label: "sm", size: "sm" as const },
              { label: "md", size: "md" as const },
              { label: "lg", size: "lg" as const },
              { label: "xl", size: "xl" as const },
            ].map((s) => (
              <Card
                key={s.label}
                className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none"
              >
                <Card.Header>
                  <Card.Title className="uppercase">{s.label}</Card.Title>
                  <Card.Description>Size</Card.Description>
                </Card.Header>
                <Card.Content className="flex items-center gap-4">
                  <Button
                    size={s.size}
                                    >
                    Button
                  </Button>
                  <Button
                    size={s.size}
                    variant="primary"
                                    >
                    Primary
                  </Button>
                </Card.Content>
              </Card>
            ))}

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Full width</Card.Title>
                <Card.Description>
                  Use utility classes for layout
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3">
                <Button className="w-full">
                  Block button
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                >
                  Primary block
                </Button>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>

        {/* States */}
        <Tabs.Content value="states">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Disabled</Card.Title>
                <Card.Description>HTML disabled attribute</Card.Description>
              </Card.Header>
              <Card.Content className="flex gap-2">
                <Button
                  disabled
                                >
                  Disabled
                </Button>
                <Button
                  disabled
                  variant="primary"
                                >
                  Disabled
                </Button>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Active</Card.Title>
                <Card.Description>
                  Use the active prop for pressed look
                </Card.Description>
              </Card.Header>
              <Card.Content className="flex gap-2">
                <Button active >
                  Active
                </Button>
                <Button
                  active
                  variant="primary"
                                >
                  Active
                </Button>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>ARIA</Card.Title>
                <Card.Description>Accessibility attributes</Card.Description>
              </Card.Header>
              <Card.Content className="flex gap-2">
                <Button
                  aria-label="Confirm"
                                >
                  Confirm
                </Button>
                <Button
                  aria-pressed={true}
                  variant="outline"
                                >
                  Pressed
                </Button>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>

        {/* With icons */}
        <Tabs.Content value="icons">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Leading icon</Card.Title>
                <Card.Description>Icon before label</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-wrap gap-2">
                <Button >
                  <FiCheck className="me-2" />
                  Save
                </Button>
                <Button
                  variant="primary"
                                >
                  <FiArrowRight className="me-2" />
                  Continue
                </Button>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Trailing icon</Card.Title>
                <Card.Description>Icon after label</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-wrap gap-2">
                <Button >
                  Next
                  <FiArrowRight className="ms-2" />
                </Button>
                <Button
                  variant="destructive"
                                >
                  Delete
                  <FiTrash2 className="ms-2" />
                </Button>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Icon only</Card.Title>
                <Card.Description>Decorative buttons</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-wrap gap-2">
                <Button
                  aria-label="Confirm"
                                >
                  <FiCheck />
                </Button>
                <Button
                  aria-label="Next"
                  variant="primary"
                                >
                  <FiArrowRight />
                </Button>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>

        {/* Usage */}
        <Tabs.Content value="usage">
          <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
            <Card.Header>
              <Card.Title>Usage</Card.Title>
              <Card.Description>Import and basic props</Card.Description>
            </Card.Header>
            <Card.Content>
              <pre className="rounded-md bg-slate-950/90 text-slate-100 p-4 overflow-auto text-sm">
                {`import { Button } from "@abhishekbarve/components";

export default function Example() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="primary" size="md">Primary</Button>
      <Button variant="outline" size="lg" disabled>Disabled</Button>
    </div>
  );
}`}
              </pre>
            </Card.Content>
            <Card.Footer className="text-sm text-slate-600 dark:text-slate-400">
              Variants: default, primary, secondary, outline, ghost, link,
              destructive. Sizes: default, sm, md, lg, xl.
            </Card.Footer>
          </Card>
        </Tabs.Content>
      </Tabs>
    </Section>
  );
}

export default ButtonPage;
