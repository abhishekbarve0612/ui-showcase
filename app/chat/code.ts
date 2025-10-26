export default function getCodeSnippet(): string {
    return `
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import "@abhishekbarve/components/styles";
import { ChatLayout } from '@abhishekbarve/components'

type Author = 'assistant' | 'user'

interface DemoMessage {
    id: string
    author: Author
    text: string
    timestamp: Date
}

const INITIAL_MESSAGES: DemoMessage[] = [
    {
        id: 'assistant-0',
        author: 'assistant',
        text: 'Hey there! Looking for product recommendations today?',
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
        id: 'user-0',
        author: 'user',
        text: 'Yeah, I am searching for a lightweight laptop for travel.',
        timestamp: new Date(Date.now() - 1000 * 60 * 4),
    },
    {
        id: 'assistant-1',
        author: 'assistant',
        text: 'Great! What is more important—battery life or screen size?',
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
    },
]

const ASSISTANT_REPLIES = [
    'I would suggest the Aero 14 with a 12-hour battery—want a link?',
    'It also has a matte display, helpful in bright cafés.',
    'Let me know if you need accessories bundled in.',
]

function formatTime(timestamp: Date) {
    return timestamp.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function ChatDemo() {
    const [messages, setMessages] = useState<DemoMessage[]>(INITIAL_MESSAGES)
    const [replyInFlight, setReplyInFlight] = useState(false)
    const replyIndex = useRef(0)
    const replyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    const assistantName = 'Aero Support'

    const lastUpdated = useMemo(() => {
        return messages.length ? messages[messages.length - 1]?.timestamp : new Date()
    }, [messages])

    useEffect(() => {
        return () => {
            if (replyTimeout.current) clearTimeout(replyTimeout.current)
        }
    }, [])

    const scheduleReply = useCallback(() => {
        if (!ASSISTANT_REPLIES.length) return
        if (replyTimeout.current) {
            clearTimeout(replyTimeout.current)
        }

        setReplyInFlight(true)

        replyTimeout.current = setTimeout(() => {
            const text = ASSISTANT_REPLIES[replyIndex.current % ASSISTANT_REPLIES.length]
            replyIndex.current += 1
            setMessages((prev) => (
                [
                    ...prev,
                    {
                        id: \`assistant-\${Date.now()}\`,
                        author: 'assistant',
                        text,
                        timestamp: new Date(),
                    },
                ]
            ))
            setReplyInFlight(false)
            replyTimeout.current = null
        }, 900)
    }, [])

    const handleSend = useCallback((text: string) => {
        const trimmed = text.trim()
        if (!trimmed) return

        setMessages((prev) => (
            [
                ...prev,
                {
                    id: \`user-\${Date.now()}\`,
                    author: 'user',
                    text: trimmed,
                    timestamp: new Date(),
                },
            ]
        ))

        scheduleReply()
    }, [scheduleReply])

    return (
        <section className='flex w-full max-w-md flex-col overflow-hidden rounded-xl border bg-background shadow-sm'>
            <ChatLayout.Header>
                <div>
                    <ChatLayout.Header.Title>
                        {assistantName}
                    </ChatLayout.Header.Title>
                    <ChatLayout.Header.Subtitle>Active • {formatTime(lastUpdated)}</ChatLayout.Header.Subtitle>
                </div>
                <ChatLayout.Header.Status />
            </ChatLayout.Header>

            <ChatLayout aria-label='Product support conversation' className='bg-muted/10 px-4 py-3 max-h-[500px]'>
                {messages.map((message, index) => {
                    const incoming = message.author === 'assistant'

                    return (
                        <>
                            {
                                index === 5 && (
                                    <ChatLayout.Message.Divider
                                        key={\`divider-\${index}\`}
                                        label='2025-10-25'
                                        srLabel='Date separator'
                                        isDecorative={false}
                                        lineClass='bg-current/20'
                                        labelClass='text-foreground'
                                    />
                                )
                            }
                            <ChatLayout.Message
                                key={message.id}
                                incoming={incoming}
                                ariaLabel={\`\${incoming ? assistantName : 'You'} at \${formatTime(message.timestamp)}\`}
                            >
                                <ChatLayout.Message.Content
                                    incoming={incoming}
                                    variant={incoming ? 'outline' : 'solid'}
                                    radius='xl'
                                    className={incoming ? 'bg-background' : 'bg-primary text-primary-foreground'}
                                >
                                    <p>{message.text}</p>
                                </ChatLayout.Message.Content>
                            </ChatLayout.Message>
                        </>
                    )
                })}
            </ChatLayout>

            <ChatLayout.Composer
                onSend={handleSend}
                className='gap-3 border-t bg-background px-3 py-2'
                disabled={replyInFlight}
            >
                <textarea
                    name='message'
                    placeholder={replyInFlight ? 'Waiting for reply…' : 'Type your message...'}
                    rows={2}
                    className='flex-1 resize-none rounded-lg border bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'
                    disabled={replyInFlight}
                />
                <ChatLayout.Composer.SendButton loading={replyInFlight} loadingText='Thinking...' className='w-[100px] h-[-webkit-fill-available]'>
                    Send
                </ChatLayout.Composer.SendButton>
            </ChatLayout.Composer>
        </section>
    )
}

export default ChatDemo
`;
}