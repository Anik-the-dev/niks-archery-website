import React from 'react';

const Blog = () => {
    return (
        <div className='project-body  project-container'>
            <div className='blog'>
                <div>
                    <h1>What's the Purpose of Context API ?</h1>
                    <p>We know React follows one-way data flow pattern where props drilling problems occurs that happen unusual props transform for unused component. To solve this, we could use HOC patter or render props patter but these also not quite suitable as they can't solve props drilling problem rather they just avoild props drilling problem. To solve this problem, Context API is used that creats a Context and use it in specific component and wrap the parent with the context provider and provide the value as a props.</p>
                </div>
                <br></br><br></br>
                <div>
                    <h1>What is Semantic Tag?</h1>
                    <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                        On the flip side of this equation, tags such as b and i tags are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
                        </div>
                    </div>


                </div>
                );
};

                export default Blog;