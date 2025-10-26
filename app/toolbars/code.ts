export default function getCodeSnippet(): string {
  return `import { useState } from 'react'
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight, FiSearch, FiFilter, FiDownload } from 'react-icons/fi'
import { Toolbar, Section } from '@abhishekbarve/components'

const FORMATTING_ACTIONS = [
    { id: 'bold', label: 'Bold', icon: <FiBold className='h-4 w-4' /> },
    { id: 'italic', label: 'Italic', icon: <FiItalic className='h-4 w-4' /> },
    { id: 'underline', label: 'Underline', icon: <FiUnderline className='h-4 w-4' /> },
]

const ALIGNMENT_ACTIONS = [
    { id: 'align-left', label: 'Align Left', icon: <FiAlignLeft className='h-4 w-4' /> },
    { id: 'align-center', label: 'Align Center', icon: <FiAlignCenter className='h-4 w-4' /> },
    { id: 'align-right', label: 'Align Right', icon: <FiAlignRight className='h-4 w-4' /> },
]

const QUICK_ACTIONS = [
    { id: 'search', label: 'Search', icon: <FiSearch className='h-4 w-4' /> },
    { id: 'filter', label: 'Filter', icon: <FiFilter className='h-4 w-4' /> },
    { id: 'export', label: 'Export', icon: <FiDownload className='h-4 w-4' /> },
]

function toggleItem(list: string[], item: string) {
    return list.includes(item) ? list.filter((value) => value !== item) : [...list, item]
}

function ToolbarsDemo() {
    const [formatting, setFormatting] = useState<string[]>(['bold'])
    const [alignment, setAlignment] = useState<string>('align-left')
    const [quickActions, setQuickActions] = useState<string[]>([])

    return (
        <div className='flex w-full flex-col gap-6'>
            <h3 className='text-base font-medium text-foreground'>Toolbars</h3>

            <Section className='flex gap-6'>
                <div className='space-y-3 rounded-xl border bg-background p-4 shadow-sm'>
                    <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground pb-2'>Text Formatting</span>
                    <p className='text-xs text-muted-foreground'>The toolbar is tab-able and can be focused using the keyboard.</p>
                    <Toolbar
                        activeItems={[...formatting, alignment]}
                        variant='compact'
                    >
                        {FORMATTING_ACTIONS.map((action) => (
                            <Toolbar.Item
                                key={action.id}
                                {...action}
                                onSelect={(id) => setFormatting((prev) => toggleItem(prev, id))}
                            />
                        ))}
                        <Toolbar.Divider />
                        {ALIGNMENT_ACTIONS.map((action) => (
                            <Toolbar.Item
                                key={action.id}
                                {...action}
                                onSelect={(id) => setAlignment(id)}
                            />
                        ))}
                    </Toolbar>
                </div>

                <div className='space-y-3 rounded-xl border bg-background p-4 shadow-sm'>
                    <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>Minimal Quick Actions</span>
                    <Toolbar
                        orientation='vertical'
                        variant='minimal'
                        activeItems={quickActions}
                        className='float-right'
                    >
                        {QUICK_ACTIONS.map((action) => (
                            <Toolbar.Item
                                key={action.id}
                                {...action}
                                onSelect={(id) => setQuickActions((prev) => toggleItem(prev, id))}
                            />
                        ))}
                    </Toolbar>
                    <p className='text-xs text-muted-foreground'>
                        Hover to reveal labels, click to toggle an action state.
                    </p>
                </div>
            </Section>
        </div>
    )
}

export default ToolbarsDemo
`
}