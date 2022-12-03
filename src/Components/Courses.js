import React from 'react';
import Coursecontainer from './Coursecontainer';

const Courses = () => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            <div>
                <Coursecontainer></Coursecontainer>
            </div>
            <div className="card col-span-3  card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;