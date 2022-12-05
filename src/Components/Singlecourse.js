import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Singlecourse = () => {
    const singleCourse = useLoaderData()
    return (
        <div>
            <div className="card mx-auto lg:card-side  w-1/2 bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={singleCourse.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{singleCourse.name}</h2>
                    <p>{singleCourse.details}</p>
                    <div className="card-actions justify-end">
                        <p>Prize:$ {singleCourse.prize}</p>
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singlecourse;