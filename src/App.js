import React, { Component } from "react";
import PropTypes from "prop-types";

import logo from "./logo.svg";
import "./App.css";

import Services from "./services.js";
import Header from "./components/Header.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import ContentContainer from "./components/ContentContainer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { state: "pending", data: null, error: null };
  }

  componentDidMount() {
    const username = this.props.username;

    const _this = this;

    this.fetchProfile(username)
      .then(response => {
        _this.setState({
          state: "loaded",
          data: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
        _this.setState({
          state: "error",
          error: error
        });
      });
  }

  fetchProfile(username) {
    return Services.getUserProfile(username);
  }

  render() {
    if (this.state.state === "loaded") {
      const profile = this.state.data;
      return (
        <div className="App">
          <NavigationBar />
          <Header
            name={profile.firstName + " " + profile.lastName}
            desc={profile.description}
            headshot={profile.profileImageUrls.square200}
            linkedin={profile.social.linkedin.url}
            github={profile.social.github.url}
          />
          <ContentContainer profile={profile} />
        </div>
      );
    } else if (this.state.state === "error") {
      return (
        <div className="App">
          <NavigationBar />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-intro">
            Oooooops, something bad happended
            <blockquote>
              <p>{this.state.error.message}</p>
            </blockquote>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavigationBar />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-intro">
            <img src={logo} className="App-logo" alt="logo" />
            Loading, please wait ...
          </p>
        </div>
      );
    }
  }
}

App.propTypes = {
  username: PropTypes.string
};

App.defaultProps = { username: "jeffrey" };

export default App;
