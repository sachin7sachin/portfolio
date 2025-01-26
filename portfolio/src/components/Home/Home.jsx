import "./Home.css";

const Home = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <br />
        <span className="introtext">
          I'm <span className="introName">Sachin</span>
          <br />a Full Stack Developer
        </span>
        <p className="para">
          I'm a dedicated full stack developer with a passion for building
          scalable and efficient web applications. Leveraging a robust set of
          programming skills, I specialize in both front-end and back-end
          technologies.
        </p>
      </div>
    </section>
  );
};

export default Home;
