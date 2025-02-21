import React from "react";
import { Stack } from "react-bootstrap";
import example from '../images/exampleMobile.png'
import CustomOutlineButton from "../components/Button";

export default function Project2(){
    return (
        <Stack className="project" gap={3}>
            <div className="p-2"><h1>Mobile Donation Tracking App</h1></div>
            <div className="p-2"><h4>A mobile app designed to simplify donation tracking and automate receipt management for non-profit organizations, ensuring transparency and efficiency in their financial operations.</h4></div>
            <div className="p-2" id="img-container"><img src={example} style={{width:"100%"}} alt="Project 2" /></div>        
            <div className="p-2"><h3>Purpose/Problem Solved:</h3></div>
            <div className="p-2"><p>The app was created to address common challenges non-profits face in tracking donations and issuing receipts. By automating these tasks, the app helps reduce manual work, minimize errors, and provide timely donation receipts to donors, improving overall trust and operational efficiency.</p></div>
            <div className="p-2"><h3>Key Features:</h3></div>
            <div className="p-2"><ul>
                <li>CRUD Operations: Create, read, update, and delete functionalities for managing donors, events, transactions, and transaction receipts.</li>
                <li>User Authentication and Authorization: Secure user access with role-based permissions.</li>
                <li>Automated Email Notifications: Generate and send transaction receipts directly to recipients via email.</li>
            </ul></div>
            <div className="p-2"><h3>Role/Responsibilities:</h3></div>
            <div className="p-2">
            <p>I played a key role in both backend development and frontend integration:</p>
                <ul>
                <li>Backend API Development: Designed and implemented the backend using Node.js and Express.js to handle donation tracking, user management, and receipt generation.</li>
                <li>Database Management: Utilized PostgreSQL with Prisma for efficient database management and Supabase for seamless data storage.</li>
                <li>Authentication Workflow: Implemented secure user authentication workflows, ensuring donor and admin accounts are protected.</li>
                <li>Frontend Integration: Connected the backend APIs to the app’s frontend, ensuring smooth communication and functionality across all features.</li>
                <li>Email Services: Integrated SendGrid for automated email notifications and receipt sending.</li>
                <li>Version Control & Development Workflow: Managed development through Git for version control and followed Agile methodologies for iterative development and team collaboration.</li>
            </ul></div>
            <div className="p-2"><h3>Technologies Used:</h3><ul>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: PostgreSQL, Prisma, Supabase</li>
            <li>Email Service: SendGrid</li>
            <li>Version Control: Git</li>
            <li>Development Workflow: Agile methodologies</li></ul></div>
            <div className="p-2"><CustomOutlineButton onClick={()=>window.open('https://github.com/RubyTseng2538/YoungsterDatabase')}>GitHub for Backend</CustomOutlineButton></div>
        </Stack>
    )
};

/*
Purpose/Problem Solved:

The app was created to address common challenges non-profits face in tracking donations and issuing receipts. By automating these tasks, the app helps reduce manual work, minimize errors, and provide timely donation receipts to donors, improving overall trust and operational efficiency.

CRUD Operations: Create, read, update, and delete functionalities for managing donors, events, transactions, and transaction receipts.
User Authentication and Authorization: Secure user access with role-based permissions.
Automated Email Notifications: Generate and send transaction receipts directly to recipients via email.


*/