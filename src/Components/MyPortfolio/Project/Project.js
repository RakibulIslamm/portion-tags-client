import React from 'react';
import './project.css'

const Project = ({ project }) => {
    console.log(project);
    const { projectName, coverImg, shortDesc, liveLink } = project;
    return (
        <div className="w-full h-80 filter backdrop-blur-lg bg-red-500">
            <div className="w-full h-full relative overflow-hidden border">
                <div className="w-full h-full bg-cover bg-no-repeat bg-top transform transition-all duration-500 relative bg" style={{ backgroundImage: `url(${coverImg})` }} >
                    <div className="content p-5 w-full h-full flex justify-center items-center flex-col text-center transform -translate-y-72 text-white transition ease-out duration-500">
                        <h2 className="text-xl font-semibold">{projectName}</h2>
                        <p>{shortDesc}</p>
                        <a target='_blank' rel="noreferrer" href={liveLink} className="inline-block px-6 py-1 text-sm bg-yellow-400 text-white rounded-full mt-2">Visit</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;