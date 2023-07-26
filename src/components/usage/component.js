import './style.css'
import Heading from '../heading/component'

function Usage() {
    return (
        <section id='usage'>
            <Heading text='Usage' />
            <p>
                To use the extension, simply type a trigger keyword for the snippet you want to insert, and press the tab key. The snippet will be inserted at the cursor position in your code. For example, if you want to insert a for loop, simply type "for" and press the tab key. This will insert a for loop snippet into your code.To view extension at Visual Studio Marketplace <a href='https://marketplace.visualstudio.com/items?itemName=JoePhilip.pythondjangocodesnippet&ssr=false#overview' target='_blank'>click here</a>
            </p>
            <table className='snippets-documentation-table'>
                <thead>
                    <tr>
                        <th>Prefix</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>def</td>
                        <td>Creates a function</td>
                    </tr>
                    <tr>
                        <td>lambda</td>
                        <td>Creates a lambda function (anonymous function)</td>
                    </tr>
                    <tr>
                        <td>class</td>
                        <td>Create a python class</td>
                    </tr>
                    <tr>
                        <td>for</td>
                        <td>Create a for loop</td>
                    </tr>
                    <tr>
                        <td>for</td>
                        <td>Create an inline for loop</td>
                    </tr>
                    <tr>
                        <td>if-inline</td>
                        <td>Creates an inline for loop</td>
                    </tr>
                    <tr>
                        <td>if</td>
                        <td>Create an if block</td>
                    </tr>
                    <tr>
                        <td>if</td>
                        <td>Create an if elif else block statement</td>
                    </tr>
                    <tr>
                        <td>elif</td>
                        <td>Create an elif block, elif blocks can only be used with if blocks</td>
                    </tr>
                    <tr>
                        <td>if</td>
                        <td>Create an if-else block</td>
                    </tr>
                    <tr>
                        <td>else</td>
                        <td>Create an else block, else blocks are only used with if,while loop or try-except statements</td>
                    </tr>
                    <tr>
                        <td>try</td>
                        <td>Create a try except block can be used for handling exceptions</td>
                    </tr>
                    <tr>
                        <td>try</td>
                        <td>Create a try except block can be used for handling exceptions</td>
                    </tr>
                    <tr>
                        <td>args</td>
                        <td>Add positional arguments to definition of function</td>
                    </tr>
                    <tr>
                        <td>kwargs</td>
                        <td>Add keyword arguments to definition of a function</td>
                    </tr>
                    <tr>
                        <td>args</td>
                        <td>Add positional and keyword arguments to definition of a function</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>Add an API route</td>
                    </tr>
                    <tr>
                        <td>url</td>
                        <td>Add an API route for model viewset</td>
                    </tr>
                    <tr>
                        <td>url_args</td>
                        <td>Add arguments in a URL path</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>Create a django model</td>
                    </tr>
                    <tr>
                        <td>meta</td>
                        <td>Add meta class to django models</td>
                    </tr>
                    <tr>
                        <td>def</td>
                        <td>Override the default save method of a model</td>
                    </tr>
                    <tr>
                        <td>def</td>
                        <td>Add an __str__ method to a model</td>
                    </tr>
                    <tr>
                        <td>db_table</td>
                        <td>Add db table meta options to a model</td>
                    </tr>
                    <tr>
                        <td>verbose_name</td>
                        <td>Add verbose name meta option to a django model</td>
                    </tr>
                    <tr>
                        <td>verbose_name_plural</td>
                        <td>Add plural of verbose name as meta option to a django model</td>
                    </tr>
                    <tr>
                        <td>char</td>
                        <td>Add a char field to django model</td>
                    </tr>
                    <tr>
                        <td>float</td>
                        <td>Add a float field to django model</td>
                    </tr>
                    <tr>
                        <td>integer</td>
                        <td>Add an Integer field in a django model</td>
                    </tr>
                    <tr>
                        <td>image</td>
                        <td>Add a char field to Django model</td>
                    </tr>
                    <tr>
                        <td>foreign</td>
                        <td>Create a foreign key relation in a Django model</td>
                    </tr>
                    <tr>
                        <td>m2m</td>
                        <td>Create a many to many relation in a Django model</td>
                    </tr>
                    <tr>
                        <td>serializer</td>
                        <td>Define a django serializer</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>Create a model serialzer for serializing and desearializing input/output</td>
                    </tr>
                    <tr>
                        <td>validation</td>
                        <td>Raise a validation error in serializer</td>
                    </tr>
                    <tr>
                        <td>method</td>
                        <td>Add serializer method field</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Usage;