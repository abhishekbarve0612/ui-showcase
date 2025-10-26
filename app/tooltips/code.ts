export default function getCodeSnippet(): string {
  return `import { useRef } from 'react'
import { Tooltip, Button } from '@abhishekbarve/components'

function TooltipsDemo() {
    const avatarRef = useRef<HTMLDivElement>(null)
    const analyticRef = useRef<HTMLButtonElement>(null)

    return (
        <div className='flex w-full flex-col gap-6'>
            <h3 className='text-base font-medium text-foreground'>Tooltips</h3>

            <div className='grid gap-4 lg:grid-cols-2'>
                <div className='space-y-3 rounded-xl border bg-background p-4 shadow-sm'>
                    <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                        Hover & Focus Tooltip
                    </span>
                    <div className='flex items-center gap-3 rounded-lg border bg-muted/20 px-4 py-3'>
                        <div
                            ref={avatarRef}
                            className='bg-primary/10 text-primary inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold'
                        >
                            JL
                        </div>
                        <div className='leading-tight'>
                            <p className='text-sm font-medium text-foreground'>Jordan Lee</p>
                            <p className='text-xs text-muted-foreground'>Product Director</p>
                        </div>
                    </div>

                    <Tooltip targetRef={avatarRef} showArrow className='rounded-md border bg-background p-3 shadow-xl'>
                        <Tooltip.Header className='text-sm font-medium text-foreground'>Jordan Lee</Tooltip.Header>
                        <Tooltip.Body className='text-xs text-muted-foreground'>
                            Leads the growth initiatives across design and product squads.
                        </Tooltip.Body>
                    </Tooltip>
                </div>

                <div className='space-y-3 rounded-xl border bg-background p-4 shadow-sm'>
                    <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
                        Click Tooltip with Actions
                    </span>
                    <Button ref={analyticRef} variant='outline' className='w-fit'>
                        Analytics options
                    </Button>

                    <Tooltip
                        targetRef={analyticRef}
                        trigger='click'
                        interactive
                        showArrow
                        showCloseButton
                        className='w-56 rounded-lg border bg-background p-3 shadow-xl'
                    >
                        <Tooltip.Header className='flex items-center justify-between text-sm font-semibold text-foreground'>
                            Export analytics
                        </Tooltip.Header>
                        <Tooltip.Body className='flex flex-col gap-2 pt-2 text-xs text-muted-foreground'>
                            <Button variant='ghost' size='sm' className='justify-start text-left text-xs'>
                                Download CSV
                            </Button>
                            <Button variant='ghost' size='sm' className='justify-start text-left text-xs'>
                                Share to Slack
                            </Button>
                            <Button variant='ghost' size='sm' className='justify-start text-left text-xs'>
                                Schedule email
                            </Button>
                        </Tooltip.Body>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default TooltipsDemo
`
}