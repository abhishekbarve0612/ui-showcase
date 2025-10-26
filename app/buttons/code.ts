export default function getCodeSnippet(): string {
  return `import { Button } from '@abhishekbarve/components'
import '@abhishekbarve/components/styles';

import { FiArrowRight, FiSend } from 'react-icons/fi'

const BUTTON_PRESETS = [
  {
    element: (
      <Button variant='primary' size='lg'>
        Primary Large Button
      </Button>
    ),
  },
  {
    element: <Button variant='secondary'>Secondary</Button>,
  },
  {
    element: (
      <Button variant='outline' size='sm'>
        Outline Small Button
      </Button>
    ),
  },
  {
    element: (
      <Button variant='ghost' aria-label='Options'>
        Ghost Button
      </Button>
    ),
  },
  {
    element: (
      <Button variant='ghost' aria-label='Options'>
        <FiSend className='h-4 w-4' />
      </Button>
    ),
  },
  {
    element: <Button variant='destructive'>Delete</Button>,
  },
  {
    element: (
      <Button variant='primary'>
        <FiSend className='h-4 w-4' />
        Button with Icon on Left
      </Button>
    ),
  },
  {
    element: (
      <Button variant='secondary'>
        Button with Icon on Right
        <FiArrowRight className='h-4 w-4' />
      </Button>
    ),
  },
  {
    element: (
      <Button variant='link' className='px-0'>
        Link Button
      </Button>
    ),
  },
]

function ButtonsDemo() {
  return (
    <div className='flex w-full flex-col gap-6 p-4'>
      <h3 className='text-base font-medium text-foreground'>Buttons</h3>
      <div className='flex flex-wrap gap-6'>
        {BUTTON_PRESETS.map(({ label, element }) => (
          <div key={label} className='flex flex-col items-start gap-2'>
            {element}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ButtonsDemo
`
}