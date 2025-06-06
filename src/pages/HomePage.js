import React from 'react';
import Summary from '../components/Summary';
import { useNavigate } from 'react-router-dom'
import mobile from '../images/mobileEx.png';
import PWA from '../images/PWAEx2.png';
import Picture from '../images/Picture.jpg';

export default function HomePage(){
    let navigate = useNavigate();
    return (
        <div>
            <div className="bg-secondary py-12 min-h-[60vh] flex items-center">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="max-w-xl p-4">
                                <h1 className="text-5xl font-bold text-black text-left mb-4">Hi, I'm Ruby</h1>
                                <h2 className="text-xl text-left leading-relaxed">I translate ideas into fully functioning apps, focusing on intuitive design and scalable solutions.</h2>
                            </div>
                        </div>                        
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-0 md:mt-0">
                            <img className="w-[400px] min-w-[300px] max-w-[95%] h-auto object-contain shadow-lg rounded-lg" src={Picture} alt="Profile" />
                        </div>                   
                    </div>               
                </div>           
            </div>           
            <div className="bg-primary py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-textSecondary text-center mb-8">Works</h1>
                    <div className="flex flex-wrap justify-center gap-5">
                        <Summary 
                        imageSrc={PWA} 
                        projectTitle="Document Storing App"
                        text="The app allows users to store documents online and access them from anywhere.
                        It currently support only PDF files and youtube videos.
                        It is built using React, Firebase, and Ant Design."
                        onClick={()=>navigate('/project1')} />
                        <Summary 
                        imageSrc={mobile} 
                        projectTitle="Mobile Donation Tracking App"
                        text="A mobile app designed to simplify donation tracking and automate receipt management for non-profit organizations, ensuring transparency and efficiency in their financial operations."
                        onClick={()=>navigate('/project2')} />
                    </div>
                </div>
            </div>
        </div>
    )
}