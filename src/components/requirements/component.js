import Heading from '../heading/component';
import './style.css'

function Requirements() {
    return (
        <section id='requirements'>
            <Heading text='Requirements' />
            <ul>
                <li>Visual Studio Code</li>
                <li>Python 3.x or higher installed on your system</li>
            </ul>
        </section>
    )
}

export default Requirements;