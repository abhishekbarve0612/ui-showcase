export default function getCodeSnippet(): string {
  return `import { Card, Button, Section } from '@abhishekbarve/components'

const FEATURE_CARDS = [
  {
    title: 'UI Design',
    description: 'Update the overall UI design of the app.',
    metric: '12 hours',
  },
  {
    title: 'Frontend Development',
    description: 'Build the frontend components for the app.',
    metric: '8 hours',
  },
]

function CardsDemo() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <h3 className='text-base font-medium text-foreground'>Cards Showcase</h3>

      <Section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {FEATURE_CARDS.map((card) => (
          <Card key={card.title} hoverable variant='elevated' padding='lg' className='h-full'>
            <Card.Header>
              <Card.Title>{card.title}</Card.Title>
              <Card.Description lines={2}>{card.description}</Card.Description>
            </Card.Header>
            <Card.Content className='flex flex-col justify-between gap-4'>
              <div className='rounded-lg bg-muted/40 px-4 py-3 text-sm text-muted-foreground'>
                {card.metric}
              </div>
            </Card.Content>
            <Card.Footer divider className='justify-between'>
              <Button variant='outline' size='sm'>
                Details
              </Button>
              <Button size='sm'>Open</Button>
            </Card.Footer>
          </Card>
        ))}
      </Section>

      <Section className='grid gap-4 lg:grid-cols-2'>
        <Card variant='outlined' padding='lg' hoverable className='h-full'>
          <Card.Image
            src='https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80'
            alt='Design collaboration'
            aspectRatio='video'
          />
          <Card.Header divider className='pt-4'>
            <Card.Title as='h2' className='text-xl'>
              Creative Review
            </Card.Title>
            <Card.Description>
              Review the latest concepts for the summer launch and leave feedback directly in context.
            </Card.Description>
          </Card.Header>
          <Card.Content className='gap-2'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>• 6 comments pending review</li>
              <li>• Last updated 2 hours ago</li>
              <li>• Shared with 12 collaborators</li>
            </ul>
          </Card.Content>
          <Card.Footer className='justify-end gap-3'>
            <Button variant='ghost' size='sm'>
              Skip
            </Button>
            <Button size='sm'>Review files</Button>
          </Card.Footer>
        </Card>

        <Card variant='ghost' padding='lg' className='h-full'>
          <Card.Header>
            <Card.Title as='h2' className='text-xl'>
              Weekly Summary
            </Card.Title>
            <Card.Description>Snapshot of progress across all initiatives.</Card.Description>
          </Card.Header>
          <Card.Content className='grid gap-3 text-sm'>
            <div className='rounded-lg border border-dashed px-4 py-3'>
              <span className='font-semibold text-foreground'>14</span> tasks completed
            </div>
            <div className='rounded-lg border border-dashed px-4 py-3'>
              <span className='font-semibold text-foreground'>3</span> goals achieved
            </div>
            <div className='rounded-lg border border-dashed px-4 py-3'>
              <span className='font-semibold text-foreground'>92%</span> of accessibility compliance
            </div>
          </Card.Content>
          <Card.Footer className='justify-between'>
            <span className='text-xs text-muted-foreground'>Generated 15 minutes ago</span>
            <Button size='sm' variant='outline'>
              Share summary
            </Button>
          </Card.Footer>
        </Card>
      </Section>
    </div>
  )
}

export default CardsDemo
`
}