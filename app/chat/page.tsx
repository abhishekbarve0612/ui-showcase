'use client'
import { Sandpack, SandpackThemeProp } from "@codesandbox/sandpack-react"
import getChatCodeSnippet from "./code"
import { getTailwndCssConfig } from "../utils"
import { useTheme } from "@abhishekbarve/components";

const dependencies = {
    '@abhishekbarve/components': 'latest',
    'tailwindcss': 'latest',
    '@tailwindcss/postcss': 'latest',
    'react-icons': 'latest',
}

const files = {
    'App.tsx': `
    import ChatDemo from './ChatDemo'

    export default function App() {
        return <ChatDemo />
    }
    `,
    'ChatDemo.tsx': getChatCodeSnippet().toString(),
    'globals.css': getTailwndCssConfig().toString(),
}

function ChatDemo() {
    const { theme } = useTheme();
    return (
        <Sandpack
            template="react-ts"
            theme={theme as unknown as SandpackThemeProp}
            customSetup={{
                dependencies,
            }}
            files={files}
            options={{
                editorHeight: '480px',
                showConsoleButton: true,
                wrapContent: true,
            }}
        />
    )
}

export default ChatDemo;