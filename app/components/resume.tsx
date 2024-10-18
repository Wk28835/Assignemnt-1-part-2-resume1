// app/components/Resume.tsx

import React from 'react';

const Resume: React.FC = () => {
    return (
        <div className="container">
            {/* Basic Info Section */}
            <section id="basic-info" className="basic-info">
                <h1>John Doe</h1>
                <h2>Web Developer</h2>
                <p>A passionate web developer with experience in building responsive and user-friendly websites.</p>
            </section>

            {/* Contact Info Section */}
            <section id="contact-info" className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: johndoe@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>
                <p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Git & GitHub</li>
                </ul>
            </section>

            {/* Education Section */}
            <section id="education" className="education">
                <h2>Education</h2>
                <ul>
                    <li>Bachelor of Science in Computer Science, XYZ University, 2022</li>
                    <li>Web Development Bootcamp, ABC Academy, 2021</li>
                </ul>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>Web Developer at Company A, 2022 - Present</li>
                    <li>Intern at Company B, 2021 - 2022</li>
                </ul>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio">
                <h2>Portfolio</h2>
                <ul>
                    <li><a href="https://www.exampleproject1.com" target="_blank">Project 1</a> - A brief description of project 1.</li>
                    <li><a href="https://www.exampleproject2.com" target="_blank">Project 2</a> - A brief description of project 2.</li>
                    <li><a href="https://www.exampleproject3.com" target="_blank">Project 3</a> - A brief description of project 3.</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
