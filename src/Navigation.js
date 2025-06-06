import React from "react";
import { Link } from "react-router-dom";
import resume from './pages/resume.pdf'; // Assuming you have a PDF file for download

const Navigation = () => {
    return (
        <nav className="bg-secondary py-4 px-6">
            <div className="container mx-auto flex justify-end">
                <div className="flex gap-8">
                    <div className="nav-item">
                        <Link to="/" className="text-black text-lg hover:underline">Portfolio</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/about" className="text-black text-lg hover:underline">About</Link>
                    </div>
                    <div className="nav-item">
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="text-black text-lg hover:underline">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
