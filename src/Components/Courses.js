import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coursecontainer from './Coursecontainer';

const Courses = () => {

    const [allcor, setAllcor] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allcourses')
            .then(res => res.json())
            .then(data => setAllcor(data))
    }, [])

    return (
        <div className='flex'>
            <div className='basis-1/2'>
                <Coursecontainer></Coursecontainer>
            </div>
            <div className='  flex
            grid grid-cols-3 gap-4'>
                {
                    allcor.map(cor =>
                        <div key={cor.id} className="card m-5 text-white card-compact  bg-gray-900 shadow-xl">
                            <figure><img src={cor.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{cor.name}</h2>
                                <p>{cor.details.length < 25 ? <p> {cor.details}</p>
                                    : <p>{cor.details.slice(0, 75) + '...'}</p>
                                }</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/courses/${cor.id}`}> <button className="btn btn-primary">See More</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;