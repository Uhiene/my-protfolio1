import React from 'react';

const Aside = () => {
    return (
        <div className='w-1/2 '>
            <h2 className='text-pink-500'>Hi, my name is</h2>
            <h1 className='text-6xl text-slate-500 font-semibold my-1'>Princess Uhiene</h1>
            <h3 className='text-3xl text-slate-400 font-semibold '>Frontend Developer & Youtuber</h3>
            <p className='text-lg text-slate-600 font-light my-4'>
                Versatile Frontend Dev passionate about exceptional digital experiences, specializing in design, project management, tutoring, and educational YouTube content.
            </p>
            <div className='flex items-center gap-10'>
                <button className='bg-pink-500 text-white p-4 rounded-lg'>Resume</button>
                <button className='border-pink-500 border text-pink-500 p-4 rounded-lg'>Projects</button>
            </div>
        </div>
    );
};

export default Aside;
