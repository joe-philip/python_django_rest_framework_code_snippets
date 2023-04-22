import './style.css'
import Heading from '../heading/component'

function Features() {
    return (
        <section id='features'>
            <Heading text='Features' />
            <ul>
                <li>A collection of pre-built code snippets for Python programming</li>
                <li>Snippets cover a wide range of Python programming concepts</li>
                <li>Easy-to-use interface for quickly inserting snippets into your code</li>
            </ul>
        </section>
    )
}

export default Features;