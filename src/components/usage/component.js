import './style.css'
import Heading from '../heading/component'

function Usage() {
    return (
        <section id='usage'>
            <Heading text='Usage' />
            <p>
                To use the extension, simply type a trigger keyword for the snippet you want to insert, and press the tab key. The snippet will be inserted at the cursor position in your code. For example, if you want to insert a for loop, simply type "for" and press the tab key. This will insert a for loop snippet into your code.
            </p>
        </section>
    )
}

export default Usage;