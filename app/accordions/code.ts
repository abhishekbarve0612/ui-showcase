export default function getCodeSnippet(): string {
  return `import { Accordion } from '@abhishekbarve/components'

const FAQ_ITEMS = [
  {
    value: 'getting-started',
    title: 'Getting Started',
    description: 'Install the package, wrap your app with the provider, and you are ready to build.',
  },
  {
    value: 'billing',
    title: 'Billing Questions',
    description: 'Manage subscriptions, invoices, and receipts directly from your dashboard settings.',
  },
  {
    value: 'support',
    title: 'Support Hours',
    description: 'Our team is available 24/7 with a typical response time of under two hours.',
  },
]

const MULTI_ITEMS = [
  {
    value: 'analytics',
    title: 'Product Analytics',
    description: 'Segment usage by cohort, plan, or geography to understand adoption.',
  },
  {
    value: 'automation',
    title: 'Automation Recipes',
    description: 'Trigger workflows when projects change stage or tasks go overdue.',
  },
  {
    value: 'security',
    title: 'Security Controls',
    description: 'Role-based permissions, SSO, and audit trails help you stay compliant.',
  },
]

function AccordionDemo() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <h3 className='text-base font-medium text-foreground'>Accordions</h3>

      <div className='flex flex-col gap-2'>
        <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          Single Item
        </span>
        <Accordion defaultValue='getting-started' className='w-full max-w-xl'>
          {FAQ_ITEMS.map(({ value, title, description }) => (
            <Accordion.Item key={value} value={value}>
              <Accordion.Trigger>{title}</Accordion.Trigger>
              <Accordion.Content>{description}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          Multiple Open
        </span>
        <Accordion multiple defaultValue={['analytics']} className='w-full max-w-xl'>
          {MULTI_ITEMS.map(({ value, title, description }) => (
            <Accordion.Item key={value} value={value}>
              <Accordion.Trigger>{title}</Accordion.Trigger>
              <Accordion.Content>{description}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default AccordionDemo
`
}