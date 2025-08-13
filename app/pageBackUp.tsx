"use client";

import React, { useRef, useState } from "react";
import {
  Accordion,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Heading,
  Input,
  Loader,
  Section,
  Select,
  Switch,
  Tabs,
  TextArea,
  Toolbar,
  Tooltip,
} from "@abhishekbarve/components";
import Link from "next/link";

function Page() {
  // Form control demos (kept local to the page for simplicity)
  const [newsletter, setNewsletter] = useState<boolean>(false);
  const [themeSwitch, setThemeSwitch] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("ts");

  // Tooltip target demo
  // Use a non-null typed ref to satisfy Tooltip's RefObject<HTMLElement>
  const infoTargetRef = useRef<HTMLElement>(null as unknown as HTMLElement);

  return (
    <Section className="space-y-8">
      {/* Top context with breadcrumb and hero */}
      <Section className="space-y-4">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Item isCurrentPage>UI Showcase</Breadcrumb.Item>
        </Breadcrumb>

        <Heading.H1>Minimalistic UI Showcase</Heading.H1>
        <p className="text-slate-600 dark:text-slate-300">
          A curated preview of components from{" "}
          <code>@abhishekbarve/components</code>.
        </p>
      </Section>

      {/* Category navigation */}
      <Tabs defaultValue="inputs" className="space-y-6">
        <Tabs.List>
          <Tabs.Trigger value="inputs">Inputs</Tabs.Trigger>
          <Tabs.Trigger value="navigation">Navigation</Tabs.Trigger>
          <Tabs.Trigger value="feedback">Feedback</Tabs.Trigger>
          <Tabs.Trigger value="layout">Layout</Tabs.Trigger>
        </Tabs.List>

        {/* Inputs */}
        <Tabs.Content value="inputs" className="space-y-4">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Link href="/components/button">
              <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
                <Card.Header>
                  <Card.Title>Button</Card.Title>
                  <Card.Description>Variants and sizes</Card.Description>
                </Card.Header>
                <Card.Content className="flex flex-wrap gap-2">
                  <Button className="transition-colors duration-200 ease">
                    Default
                  </Button>
                  <Button
                    variant="primary"
                    className="transition-colors duration-200 ease"
                  >
                    Primary
                  </Button>
                  <Button
                    variant="secondary"
                    className="transition-colors duration-200 ease"
                  >
                    Secondary
                  </Button>
                  <Button
                    variant="outline"
                    className="transition-colors duration-200 ease"
                  >
                    Outline
                  </Button>
                  <Button
                    variant="ghost"
                    className="transition-colors duration-200 ease"
                  >
                    Ghost
                  </Button>
                  <Button
                    variant="destructive"
                    className="transition-colors duration-200 ease"
                  >
                    Destructive
                  </Button>
                </Card.Content>
                <Card.Footer>
                  <Link href="/components/button">View documentation</Link>
                </Card.Footer>
              </Card>
            </Link>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Input</Card.Title>
                <Card.Description>
                  Label, field and description
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3">
                <Input id="name">
                  <Input.Label>Name</Input.Label>
                  <Input.Field name="name" placeholder="Jane Doe" />
                  <Input.Description>Enter your full name</Input.Description>
                </Input>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Select</Card.Title>
                <Card.Description>
                  Controlled select with items
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3">
                <Select value={language} onValueChange={setLanguage}>
                  <Select.Trigger className="w-full">
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="ts">TypeScript</Select.Item>
                    <Select.Item value="js">JavaScript</Select.Item>
                    <Select.Item value="py">Python</Select.Item>
                  </Select.Content>
                </Select>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Selected: <span className="font-mono">{language}</span>
                </p>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>TextArea</Card.Title>
                <Card.Description>Multi-line input</Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3">
                <TextArea>
                  <TextArea.Label>Message</TextArea.Label>
                  <TextArea.Field
                    placeholder="Write your thoughts..."
                    rows={4}
                  />
                  <TextArea.Description>
                    Max 500 characters
                  </TextArea.Description>
                </TextArea>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Checkbox</Card.Title>
                <Card.Description>Boolean selection</Card.Description>
              </Card.Header>
              <Card.Content className="flex items-center gap-3">
                <Checkbox
                  checked={newsletter}
                  onCheckedChange={setNewsletter}
                  aria-label="Subscribe to newsletter"
                />
                <span className="text-sm">Subscribe to newsletter</span>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Switch</Card.Title>
                <Card.Description>On/off control</Card.Description>
              </Card.Header>
              <Card.Content className="flex items-center gap-3">
                <Switch
                  checked={themeSwitch}
                  onCheckedChange={setThemeSwitch}
                  aria-label="Feature toggle"
                />
                <span className="text-sm">Feature enabled</span>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>

        {/* Navigation */}
        <Tabs.Content value="navigation">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Breadcrumb</Card.Title>
                <Card.Description>Hierarchical navigation</Card.Description>
              </Card.Header>
              <Card.Content>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Docs</Breadcrumb.Item>
                  <Breadcrumb.Divider>/</Breadcrumb.Divider>
                  <Breadcrumb.Item href="#">Components</Breadcrumb.Item>
                  <Breadcrumb.Divider>/</Breadcrumb.Divider>
                  <Breadcrumb.Item isCurrentPage>Button</Breadcrumb.Item>
                </Breadcrumb>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Toolbar</Card.Title>
                <Card.Description>Grouped actions</Card.Description>
              </Card.Header>
              <Card.Content>
                <Toolbar onChange={() => {}} className="flex gap-2 flex-wrap">
                  <Toolbar.Item
                    id="bold"
                    label="Bold"
                    icon={<span className="font-semibold">B</span>}
                  />
                  <Toolbar.Item
                    id="italic"
                    label="Italic"
                    icon={<span className="italic">I</span>}
                  />
                  <Toolbar.Divider />
                  <Toolbar.Item
                    id="code"
                    label="Code"
                    icon={<span className="font-mono">{`</>`}</span>}
                  />
                </Toolbar>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Accordion</Card.Title>
                <Card.Description>Progressive disclosure</Card.Description>
              </Card.Header>
              <Card.Content>
                <Accordion defaultValue="a1" collapsible>
                  <Accordion.Item value="a1">
                    <Accordion.Trigger>What is this library?</Accordion.Trigger>
                    <Accordion.Content>
                      A minimal set of composable React components.
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item value="a2">
                    <Accordion.Trigger>
                      Can I customize styles?
                    </Accordion.Trigger>
                    <Accordion.Content>
                      Yes. Tailwind utility classes and variants help you adapt
                      the look and feel.
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>

        {/* Feedback */}
        <Tabs.Content value="feedback">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Loader</Card.Title>
                <Card.Description>Spinner, dots, bars</Card.Description>
              </Card.Header>
              <Card.Content className="flex flex-wrap items-center gap-4">
                <Loader variant="spinner" />
                <Loader variant="dots" />
                <Loader variant="bars" />
                <Loader variant="pulse" />
                <Loader variant="ripple" />
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Tooltip</Card.Title>
                <Card.Description>Hover/click/focus</Card.Description>
              </Card.Header>
              <Card.Content className="flex items-center gap-4">
                <span ref={infoTargetRef}>
                  <Button className="transition-colors duration-200 ease">
                    Hover me
                  </Button>
                </span>
                <Tooltip targetRef={infoTargetRef} placement="top" showArrow>
                  <Tooltip.Content>
                    <Tooltip.Header>Info</Tooltip.Header>
                    <Tooltip.Body>Helpful hint appears here.</Tooltip.Body>
                  </Tooltip.Content>
                </Tooltip>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>

        {/* Layout */}
        <Tabs.Content value="layout">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Cards</Card.Title>
                <Card.Description>Image, title and body</Card.Description>
              </Card.Header>
              <Card.Content className="space-y-3">
                <Card className="bg-slate-50 dark:bg-slate-800">
                  <Card.Header>
                    <Card.Title>Nested Card</Card.Title>
                    <Card.Description>Composed content</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    Use cards to group content and actions.
                  </Card.Content>
                </Card>
              </Card.Content>
            </Card>

            <Card className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none">
              <Card.Header>
                <Card.Title>Tabs</Card.Title>
                <Card.Description>Contextual sections</Card.Description>
              </Card.Header>
              <Card.Content>
                <Tabs defaultValue="one">
                  <Tabs.List>
                    <Tabs.Trigger value="one">One</Tabs.Trigger>
                    <Tabs.Trigger value="two">Two</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="one" className="pt-2">
                    Content one
                  </Tabs.Content>
                  <Tabs.Content value="two" className="pt-2">
                    Content two
                  </Tabs.Content>
                </Tabs>
              </Card.Content>
            </Card>
          </Section>
        </Tabs.Content>
      </Tabs>
    </Section>
  );
}

export default Page;
