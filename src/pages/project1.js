import React from "react";
import { Stack } from "react-bootstrap";
import PWA from '../images/PWAEx2.png'
import CustomOutlineButton from "../components/Button";

export default function Project1(){
    return (
        <Stack className="project" gap={3}>
            <div className="p-2"><h1>Multimedia App</h1></div>
            <div className="p-2"><h4>A robust multimedia management application that allows authenticated users to upload, store, and display videos and documents. The app focuses on seamless media rendering, secure uploads, and responsive design to enhance the user experience across devices.</h4></div>
            <div className="p-2" id="img-container"><img src={PWA} style={{width:"70%"}} alt="Project 1" /></div>
            <div className="p-2"><h3>Purpose/Problem Solved:</h3></div>
            <div className="p-2"><p>Document App was developed to provide users with an intuitive platform for managing and viewing multimedia content, such as video links and document files. It ensures secure file handling, cloud-based storage, and a dynamic display to improve content accessibility and reliability.</p></div>
            <div className="p-2"><h3>Key Features:</h3></div>
            <div className="p-2"><ul>
                <li>Dynamic Media Display: Efficiently renders and displays video and document content to users.</li>
                <li>User-Authenticated Uploads: Allows secure uploads of video links (e.g., YouTube) and documents, accessible only to authenticated users.</li>
                <li>Cloud Storage Integration: Leveraged Firebase for reliable and scalable real-time data storage and management.</li>
                <li>Responsive Design: Ensured full compatibility across desktops, tablets, and mobile devices for an optimal user experience.</li>
            </ul></div>
            <div className="p-2"><h3>Role/Responsibilities:</h3></div>
            <div className="p-2"><p>As the frontend developer, I focused on the following areas:</p>
            <ul>
                <li>User Interface Development: Designed and built a user-friendly interface with React.js to provide an engaging multimedia experience.</li>  
                <li>Feature Integration: Implemented functionalities for secure uploads of video links and document files.</li>
                <li>Responsive & Accessible Design: Ensured a fully responsive design with accessibility standards in mind to improve usability for a diverse user base.</li>
                <li>Collaboration & Agile Workflow: Collaborated closely with the development team through sprints and code reviews, adhering to Agile best practices for efficient project development.</li>
            </ul></div>
            <div className="p-2"><h3>Technologies Used:</h3>
            <ul>
                <li>Frontend: React.js, Node.js, Ant Design Mobile for UI</li>
                <li>Database: Firebase for real-time storage and data management</li>
                <li>Git for version control and collaborative development</li>
                <li>Webpack for module bundling and asset optimization</li>
                <li>Agile methodologies for a structured development process</li>
            </ul></div>
            <div className="p-2"><CustomOutlineButton onClick={()=>window.open('https://github.com/RubyTseng2538/YoungsterApp')}>GitHub</CustomOutlineButton></div>
        </Stack>
    )
};
