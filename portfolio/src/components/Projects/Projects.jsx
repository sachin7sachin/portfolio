import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projectsh1">
        <h1>Projects</h1>
      </div>

      <div className="projectContainer">
        <span className="major">B.Tech - Major Project</span>
        <br />
        <span className="title">
          Title :
          <span className="titleContext">
            Smart home security and surveillance system using raspberry pi.
          </span>
        </span>
        <br />
        <span className="tech">
          Technologies used : <span className="techContext"> CNN, Python.</span>
        </span>
        <br />
        <span className="objective">
          Objective :
          <span className="objectiveContext">
            The main purpose of our project is to enhance the security system of
            a home by making the door unlocking system advanced and by improving
            the surveillance system. We can get alert notifications when any
            unauthorised person is detected by our security system. We can get
            live stream to our device.
          </span>
        </span>
      </div>
      <div className="more">
        <p className="morePara">For more, click below image</p>
        <a href="https://github.com/sachin7sachin" target="_blank">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
            height={70}
            alt="github"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Projects;
