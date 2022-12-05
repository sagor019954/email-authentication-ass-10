import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-900 w-1/2 mx-auto rounded-xl shadow-2xl text-white text-center'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title    ">
                    Click me to show/hide content
                </div>
                <div className="collapse-content    ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title    ">
                    Click me to show/hide content
                </div>
                <div className="collapse-content   ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title    ">
                    Click me to show/hide content
                </div>
                <div className="collapse-content   ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title   ">
                    Click me to show/hide content
                </div>
                <div className="collapse-content   ">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;