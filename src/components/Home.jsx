import React from 'react';
import '../styles/Home.css';
import '../styles/SkillCard.css'; // Import the SkillCard CSS
import SkillCard from './SkillCard'; // Import the SkillCard component

const Home = () => {
  return (
    <div>
      <section id="home">
      <h1>Sajith Pradeep</h1>
      {/* <img src={avatar} alt="Avatar" className="avatar" /> */}
      <p class="roles">Product Manager | Business Analyst | Frontend developer</p>
      <p class="role-description">Experienced Business analyst & Scrum master, specialized in building Front end web and mobile applications for iOS and Android devices, looking out for opportunities to design and build cutting-edge products.</p>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <div className="skill-container">
          <SkillCard
            title="Product Management"
            overview="Strategic planning, roadmaps, and execution."
            skills="Creating product strategies, Defining KPIs and metrics, Collaborating with design teams, Creating wireframes, High-fidelity designs, Feature prioritization, Release planning"
          />
          <SkillCard
            title="Business Analyst"
            overview="Gathering and analyzing requirements to drive project success."
            skills="Documenting requirements, Creating user stories, Managing product backlogs, Detailed interaction with stakeholders, User flow and logic diagrams"
          />
          <SkillCard
            title="Agile Scrum Master"
            overview="Facilitating Agile processes and team dynamics."
            skills="Sprint planning, Demos, Standups, Retrospectives, Ensuring adherence to Agile practices, Delivering projects on time"
          />
          <SkillCard
            title="Front End Developer"
            overview="Designing and implementing user interfaces for web applications."
            skills="React, HTML, CSS, JavaScript, Responsive design, Performance optimization"
          />
        </div>
      </section>

    </div>
    
  );
};

export default Home;
