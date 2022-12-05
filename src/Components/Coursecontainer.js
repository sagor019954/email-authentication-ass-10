import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Coursecontainer = () => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allcourses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    // console.log(course);
    return (
        <div>
            <div>
                {
                    course.map(cour => <ul className='mb-5' key={cour.id}>
                        <Link to={`/courses/${cour.id}`}>
                            <li key={cour.id} className="bg-gray-900 text-white p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                {
                                    cour.name
                                }
                            </li>
                        </Link>
                    </ul>)
                }
            </div>
        </div>
    );
};

export default Coursecontainer;