export default function getCodeSnippet(): string {
  return `import { Button, Navbar } from '@abhishekbarve/components'
import '@abhishekbarve/components/styles';

const MAIN_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Support', href: '#support' },
]

const SECONDARY_LINKS = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Teams', href: '#teams' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Changelog', href: '#changelog' },
]

function renderLinks(links: typeof MAIN_LINKS) {
  return links.map(({ label, href, active }) => (
    <Navbar.Item key={label} active={active}>
      <a href={href} className='inline-flex items-center text-sm font-medium'>
        {label}
      </a>
    </Navbar.Item>
  ))
}

function NavbarsDemo() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <h3 className='text-base font-medium text-foreground'>Navbars</h3>

      <div className='flex flex-col gap-2'>
        <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          Standard Navbar
        </span>
        <Navbar className='rounded-xl border bg-background'>
          <Navbar.Brand>Acme Studio</Navbar.Brand>

          <Navbar.Group align='center'>{renderLinks(MAIN_LINKS)}</Navbar.Group>

          <Navbar.Group align='right' className='gap-4'>
            <Navbar.Item>
              <a href='#status' className='inline-flex items-center text-sm font-medium'>
                Status
              </a>
            </Navbar.Item>
            <Navbar.Item>
              <Button variant='secondary' size='sm'>
                Sign in
              </Button>
            </Navbar.Item>
            <Navbar.Item>
              <Button size='sm'>Sign up</Button>
            </Navbar.Item>
          </Navbar.Group>
        </Navbar>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          Collapsible Navbar
        </span>
        <Navbar collapsible breakpoint='md' className='rounded-xl border bg-background'>
          <Navbar.Brand>Orbit OS</Navbar.Brand>

          <Navbar.Group align='center'>{renderLinks(SECONDARY_LINKS)}</Navbar.Group>

          <Navbar.Group align='right' className='gap-3'>
            <Navbar.Item>
              <Button variant='ghost' size='sm'>
                Feedback
              </Button>
            </Navbar.Item>
            <Navbar.Item>
              <Button size='sm'>
                Launch
              </Button>
            </Navbar.Item>
          </Navbar.Group>
        </Navbar>
      </div>
    </div>
  )
}

export default NavbarsDemo
`
}