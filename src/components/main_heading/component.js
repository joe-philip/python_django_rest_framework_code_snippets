import './style.css'
import image from './icon.png'

function MainHeading() {
    return (
        <section id='main-title'>
            <img src={image} className='icon' />
            <h1 className='main-heading'>Python Django Rest Framework code snippets</h1>
        </section>
    );
}

export default MainHeading;
