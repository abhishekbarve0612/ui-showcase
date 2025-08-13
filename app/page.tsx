"use client";

import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Heading,
  Section,
  Tabs,
} from "@abhishekbarve/components";
import Link from "next/link";

function Page() {
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
        </Tabs.List>

        {/* Inputs */}
        <Tabs.Content value="inputs" className="space-y-4">
          <Section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <Card
              className="group transition-transform duration-300 [transition-timing-function:cubic-bezier(.215,.61,.355,1)] hover:scale-[1.01] motion-reduce:transform-none"
              href="/components/button"
              LinkComponent={Link as any}
            >
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
                <span className="hover:group-hover:underline">
                  View documentation
                </span>
              </Card.Footer>
            </Card>
          </Section>
        </Tabs.Content>
      </Tabs>
    </Section>
  );
}

export default Page;
