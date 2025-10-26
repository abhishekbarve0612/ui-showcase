export default function getCodeSnippet(): string {
  return `import { useState } from 'react'
import { FiCalendar, FiCompass, FiHome, FiSettings, FiUsers } from 'react-icons/fi'
import { Sidebar, Button } from '@abhishekbarve/components'

const PRIMARY_ITEMS = [
  { label: 'Overview', icon: <FiHome className='h-4 w-4' />, active: true },
  { label: 'Roadmap', icon: <FiCompass className='h-4 w-4' /> },
  { label: 'Team', icon: <FiUsers className='h-4 w-4' /> },
  { label: 'Releases', icon: <FiCalendar className='h-4 w-4' /> },
]

const SECONDARY_ITEMS = [
  { label: 'Workspace', icon: <FiHome className='h-4 w-4' />, active: true },
  { label: 'Members', icon: <FiUsers className='h-4 w-4' /> },
  { label: 'Billing', icon: <FiCompass className='h-4 w-4' /> },
  { label: 'Settings', icon: <FiSettings className='h-4 w-4' /> },
]

function renderSidebarItems(items: typeof PRIMARY_ITEMS) {
  return items.map(({ label, icon, active }) => (
    <Sidebar.Item key={label} active={active}>
      <span className='flex items-center gap-3'>
        {icon}
        {label}
      </span>
    </Sidebar.Item>
  ))
}

function SidebarsDemo() {
  const [open, setOpen] = useState(false)
  const [openRight, setOpenRight] = useState(false)

  return (
    <div className='flex w-full flex-col gap-6'>
      <h3 className='text-base font-medium text-foreground'>Sidebars</h3>

      <div className='flex flex-wrap gap-3'>
        <Button variant='outline' onClick={() => setOpen(true)}>
          Open project sidebar
        </Button>
        <Button variant='outline' onClick={() => setOpenRight(true)}>
          Open settings sidebar
        </Button>
      </div>

      <Sidebar open={open} onClose={() => setOpen(false)} side='left' shouldBlurOverlay>
        <Sidebar.Header>Project Meta</Sidebar.Header>
        <Sidebar.Body>
          {renderSidebarItems(PRIMARY_ITEMS)}
        </Sidebar.Body>
        <Sidebar.Footer>
          <Button className='w-full' size='sm' variant='secondary' onClick={() => setOpen(false)}>
            Close sidebar
          </Button>
        </Sidebar.Footer>
      </Sidebar>

      <Sidebar open={openRight} onClose={() => setOpenRight(false)} side='right'>
        <Sidebar.Header>Workspace Settings</Sidebar.Header>
        <Sidebar.Body>
          {renderSidebarItems(SECONDARY_ITEMS)}
        </Sidebar.Body>
        <Sidebar.Footer className='flex flex-col gap-2'>
          <Button className='w-full' size='sm' variant='secondary'>
            Contact support
          </Button>
          <Button className='w-full' size='sm' onClick={() => setOpenRight(false)}>
            Save changes
          </Button>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

export default SidebarsDemo
`
}