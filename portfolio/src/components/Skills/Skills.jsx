import "./Skills.css";
const Skills = () => {
  const skillsArray = [
    "Python",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "SQL",
    "Git & GitHub",
  ];

  return (
    <section id="skills">
      <div className="skillsHeading">
        <h1>Skills</h1>
      </div>
      <div className="skillsContainer">
        {skillsArray.map((skill) => (
          <div key={skill} className="skillContainer">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
