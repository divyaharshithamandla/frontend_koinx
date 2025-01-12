import React from 'react';
import './teamMembers.css';

const TeamMembers = () => {
  const team = [
    { name: 'John Smith', role: 'CEO', image: 'john smith.jpg', description: 'John is the CEO and leads the company with a vision for innovation and growth. He brings over 20 years of experience in the tech industry, having worked with both startups and established firms. John has a strong background in strategy, operations, and leadership, ensuring the company’s objectives are met with precision and clarity.' },
    { name: 'Elina Williams', role: 'CTO', image: 'elina williams.jpg', description: 'Jane is the CTO, responsible for the company\'s technological strategy and developments. With a decade of experience in software development, she’s led teams through critical product developments and system architectures. Her passion for solving complex technical challenges and pushing boundaries has been a driving force in the company’s technological advancements.' },
    { name: 'John Smith', role: 'Lead Developer', image: 'john smith1.jpg', description: 'Sam leads the development team and ensures that projects are delivered on time and with excellence. His expertise in full-stack development allows him to collaborate across the entire tech stack. Sam focuses on optimizing performance, scalability, and user experience, contributing significantly to the company’s success through his technical leadership and problem-solving skills.' },
  ];

  return (
    <div className="team-members">
      <h3>Team Members</h3>
      <div className="team-list">
        {team.map((member, index) => (
          <div key={index} className="member-card">
            <div className="left-side">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
            </div>
            <div className="right-side">
              <p><strong>Role: </strong>{member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
