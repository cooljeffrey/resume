// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";

import logo from "./logo.svg";
import "./App.css";

import Services from "./services.js";
import Header from "./components/Header.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import ContentContainer from "./components/ContentContainer.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  state: {
    state: string,
    data?: Object,
    error?: Object
  };

  static defaultProps: {
    username: "jeffrey"
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      state: "pending"
    };
  }

  componentDidMount() {
    /**
     * The username of the profile
     * @type {string}
     */
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

  fetchProfile(username: string) {
    return Services.getUserProfile(username);
  }

  render(): ?React$Element<any> {
    if (this.state.state === "loaded") {
      const profile = this.state.data;
      if (!profile) {
        return (
          <div className="App">
            <NavigationBar />
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p className="App-intro">
              <img src={logo} className="App-logo" alt="logo" />
              Loading, please wait ... ...
            </p>
            <Footer />
          </div>
        );
      }
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
          <Footer />
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
              <p>
                {this.state.error && this.state.error.message
                  ? this.state.error.message
                  : ""}
              </p>
            </blockquote>
          </p>
          <Footer />
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
          <Footer />
        </div>
      );
    }
  }
}

export default App;
