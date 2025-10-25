
'use client'
import { Sandpack, SandpackThemeProp } from "@codesandbox/sandpack-react"
import { getModalCodeSnippet, getControlledModalCodeSnippet } from "./code"
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
    import ModalDemo from './ModalDemo'
    import ControlledModalDemo from './ControlledModalDemo'
    export default function App() {
        return (
            <>
                <ModalDemo />
                <ControlledModalDemo />
            </>
        )
    }
    `,
    'ModalDemo.tsx': getModalCodeSnippet().toString(),
    'ControlledModalDemo.tsx': getControlledModalCodeSnippet().toString(),
    'globals.css': getTailwndCssConfig().toString(),
}

function ModalDemo() {
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

export default ModalDemo;