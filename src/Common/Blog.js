import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-900 lg:w-1/2 sm:w-full mx-auto rounded-xl shadow-2xl text-white '>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title    ">
                    <h1>
                        1. What is Cors?
                    </h1>
                </div>
                <div className="collapse-content    ">
                    <p>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title    ">
                    <h1>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div className="collapse-content   ">
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    <p>On this page.
                        Add and initialize the Authentication SDK.
                        (Optional) Prototype and test with Firebase Local Emulator Suite.
                        Sign up new users.
                        Sign in existing users.
                        Set an authentication state observer and get user data.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title    ">
                    3.  How does the private route work?
                </div>
                <div className="collapse-content   ">
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title   ">
                    4.  What is Node? How does Node work?
                </div>
                <div className="collapse-content   ">
                    <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.</p>
                    <p>It is used as backend service where javascript works on the server-side of the application.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;