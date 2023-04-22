import './style.css'
import Heading from '../heading/component'

function Installation() {
    return (
        <section id='installation'>
            <Heading text='Installation' />
            <ol>
                <li>Open Visual Studio Code</li>
                <li>Go to the Extensions view (View &lt; Extensions)</li>
                <li>Search for "Python Django code snippets"</li>
                <li>Click on the Install button</li>
                <li>Reload Visual Studio Code to activate the extension</li>
            </ol>
        </section>
    )
}

export default Installation