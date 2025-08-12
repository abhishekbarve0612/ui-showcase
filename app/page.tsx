"use client";

import {
  Button,
  Card,
  Heading,
  Input,
  Section,
} from "@abhishekbarve/components";

function Page() {
  return (
    <Section>
      <Heading.H1>Components</Heading.H1>
      <p>
        You can take a look at the list of components below. All components are
        built with the flexibility and accessibility in mind. You can use them
        as is or customize them to your liking. You can also use them as a
        starting point for your own components.
      </p>

      <Section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <Card.Header>
            <Card.Title>Button</Card.Title>
          </Card.Header>
          <Card.Content>
            <Button>Click me</Button>
          </Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Input</Card.Title>
          </Card.Header>
          <Card.Content>
            <Input>
              <Input.Label>Name</Input.Label>
              <Input.Field name="name" />
            </Input>
          </Card.Content>
        </Card>
      </Section>
    </Section>
  );
}

export default Page;
