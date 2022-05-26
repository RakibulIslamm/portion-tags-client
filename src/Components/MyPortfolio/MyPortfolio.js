import React, { useEffect, useState } from 'react';
import Project from './Project/Project';

const MyPortfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className="px-20 sm:px-10 md:px-14 xs:px-5 flex justify-center items-center flex-col py-8">
            <div className='text-center space-y-4 mb-8 w-full'>
                <h1 className='text-2xl font-semibold'>Name: Rakibul Islam</h1>
                <p>Email: rakibulislam01685@gmail.com</p>
                <h2 className='text-xl font-semibold'>Education: Studies Graphic Design And Multimedia at <br /> Shanto Mariam University of Creative Technology</h2>
                <p><b>Skills:</b><br />
                    <b>Expertise:</b> JavaScript, ES6, React, React Hook, React Router, Rest API, Tailwind, Bootstrap5, HTML5, CSS3 <br />
                    <b>Comfortable:</b> NodeJs, ExpressJs, MongoDB, Firebase, JWT, MaterialUI <br />
                    <b>Familiar:</b> Redux, VueJs, NextJs, ReactNative, TypeScript <br />
                    <b>Tools:</b> Github, Chrome Dev Tool, Heroku, Netlify, VS Code, Figma, Photoshop
                </p>
            </div>
            <h1 className="text-center text-4xl font-bold py-4 text-black">My Projects</h1>
            <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-5">
                {
                    projects.map(project => <Project key={project.projectName} project={project}></Project>)
                }
            </div>
        </div>
    )
};

export default MyPortfolio;