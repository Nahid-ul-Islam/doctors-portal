import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ExceptionalCare = () => {
    return (
        <div className="card lg:card-side bg-base-100  gap-10 mb-40">
            <figure><img className='lg:w-[350px] sm:w-[450px] rounded-xl' src={treatment} alt="Album" /></figure>
            <div className="card-body" className='flex flex-col justify-center'>
                <div className='sm:mx-5 lg:mx-0'>
                    <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions" className='mt-5'>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;


