export default function getCodeSnippet(): string {
  return `import { useState } from 'react'
import { Toggle, Button } from '@abhishekbarve/components'

function TogglesDemo() {
  const [status, setStatus] = useState('Idle')
  const [syncEnabled, setSyncEnabled] = useState(false)

  return (
    <div className='flex w-full flex-col gap-6'>
      <h3 className='text-base font-medium text-foreground'>Toggles</h3>

      <div className='grid gap-4 lg:grid-cols-2'>
        <div className='space-y-3 rounded-xl border bg-background p-4 shadow-sm'>
          <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
            Toggle With Render Props
          </span>
          <Toggle onToggle={(on) => setStatus(on ? 'Live' : 'Paused')}>
            {({ on, toggle }) => (
              <div className='flex items-center justify-between rounded-lg border bg-muted/10 px-4 py-3'>
                <div className='flex flex-col'>
                  <span className='text-sm font-medium text-foreground'>Broadcast Status</span>
                  <span className='text-xs text-muted-foreground'>Current: {status}</span>
                </div>
                <Button size='sm' variant={on ? 'outline' : 'primary'} onClick={toggle}>
                  {on ? 'Stop stream' : 'Go live'}
                </Button>
              </div>
            )}
          </Toggle>
        </div>

        <div className='space-y-3 rounded-xl border bg-background p-4 shadow-sm'>
          <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
            Toggle Compound Components
          </span>
          <Toggle onToggle={setSyncEnabled}>
            <div className='flex flex-col gap-3 rounded-lg border bg-muted/10 px-4 py-3'>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-foreground'>Automatic Sync</span>
                <Toggle.Button size='sm' variant={syncEnabled ? 'secondary' : 'outline'}>
                  {syncEnabled ? 'Disable' : 'Enable'}
                </Toggle.Button>
              </div>
              <Toggle.On>
                <p className='text-xs text-emerald-600'>Sync is active—changes push instantly.</p>
              </Toggle.On>
              <Toggle.Off>
                <p className='text-xs text-muted-foreground'>Sync paused—manual refresh required.</p>
              </Toggle.Off>
            </div>
          </Toggle>
        </div>
      </div>
    </div>
  )
}

export default TogglesDemo
`
}