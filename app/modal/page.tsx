
import { getModalCodeSnippet, getControlledModalCodeSnippet } from "./code"
import { getTailwndCssConfig } from "../utils"
import SandpackComponent from "@/client-components/SandpackComponent";

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

function Demo() {
    return (
        <SandpackComponent files={files} />
    )
}

export default Demo;