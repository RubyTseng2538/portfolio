import React from "react";
import Picture from '../images/Picture.jpg';

export default function About(){
    return (        <div className="bg-primary py-8 min-h-[90vh]">            <div className="container mx-auto px-2">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">                    <div className="w-full md:w-7/10 flex justify-center">
                        <div className="max-w-xl p-2">
                            <h1 className="text-5xl font-bold text-textSecondary text-left mb-3">More About Me</h1>
                            <div className="text-xl text-left leading-relaxed space-y-4">
                                <p>
                                    Hi, I'm Ruby Tseng, a developer based in Fremont, California. My passion for design started early, and over the years, I've developed a keen eye for style. While I enjoy intricate details in many areas, I prefer my web designs to be clean, sophisticated, and interactive.
                                </p>
                                <p>
                                    I'm detail-oriented but thrive in team settings, often drawing inspiration from my teammates' ideas to enhance my work. My focus is on creating engaging user interfaces with smooth, intuitive experiences.
                                </p>
                                <p>
                                    I'm proficient in JavaScript and experienced with libraries like React.js and Express.js, using them to bring ideas to life.
                                </p>
                                <p>
                                    In my free time, I love playing games and listening to K-pop Musics!
                                </p>                                <div className="mt-6">
                                    <h2 className="text-2xl font-bold mb-1">Technical Skills:</h2>
                                    <ul className="list-disc pl-4 space-y-0.5">
                                        <li>Programming Languages: JavaScript, HTML, CSS, TypeScript, Python</li>
                                        <li>Libraries/Frameworks: React.js, Express.js</li>
                                        <li>Databases: PostgreSQL, Firebase, Prisma.io</li>
                                        <li>Tools: Git & Github, Postman, ngrok</li>
                                        <li>Design: Figma, Adobe Photoshop, Clip Studio Paint</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                    </div>                    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                        <img className="w-[550px] min-w-[450px] max-w-[95%] h-auto object-contain shadow-lg rounded-lg" src={Picture} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};