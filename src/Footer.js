import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <footer className="bg-primary py-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-6 md:space-y-0">
                    <div className="w-full md:w-1/3 text-center">
                        <p>Design and Developed by Ruby Tseng</p>
                        <p>Copyright © {year} Ruby Tseng</p>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                            <div className="text-center">
                                <p className="font-medium">Social Media</p>
                                <div className="flex justify-center space-x-4 mt-2">
                                    <FaLinkedin 
                                        size={24} 
                                        className="cursor-pointer hover:text-textSecondary transition-colors" 
                                        onClick={() => window.open('https://www.linkedin.com/in/ruby-tseng-rt/')} 
                                    />
                                    <FaGithub 
                                        size={24} 
                                        className="cursor-pointer hover:text-textSecondary transition-colors" 
                                        onClick={() => window.open('https://github.com/RubyTseng2538')} 
                                    />
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <p className="font-medium">Location</p>
                                <p>Fremont, CA</p>
                            </div>
                            
                            <div className="text-center">
                                <p className="font-medium">Contacts</p>
                                <p>rubytseng54@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
