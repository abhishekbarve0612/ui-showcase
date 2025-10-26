import getCodeSnippet from "./code"
import SandpackComponent from "@/client-components/SandpackComponent";


function Demo() {
    return (
        <SandpackComponent codeSnippet={getCodeSnippet()} />
    )
}

export default Demo;