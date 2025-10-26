export default function getCodeSnippet(): string {
  return `import { useState } from 'react'

import { Form, Label, Switch, RichTextArea, Button, Section } from '@abhishekbarve/components'


const ROLE_OPTIONS = [
  { label: 'Product Designer', value: 'designer' },
  { label: 'Frontend Engineer', value: 'frontend' },
  { label: 'Product Manager', value: 'pm' },
  { label: 'QA Specialist', value: 'qa' },
]

function FormDemo() {
  const [role, setRole] = useState('designer')
  const [notifications, setNotifications] = useState(true)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [volume, setVolume] = useState(60)
  const [scopeDetails, setScopeDetails] = useState('<p>Outline milestones, dependencies, and stakeholders.</p>')

  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="text-base font-medium text-foreground">Project Intake Form</h3>

      <Form className="w-full max-w-2xl space-y-6 rounded-xl border bg-background p-6 shadow-sm">
        <Section className="grid gap-4 md:grid-cols-2">
          <Form.Input>
            <Form.Input.Label htmlFor="name">Full Name</Form.Input.Label>
            <Form.Input.Description id="name-description">Who is responsible for the submission?</Form.Input.Description>
            <Form.Input.Field id="name" name="name" placeholder="Jordan Carter" required />
          </Form.Input>

          <Form.Input>
            <Form.Input.Label htmlFor="email">Work Email</Form.Input.Label>
            <Form.Input.Field
              id="email"
              name="email"
              type="email"
              placeholder="jordan.carter@domain.com"
              required
            />
          </Form.Input>
        </Section>

        <Form.Input>
          <Form.Input.Label htmlFor="project-title">Project Title</Form.Input.Label>
          <Form.Input.Field id="project-title" name="projectTitle" placeholder="Marketing site refresh" required />
        </Form.Input>

        <Form.Textarea
          name="brief"
          description="Provide a brief overview of the project goals and success metrics."
          maxLength={240}
        >
          <Form.Textarea.Label htmlFor="project-brief">Project Brief</Form.Textarea.Label>
          <Form.Textarea.Field
            id="project-brief"
            placeholder="Outline the work in a few sentences..."
            rows={4}
          />
          <Form.Textarea.Count />
        </Form.Textarea>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="role">Primary Role</Label>
            <Form.Select value={role} onValueChange={setRole}>
              <Form.Select.Trigger aria-label="Select your role">
                <Form.Select.Value placeholder="Select role" />
              </Form.Select.Trigger>
              <Form.Select.Content>
                {ROLE_OPTIONS.map((option) => (
                  <Form.Select.Item key={option.value} value={option.value}>
                    {option.label}
                  </Form.Select.Item>
                ))}
              </Form.Select.Content>
            </Form.Select>
          </div>

          <div>
            <Form.RangeInput
              id="collaboration"
              min={0}
              max={100}
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              label="Collaboration Level"
              description="How available is your team over the next sprint?"
              showValue
              showLabels
            />
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-medium text-foreground">Detailed Scope</span>
          <RichTextArea
            initialValue={scopeDetails}
            onChange={setScopeDetails}
            aria-label="Detailed project scope"
            aria-describedby="scope-helper"
          />
          <span id="scope-helper" className="text-xs text-muted-foreground">
            Use formatting to call out timelines, teams, or key risks.
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-between rounded-lg border bg-muted/20 px-4 py-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Email Notifications</span>
              <span className="text-xs text-muted-foreground">Send me project updates</span>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>

          <div className="flex items-center gap-3">
            <Form.Checkbox checked={termsAccepted} onCheckedChange={setTermsAccepted} aria-labelledby="terms-label" />
            <div className="flex flex-col">
              <span id="terms-label" className="text-sm text-foreground">
                I agree to the terms and conditions
              </span>
              <span className="text-xs text-muted-foreground">You must accept before submitting.</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Button variant="outline" type="button">
            Save draft
          </Button>
          <Button type="submit" disabled={!termsAccepted}>
            Submit request
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default FormDemo
`
}