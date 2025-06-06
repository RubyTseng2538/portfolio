import React from 'react';

const Summary = ({ imageSrc, text, projectTitle, onClick }) => {
    return (
        <div 
            className="flex flex-col items-center justify-center p-5 border border-secondary rounded-lg cursor-pointer flex-1 basis-[300px] max-w-[1000px] box-border m-5 hover:shadow-lg transition-shadow duration-300"
            onClick={onClick}
        >
            <div className="w-full text-center">
                <img 
                    src={imageSrc} 
                    alt="Project preview" 
                    className="max-w-[60%] h-auto rounded-lg mx-auto"
                />
            </div>
            <div className="text-center p-3">
                <h1 className="text-2xl mb-3">{projectTitle}</h1>
                <div className="h-5"></div>
                <p className="text-base leading-relaxed">{text}</p>
            </div>
        </div>
    );
};

export default Summary;