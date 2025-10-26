import SandpackComponent from "@/client-components/SandpackComponent"
import getCodeSnippet from "./code"

function Demo() {
    return (
        <SandpackComponent codeSnippet={getCodeSnippet()} />
    )
}

export default Demo;