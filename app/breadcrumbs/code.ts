export default function getCodeSnippet(): string {
  return `import { Breadcrumb } from '@abhishekbarve/components'

const PROJECT_PATH = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interface Kit', href: '#interface-kit' },
  { label: 'Settings', isCurrentPage: true },
]

const DOCS_PATH = [
  { label: 'Docs', href: '#' },
  { label: 'Components', href: '#components' },
  { label: 'Breadcrumb', href: '#breadcrumb' },
  { label: 'API Reference', isCurrentPage: true },
]

function renderItems(items: typeof PROJECT_PATH) {
  return items.map(({ label, href, isCurrentPage }) => (
    <Breadcrumb.Item key={label} href={href} isCurrentPage={isCurrentPage}>
      {label}
    </Breadcrumb.Item>
  ))
}

function BreadcrumbsDemo() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <h3 className='text-base font-medium text-foreground'>Breadcrumbs</h3>

      <div className='flex flex-col gap-2'>
        <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          Default Divider
        </span>
        <Breadcrumb>{renderItems(PROJECT_PATH)}</Breadcrumb>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
          Custom Divider
        </span>
        <Breadcrumb divider='›' className='text-sm text-muted-foreground'>
          {renderItems(DOCS_PATH)}
        </Breadcrumb>
      </div>
    </div>
  )
}

export default BreadcrumbsDemo
`
}