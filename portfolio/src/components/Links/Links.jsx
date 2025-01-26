import "./Links.css";

const Links = () => {
  return (
    <section id="links">
      <div className="linksH1">
        <h1>Links</h1>
      </div>

      <div className="linksContainer">
        <a href="https://github.com/sachin7sachin" target="_blank">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
            height={100}
            alt="github"
          ></img>
        </a>
        <a href="http://linkedin.com/in/shankuri-sachin-reddy" target="_blank">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/339/624/original/linkedin-icon-free-png.png"
            height={120}
            alt="linkedin"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Links;
