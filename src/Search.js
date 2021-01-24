import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      name2: "",
      programming: [
        {
          title:
            ".NET Core October 2020 Updates – 2.1.23 and 3.1.9 from .NET Blog",
          desc:
            "Today, we are releasing the .NET Core October 2020 Update. These updates contains reliability and other non-security fixes. See the individual release notes for... ",
        },
        {
          title:
            "Announcing Entity Framework Core (EF Core) 5 RC2 from .NET Blog",
          desc:
            "Today, the Entity Framework Core team announces the second release candidate (RC2) of EF Core 5.0. This is a feature complete... ",
        },
        {
          title: "R 4.0.3 now available from Revolutions",
          desc:
            "The R Core Team has released R 4.0.3, the latest update to the R statistical computing system. This is a... ",
        },
      ],
      blog: [
        {
          title:
            "Officers break down language barriers to help residents understand lockdown ",
          desc:
            "Members of ethnic minorities who work for city’s disciplinary services liaise with non-Chinese residents in Yau Tsim Mong. Officers say people viewed as difficult or uncooperative simply did not understand what was happening",
        },
        { title: "Denmark police arrest two for burning effigy of premier at virus protest ", desc: "A sign with the words ‘She must and should be killed’ was hung from an effigy of the prime minister and set alight, police said." },
        { title: "Scotland’s leader Nicola Sturgeon vows to push for second independence vote ", desc: "‘Boris Johnson just clearly fears the verdict and the will of the Scottish people,’ said Sturgeon." },
      ],
    };

    this.handleChangle = this.handleChangle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangle(e) {
    this.setState({ name: [e.target.value] });
  }

  handleClick() {
    this.setState({ name2: this.state.name });
  }

  render() {
    if (this.state.name2 == "programming") {
      return (
        <div className="search">
          <h4>What kind of content you are looking for?</h4>
          <div className="input">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangle}
            />
            <button onClick={this.handleClick}>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div>
            {this.state.programming.map((program) => (
              <div className="box">
                <h2>
                  <a href="#">{program.title}:</a>
                </h2>
                <p>{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (this.state.name2 == "blog") {
      return (
        <div className="search">
        <h4>What kind of content you are looking for?</h4>
          <div className="input">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangle}
            />
            <button onClick={this.handleClick}>
              <i class="fas fa-search"></i>
            </button>
          </div>
          {this.state.blog.map((blog) => (
            <div className="box">
              <h2>
                <a href="#">{blog.title}:</a>
              </h2>
              <p>{blog.desc}</p>
            </div>
          ))}
        </div>
      );
    } else if (this.state.name2 == "") {
      return (
        <div className="search">
        <h4>What kind of content you are looking for?</h4>
          <div className="input">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangle}
            />
            <button onClick={this.handleClick}>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="search">
        <h4>What kind of content you are looking for?</h4>
          <div className="input">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangle}
            />
            <button onClick={this.handleClick}>
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div>nothing found</div>
        </div>
      );
    }
  }
}

export default Search;
