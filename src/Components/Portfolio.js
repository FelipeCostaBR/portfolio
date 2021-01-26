import React, { Component } from "react";
class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        let techs = {
          CSS3: "icons8-css3-100.jpg",
          JAVA: "icons8-java-100.jpg",
          JAVASCRIPT: "icons8-javascript-100.jpg",
          SQL_SERVER: "icons8-sql-server-100.jpg",
          NODEJS: "icons8-nodejs-100.jpg",
          POSTGRESQL: "icons8-postgresql-100.jpg",
          REACTJS: "icons8-react-100.jpg",
          REACT_NATIVE: "icons8-react-native-100.jpg",
          RUBY: "icons8-ruby.jpg",
          TYPESCRIPT: "icons8-typescript-100.jpg",
        };

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div key={projects.title} className="techs-icon">
              {projects.techs.map((tech, index) => (
                <img
                  key={index}
                  alt={tech}
                  src={`images/techs/${techs[tech]}`}
                />
              ))}
            </div>
            <div className="item-wrap">
              <a target="_blank" href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
