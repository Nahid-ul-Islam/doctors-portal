import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
            className='flex flex-col items-center rounded-lg py-20'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-primary'>Contact Us</h3>
                <h2 className='text-white text-4xl '>Stay Connected With Us</h2>
            </div>
            <div className="w-full max-w-sm">
                <form className='flex flex-col mx-2 md:mx-0'>
                    <input className='rounded p-2 text-xl mb-2' type="email" name="email" id="email" placeholder='email' />
                    <input className='rounded p-2 text-xl mb-2' type="text" name='subject' id='subject' placeholder='subjecy' />
                    <textarea className='rounded p-2 text-xl mb-2' name="" id="" cols="50" rows="3" placeholder='your message'></textarea>
                    <input className='bg-primary rounded p-2 text-xl mb-2' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;