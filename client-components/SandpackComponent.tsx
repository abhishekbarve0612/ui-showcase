'use client'
import { Sandpack, SandpackThemeProp } from "@codesandbox/sandpack-react"
import { getTailwndCssConfig } from "@/app/utils"
import { useTheme } from "@abhishekbarve/components";

const dependencies = {
    '@abhishekbarve/components': 'latest',
    'tailwindcss': 'latest',
    '@tailwindcss/postcss': 'latest',
    'react-icons': 'latest',
}

const getFiles = (codeSnippet: string): Record<string, string> => {
    const files = {
        'App.tsx': `
        import Demo from './Demo'
        import '@abhishekbarve/components/styles'

        export default function App() {
            return <Demo />
        }
    `,
        'Demo.tsx': codeSnippet,
        'globals.css': getTailwndCssConfig().toString(),
    }
    return files;
}

interface Props {
    codeSnippet?: string;
    files?: Record<string, string>;
}

function SandpackComponent({ codeSnippet = '', files }: Props) {
    const { theme } = useTheme();
    const filesToUse = files ?? getFiles(codeSnippet);
    return (
        <Sandpack
            template="react-ts"
            theme={theme as unknown as SandpackThemeProp}
            customSetup={{
                dependencies,
            }}
            files={filesToUse}
            options={{
                editorHeight: '70dvh',
                showConsoleButton: true,
                wrapContent: true,
            }}
        />
    )
}

export default SandpackComponent;