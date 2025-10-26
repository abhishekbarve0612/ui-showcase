export default function getCodeSnippet(): string {
  return `import { Header, Main, Footer, Section, Heading, Tabs, ScrollArea, Button } from '@abhishekbarve/components'

const PROJECT_STATS = [
  { label: 'Projects Completed', value: '12', change: '+3 this week' },
  { label: 'Tasks Completed', value: '48', change: '18 resolved' },
  { label: 'Time Spent', value: '99.9%', change: 'Past 30 days' },
]

const ACTIVITY_LOG = [
  {
    title: 'Project 1: Component Library',
    author: 'Abhishek Barve',
    timestamp: '1 month ago',
  },
  {
    title: 'Project 2: OCR Agent',
    author: 'Abhishek Barve',
    timestamp: '2 months ago',
  },
  {
    title: 'Project 3: Portfolio Website',
    author: 'Abhishek Barve',
    timestamp: '1 week ago',
  },
  {
    title: 'Project 4: Story Generator',
    author: 'Abhishek Barve',
    timestamp: 'Yesterday',
  },
  {
    title: 'Project 5: Markdown Editor',
    author: 'Abhishek Barve',
    timestamp: '5 months ago',
  },
  {
    title: 'Project 6: Color Contrast Finder',
    author: 'Abhishek Barve',
    timestamp: '2 months ago',
  },
  {
    title: 'Project 7: RSS Feed Reader',
    author: 'Abhishek Barve',
    timestamp: '2 months ago',
  }
]

const ROADMAP_ITEMS = [
  {
    phase: 'Development',
    title: 'Component Library: Showcase',
    owner: 'Abhishek Barve',
    due: 'Due Nov 15',
  },
  {
    phase: 'Improvement & Bug Fixes',
    title: 'OCR Agent: Integration',
    owner: 'Abhishek Barve',
    due: 'Due Nov 20',
  },
  {
    phase: 'Deployment',
    title: 'Portfolio Website: Deployment',
    owner: 'Abhishek Barve',
    due: 'Due Nov 25',
  },
]

function LayoutDemo() {
  return (
    <div className='overflow-hidden rounded-3xl border bg-surface-1 shadow-xl'>
      <Header variant='minimal' className='gap-6'>
        <div className='flex items-center gap-2'>
          <span className='text-lg font-semibold text-foreground'>Aurora Console</span>
          <span className='rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground'>v2.4</span>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm'>
            Invite teammate
          </Button>
          <Button size='sm'>Create project</Button>
        </div>
      </Header>

      <Main id='layout-demo-main' className='w-full space-y-10 bg-background px-4 py-10 lg:px-12'>
        <Section className='space-y-6'>
          <div className='space-y-3'>
            <Heading.H1 className='text-foreground'>Workspace overview</Heading.H1>
            <p className='text-sm text-muted-foreground max-w-2xl'>
              Monitor adoption, review feedback, and coordinate teams from a single dashboard composed of the
              reusable layout primitives in this library.
            </p>
          </div>

          <Tabs defaultValue='overview' className='space-y-6'>
            <Tabs.List className='bg-muted/40'>
              <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
              <Tabs.Trigger value='roadmap'>Roadmap</Tabs.Trigger>
              <Tabs.Trigger value='activity'>Activity</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value='overview' className='space-y-6'>
              <div className='grid gap-4 md:grid-cols-3'>
                {PROJECT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className='rounded-xl border bg-card px-5 py-4 shadow-sm transition-all hover:border-border/70 hover:shadow-md'
                  >
                    <p className='text-xs uppercase tracking-wide text-muted-foreground'>{stat.label}</p>
                    <p className='text-2xl font-semibold text-foreground'>{stat.value}</p>
                    <p className='text-xs text-muted-foreground'>{stat.change}</p>
                  </div>
                ))}
              </div>

              <div className='grid gap-6 lg:grid-cols-[2fr,1fr]'>
                <div className='space-y-6'>
                  <Section className='space-y-4'>
                    <Heading.H3 className='text-foreground'>Key highlights</Heading.H3>
                    <ul className='grid gap-3 text-sm text-muted-foreground md:grid-cols-2'>
                      <li className='rounded-lg border border-dashed px-4 py-3'>
                        Finished the component library and started the OCR agent.
                      </li>
                      <li className='rounded-lg border border-dashed px-4 py-3'>
                        Deployed the portfolio website and the story generator.
                      </li>
                      <li className='rounded-lg border border-dashed px-4 py-3'>
                        Fixed the bugs in the OCR agent and the component library.
                      </li>
                      <li className='rounded-lg border border-dashed px-4 py-3'>
                        Deployed the markdown editor
                      </li>
                    </ul>
                  </Section>
                </div>

                <div className='space-y-3'>
                  <Heading.H4 className='text-foreground'>Team activity</Heading.H4>
                  <ScrollArea height={260} className='rounded-xl border bg-card shadow-sm'>
                    <div className='divide-y'>
                      {ACTIVITY_LOG.map((item) => (
                        <div key={item.title} className='space-y-1 px-4 py-3'>
                          <p className='text-sm font-medium text-foreground'>{item.title}</p>
                          <p className='text-xs text-muted-foreground'>
                            {item.author} · {item.timestamp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value='roadmap' className='space-y-4'>
              <Heading.H3 className='text-foreground'>Upcoming milestones</Heading.H3>
              <ScrollArea maxHeight={320} className='rounded-2xl border bg-card shadow-sm'>
                <div className='divide-y'>
                  {ROADMAP_ITEMS.map((item) => (
                    <div key={item.title} className='flex items-center justify-between gap-4 px-5 py-4'>
                      <div className='space-y-1'>
                        <p className='text-xs uppercase tracking-wide text-muted-foreground'>{item.phase}</p>
                        <p className='text-sm font-medium text-foreground'>{item.title}</p>
                        <p className='text-xs text-muted-foreground'>Owned by {item.owner}</p>
                      </div>
                      <span className='rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground'>{item.due}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Tabs.Content>

            <Tabs.Content value='activity' className='space-y-4'>
              <Heading.H3 className='text-foreground'>All workspace updates</Heading.H3>
              <ScrollArea maxHeight={340} className='rounded-xl border bg-card shadow-sm'>
                <div className='divide-y'>
                  {ACTIVITY_LOG.concat(ACTIVITY_LOG).map((item, index) => (
                    <div key={item.title + "-" + index} className='flex flex-col gap-1 px-5 py-3'>
                      <p className='text-sm text-foreground'>{item.title}</p>
                      <p className='text-xs text-muted-foreground'>
                        {item.author} · {item.timestamp}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </Tabs.Content>
          </Tabs>
        </Section>
      </Main>

      <Footer variant='minimal' size='sm'>
        <div className='flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
          <span>© {new Date().getFullYear()} Aurora Labs. Crafted with the layout primitives from this library.</span>
          <div className='flex gap-4'>
            <a href='#' className='hover:text-foreground'>
              Status
            </a>
            <a href='#' className='hover:text-foreground'>
              Docs
            </a>
            <a href='#' className='hover:text-foreground'>
              Support
            </a>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default LayoutDemo
`
}