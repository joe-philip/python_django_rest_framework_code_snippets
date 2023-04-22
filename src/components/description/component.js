import Heading from '../heading/component'
import './style.css'

function Description() {
    return (
        <section id='description'>
            <Heading text='Description' />
            <p className='content'>
                Python django rest framework code snippets for VSCode is a VSCode extension that provides a collection of useful code snippets for Python programming in Django rest framework. The extension includes snippets for commonly used code segments, such as loops, functions, file handling, regular expressions, and more. With this extension, you can save valuable time and effort by quickly inserting these code segments into your projects, without the need to manually type them out.
            </p>
        </section>
    );
}

export default Description;